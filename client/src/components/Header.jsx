export default function Header() {
  return (
    <div className="flex px-4 sm:px-8 md:px-16 lg:px-20 xl:px-24">
      <div className="w-1/2">
        <h1 className="text-5xl font-bold">
          A social media platform to capture & revisit countless memories
        </h1>
        <h3 className="text-xl">
          Because everyone should feel comfortable sharing the experiences that
          bring them joy!
        </h3>
      </div>
      <div className="w-1/2 flex justify-center items-center">
        <img className="w-3/4" src="/images/mockups/header-graphic.png" />
      </div>
    </div>
  );
}
