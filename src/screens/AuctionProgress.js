import React from "react";
import Gallery from "../sections/Gallery";
import { works } from "../data/artistData";

const AuctionProgress = () => {
  return (
    <>
      <Gallery collection="진행중인 경매" data={works} />
    </>
  );
};

export default AuctionProgress;
