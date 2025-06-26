import React from "react";
import Style from "@/styles/page.module.css";
import {
    BigNFTSlider,
    HeroSection,
    Service,
    Subscribe,
    Title,
    Category
} from "@/components/componentsindex";

export default function Home() {
    return (
        <div className={Style.homePage}>
            <HeroSection />
            <Service />
            <BigNFTSlider />
            <Title
                heading="Browse by category"
                paragraph="Explore the NFTs in the most featured categories."
            />
            <Category />
            <Subscribe />
        </div>
    );
}
