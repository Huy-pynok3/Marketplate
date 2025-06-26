import React from "react";
import Style from "@/styles/page.module.css";
import { BigNFTSlider, HeroSection, Service } from "@/components/componentsindex";

export default function Home() {
  return (
    <div className={Style.homePage}>
      <HeroSection/>
      <Service/>
      <BigNFTSlider/>
    </div>
  );
}
