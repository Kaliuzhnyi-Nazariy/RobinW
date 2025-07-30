import Image from "next/image";
import countriesPhoto from "../../photos.json";

const PhotosList = ({
  chosenCountry,
}: {
  chosenCountry: "italy" | "australia" | "brazil" | "india";
}) => {
  const photo = countriesPhoto[0][chosenCountry].images;

  return (
    <ul className="mt-10 flex items-center flex-col gap-6 min-[768px]:grid min-[768px]:grid-cols-2 min-[768px]:grid-rows-2 min-[1440px]:flex-row min-[1440px]:flex min-[1440px]:flex-nowrap  ">
      {photo.map((p) => {
        return (
          <li key={p} className="min-[768px]:grid min-[768px]:justify-center">
            <Image
              src={p}
              alt={`${chosenCountry}' photo`}
              width={320}
              height={420}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default PhotosList;
