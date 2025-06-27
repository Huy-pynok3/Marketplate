import React from "react";
import Style from "@/styles/page.module.css";
import {
    BigNFTSlider,
    HeroSection,
    Service,
    Subscribe,
    Title,
    Category,
    Filter,
    NFTCard,
    Collection,
} from "@/components/componentsindex";

export default function Home() {
    return (
        <div className={Style.homePage}>
            <HeroSection />
            <Service />
            <BigNFTSlider />
            <Title
              heading="New Collection"
              paragraph="Discover the most outstanding NFTs in all topics of life."
            />
            <Collection/>
            <Title
              heading="Featured NFTs"
              paragraph="Discover the most outstanding NFTs in all topics of life."
            />
            <Filter />
            <NFTCard/>
            <Title
                heading="Browse by category"
                paragraph="Explore the NFTs in the most featured categories."
            />
            <Category />
            <Subscribe />
        </div>
    );
}
