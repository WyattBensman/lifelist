import { Link } from "react-router-dom";
import { InView } from "react-intersection-observer";

export default function Question() {
  return (
    <div className="drop-shadow-xl py-16 bg-[#34CC98] px-4 sm:px-8 md:px-16 lg:px-20 xl:px-24">
      <InView triggerOnce>
        {({ inView, ref }) => (
          <div
            ref={ref}
            className={`${
              inView
                ? "opacity-100 translate-y-0 transition-opacity duration-1000 ease-in-out"
                : "opacity-0 translate-y-20"
            }`}
          >
            <h5 className="text-3xl text-center font-semibold">
              Why let your memories fade when there’s a single platform to
              preserve them?
            </h5>
            <p className="text-xl text-center font-medium mt-2">
              Be the first to try it out!
            </p>
            <div className="flex justify-center mt-8">
              <Link
                to="earlyaccess"
                className="border-2 rounded-full font-medium border-white text-lg px-6 py-4 md:px-10 md:py-5 bg-transparent text-white hover:text-[#34CC98] hover:bg-white ease-in-out duration-200"
              >
                EARLY ACCESS
              </Link>
            </div>
          </div>
        )}
      </InView>
    </div>
  );
}
