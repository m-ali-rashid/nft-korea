import React from "react";
import MainDisplay from "../sections/MainDisplay";
// import Navigation from "../sections/Navigation";
import Gallery from "../sections/Gallery";
// import ConnectWalletModal from "../sections/ConnectWalletModal";
// import { mainNav } from "../data/navData";
import { works, artist } from "../data/artistData";

const HomePage = () => {
  return (
    <>
      <MainDisplay data={works.slice(0, 1)} />
      <Gallery collection="진행중인 경매" data={works.slice(0, 4)} />
      <Gallery collection="주요작품" data={works.slice(2, 6)} />
      <Gallery collection="아티스트" data={artist} />
    </>
  );
};

export default HomePage;
