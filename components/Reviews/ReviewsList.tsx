import Image from "next/image";
import reviews from "../../reviews.json";

const ReviewsList = () => {
  return (
    <ul className="flex flex-col gap-12 max-[768px]:mx-[-6.5px] min-[1440px]:gap-[120px] max-[767px]:mt-16 max-[767px]:items-center ">
      {reviews.map((review) => {
        return (
          <li
            key={review.id}
            className="w-[332px] min-[1440px]:w-[calc((100vw-168px)/2)] "
          >
            <Image
              src={review.image}
              alt={`${review.company}'s photo`}
              width={332}
              height={360}
              className="h-[360px] w-[332px] object-cover object-center min-[1440px]:w-full "
            />
            <div className="p-8 border-[1] border-[var(--darkGrey)]">
              <h3>{review.message}</h3>
              <h4 className="text-[var(--lightGrey)] pt-16">{review.name}</h4>
              <div className="flex text-[var(--lightGrey)] ">
                <p>
                  {review.position}, {review.company}
                </p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default ReviewsList;
