import { Link } from "react-router-dom";
import { InView } from "react-intersection-observer";

export default function Header() {
  return (
    <InView triggerOnce>
      {({ inView, ref }) => (
        <div className="flex flex-wrap h-5/6 px-4 sm:px-8 md:px-16 lg:px-20 xl:px-24">
          <div
            ref={ref}
            className={`w-full md:w-1/2 mt-10 md:mt-36 md:ps-14 ${
              inView
                ? "opacity-100 translate-y-0 transition-opacity duration-1000 ease-in-out"
                : "opacity-0 translate-y-20"
            }`}
          >
            <h1 className="md:text-5xl text-3xl text-center md:text-left font-bold">
              A social media platform to capture & revisit countless memories
            </h1>
            <h3 className="md:text-2xl text-center md:text-left pt-3 md:pt-5 pb-8 md:pb-16">
              Because everyone should feel comfortable sharing the experiences
              that bring them joy!
            </h3>
            <div className="flex justify-center md:block">
              <Link
                to="earlyaccess"
                className="border-2 rounded-full font-medium border-[#34CC98] text-lg md:ms-16 px-6 py-4 md:px-10 md:py-5 bg-white text-[#34CC98] hover:text-white hover:bg-[#34CC98] ease-in-out duration-200"
              >
                EARLY ACCESS
              </Link>
            </div>
          </div>
          <div
            ref={ref}
            className={`w-full md:w-1/2 mt-10 md:mt-3 flex justify-center items-center ${
              inView
                ? "opacity-100 translate-y-0 transition-opacity duration-1000 ease-in-out"
                : "opacity-0 translate-y-20"
            }`}
          >
            <img
              className="w-full md:11/12 lg:w-5/6"
              src="/images/mockups/header-graphic.png"
            />
          </div>
        </div>
      )}
    </InView>
  );
}
