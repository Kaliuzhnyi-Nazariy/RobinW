import React from "react";
// import "./styles.css";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import SponsorAutoItem from "./SponsorAutoItem";
import Image from "next/image";

const animation = { duration: 6500, easing: (t: number) => t };

const SponsorAutoLoop = () => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    renderMode: "performance",
    drag: false,
    slides: { perView: "auto" },
    rtl: true,
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });
  return (
    <div ref={sliderRef} className="keen-slider h-[140px] ">
      <SponsorAutoItem>
        <Image src="/CBRE.png" alt="CBRE" width={85} height={21} />
      </SponsorAutoItem>
      <SponsorAutoItem>
        <Image src="/epiq.png" alt="epiq" width={71} height={29} />
      </SponsorAutoItem>
      <SponsorAutoItem>
        <Image src="/f.png" alt="F" width={28} height={28} />
      </SponsorAutoItem>
      <SponsorAutoItem>
        <Image src="/Fresh.png" alt="leaf" width={21} height={21} />
      </SponsorAutoItem>
      <SponsorAutoItem>
        <Image
          src="/PlaceforMom.png"
          alt="aPlaceForMom"
          width={154}
          height={25}
        />
      </SponsorAutoItem>
      <SponsorAutoItem>
        <Image
          src="/MConnection.png"
          alt="MConnection"
          width={42}
          height={21}
        />
      </SponsorAutoItem>
    </div>
  );
};

export default SponsorAutoLoop;
