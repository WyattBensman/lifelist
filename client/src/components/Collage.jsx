import { useState } from "react";
import CollageDropdown from "./CollageDropdown";

export default function Collage() {
  const [showFeatures, setShowFeatures] = useState(false);

  const handleShowFeatures = () => {
    setShowFeatures(!showFeatures);
  };

  return (
    <div className="flex flex-col items-center pt-16">
      <h2 className="text-5xl font-bold text-center text-black">Collage</h2>
      <p className="text-black text-center text-xl md:w-3/4 mt-8">
        A digital scrapbook for capturing and showcasing memories from a wide
        range of experiences
      </p>
      <div className="flex justify-center flex-wrap mt-10 text-[#346664] text-2xl font-medium ">
        <div className="flex flex-col w-1/3 md:w-fit items-center mx-5 md:mb-0 mb-6">
          <h4 className="mb-1">Media</h4>
          <img className="w-56" src="/images/mockups/media-collage.png" />
        </div>
        <div className="flex flex-col w-1/3 md:w-fit items-center mx-5 md:mb-0 mb-6">
          <h4 className="mb-1">Entries</h4>
          <img className="w-56" src="/images/mockups/entries-collage.png" />
        </div>
        <div className="flex flex-col w-1/3 md:w-fit items-center mx-5">
          <h4 className="mb-1">Activities</h4>
          <img className="w-56" src="/images/mockups/activities-collage.png" />
        </div>
        <div className="flex flex-col w-1/3 md:w-fit items-center mx-5">
          <h4 className="mb-1">Events</h4>
          <img className="w-56" src="/images/mockups/events-collage.png" />
        </div>
      </div>
      {showFeatures && <CollageDropdown />}
      <div
        className="flex justify-center items-center mt-9 mb-8 hover:text-[#34CC98] duration-200"
        onClick={handleShowFeatures}
      >
        {showFeatures ? (
          <i className="fa-solid fa-angle-down fa-flip-vertical mr-2"></i>
        ) : (
          <i className="fa-solid fa-angle-down mr-2"></i>
        )}

        <p className="hover:cursor-pointer">ADDITIONAL COMPONENTS</p>
        {showFeatures ? (
          <i className="fa-solid fa-angle-down fa-flip-vertical ml-2"></i>
        ) : (
          <i className="fa-solid fa-angle-down ml-2"></i>
        )}
      </div>
    </div>
  );
}
