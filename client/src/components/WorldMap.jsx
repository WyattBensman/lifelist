export default function WorldMap() {
  return (
    <div className="bg-[#346664] flex flex-col md:flex-row">
      {/* Content */}
      <div className="md:w-1/2 w-11/12 mt-20 md:mt-24 ml-5 md:ml-[12.5%]">
        <h2 className="text-5xl font-bold text-[#34CC98] md:w-1/2">
          World Map
        </h2>
        <p className="text-white text-xl mt-8">
          An interactive, world map where users can find and explore collages
          and LifeList items as location-based push-pins
        </p>
        <p className="text-white text-xl mt-8">
          Push-pins are clickable items, that display a general overview &
          relevant information once activate
        </p>
      </div>
      {/* Mockup */}
      <div className="w-full md:w-1/2 flex justify-center mt-5 mb-10 md:mr-[5%]">
        <img className="w-[500px]" src="/images/mockups/worldmap-graphic.png" />
      </div>
    </div>
  );
}
