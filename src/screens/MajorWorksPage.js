import React from "react";
import Gallery from "../sections/Gallery";
import { works } from "../data/artistData";

const MajorWorksPage = () => {
  return (
    <>
      <Gallery collection="주요작품" data={works} />
    </>
  );
};

export default MajorWorksPage;
