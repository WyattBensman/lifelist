export default function Overview() {
  return (
    <div className="flex md:flex-row flex-col drop-shadow-2xl bg-[#34CC98] px-4 sm:px-8 md:px-16 lg:px-20 xl:px-24">
      <div className="md:w-1/3 md:py-20 pt-16 pb-8 mx-4 flex flex-col items-center justify-center">
        <h3 className="text-4xl font-bold tracking-wide">Track</h3>
        <img className="h-14 my-2 pb-2" src="/images/icons/track-icon.png" />
        <p className="text-xl text-center w-7/8">
          Easily organize & display the experiences that matter the most to you
        </p>
      </div>
      <div className="md:w-1/3 md:py-16 py-8 mx-4 flex flex-col items-center justify-center">
        <h3 className="text-4xl font-bold tracking-wide">Share</h3>
        <img className="h-16 mb-2 " src="/images/icons/share-icon.png" />
        <p className="text-xl text-center w-7/8">
          Combine media items, stories, activities & events all into a single
          post
        </p>
      </div>
      <div className="md:w-1/3 md:py-16 pt-8 pb-16 py-4 mx-4 flex flex-col items-center justify-center">
        <h3 className="text-4xl font-bold tracking-wide">Explore</h3>
        <img className="h-14 my-2" src="/images/icons/explore-icon.png" />
        <p className="text-xl text-center w-7/8">
          Dive into authentic exploration and experience the beauty of genuine
          sharing
        </p>
      </div>
    </div>
  );
}
