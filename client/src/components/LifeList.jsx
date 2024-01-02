import { InView } from "react-intersection-observer";

export default function LifeList() {
  return (
    <InView triggerOnce>
      {({ inView, ref }) => (
        <div className="bg-[#346664] flex flex-col md:flex-row">
          {/* Mockup */}
          <div
            ref={ref}
            className={`w-full md:w-1/2 flex justify-center md:mt-20 mt-10 order-2 md:order-1 ${
              inView
                ? "opacity-100 translate-y-0 transition-opacity duration-1000 ease-in-out"
                : "opacity-0 translate-y-20"
            }`}
          >
            <img
              className="w-[500px]"
              src="/images/mockups/lifelist-graphic.png"
            />
          </div>
          {/* Content */}
          <div
            ref={ref}
            className={`md:w-1/2 w-11/12 mt-24 md:ml-0 ml-5 order-1 md:order-2 ${
              inView
                ? "opacity-100 translate-y-0 transition-opacity duration-1000 ease-in-out"
                : "opacity-0 translate-y-20"
            }`}
          >
            <h2 className="text-5xl font-bold text-[#34CC98]">LifeList</h2>
            <p className="text-white text-xl md:w-3/4 mt-8">
              Organize & display a personalized list of the experiences,
              aspirations, and accomplishments of your lifetime
            </p>
            <h4 className="text-xl font-semibold text-[#34CC98] md:mt-20 mt-10">
              Things to Capture:
            </h4>
            <div className="flex mt-4 text-white">
              <div className="space-y-2 mr-8 md:mr-28">
                <p>Destinations</p>
                <p>Activities</p>
                <p>Concerts & Festivals</p>
                <p>Resorts</p>
              </div>
              <div className="space-y-2">
                <p>Sporting Events</p>
                <p>Courses</p>
                <p>Hikes & Trails</p>
                <p>And More!</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </InView>
  );
}
