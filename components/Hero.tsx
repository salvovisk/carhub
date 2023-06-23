"use client";

import Image from "next/image";
import CustomButton from "./CustomButton";
import { generateCarImageUrl, heroCarImageUrl } from "@/utils";
import { CarImageBuilder } from "@/types";

const Hero = () => {
  const handleScroll = () => {};
  const heroCar: CarImageBuilder = {
    make: "Alfa",
    modelFamily: "Giulia",
    modelRange: "",
    modelVariant: "",
    angles: "23",
    modelYear: "2024",
    countryCode: "IT",
    paintId: "361",
  };
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find, book or rent a car — quickly and easily
        </h1>
        <p className="hero__subtitle">
          Streamline your car rental experience with our effortless booking
          process.
        </p>
        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image
            alt="hero"
            src={heroCarImageUrl(heroCar)}
            className="object-contain"
            fill
          />
        </div>
        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
