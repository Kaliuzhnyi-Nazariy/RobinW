import React from "react";
import SponsorLI from "./SponsorLI";
import Image from "next/image";
import SponsorAutoLoop from "./AutoSponsor/SponsorAutoLoop";

const Sponsors = () => {
  return (
    <div>
      <ul className="flex flex-wrap min-[1440px]:hidden">
        <SponsorLI>
          <Image src="/CBRE.png" alt="CBRE" width={85} height={21} />{" "}
        </SponsorLI>
        <SponsorLI>
          <Image src="/epiq.png" alt="epiq" width={71} height={29} />{" "}
        </SponsorLI>
        <SponsorLI>
          <Image src="/f.png" alt="F" width={28} height={28} />{" "}
        </SponsorLI>
        <SponsorLI>
          <Image src="/Fresh.png" alt="leaf" width={21} height={21} />{" "}
        </SponsorLI>
        <SponsorLI>
          <Image
            src="/PlaceforMom.png"
            alt="aPlaceForMom"
            width={154}
            height={25}
          />{" "}
        </SponsorLI>
        <SponsorLI>
          <Image
            src="/MConnection.png"
            alt="MConnection"
            width={42}
            height={21}
          />{" "}
        </SponsorLI>
      </ul>
      <div className="hidden min-[1440px]:block">
        <SponsorAutoLoop />
      </div>
    </div>
  );
};

export default Sponsors;
