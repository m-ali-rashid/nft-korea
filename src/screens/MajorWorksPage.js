import React from "react";
import Gallery from "../sections/Gallery";
import { works } from "../data/artistData";

const MajorWorksPage = () => {
  return (
    <>
      <Gallery collection="μ£Όμμν" data={works} />
    </>
  );
};

export default MajorWorksPage;
