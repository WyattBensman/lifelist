export default function Header() {
  return (
    <div className="flex px-4 sm:px-8 md:px-16 lg:px-20 xl:px-24">
      <div className="w-1/2 mt-20 ps-10">
        <h1 className="text-5xl font-bold">
          A social media platform to capture & revisit countless memories
        </h1>
        <h3 className="text-2xl pt-5 pb-16">
          Because everyone should feel comfortable sharing the experiences that
          bring them joy!
        </h3>
        <a
          href="#"
          className="border-2 rounded-full border-[#34CC98] text-lg ms-16 px-10 py-5 bg-white text-[#34CC98] hover:text-white hover:bg-[#34CC98] ease-in-out duration-200"
        >
          EARLY ACCESS
        </a>
      </div>
      <div className="w-1/2 mt-3 flex justify-center items-center">
        <img className="h-5/6" src="/images/mockups/header-graphic.png" />
      </div>
    </div>
  );
}
