import React from "react";
import Gallery from "../sections/Gallery";
import { artist } from "../data/artistData";

const ArtistsGridPage = () => {
  return (
    <>
      <Gallery collection="아티스트" data={artist} />
    </>
  );
};
export default ArtistsGridPage;
