import React from "react";
import Style from "@/styles/page.module.css";
import { HeroSection, Service } from "@/components/componentsindex";

export default function Home() {
  return (
    <div className={Style.homePage}>
      <HeroSection/>
      <Service />
    </div>
  );
}
