export default function CollageDropdown() {
  return (
    <div className="flex md:flex-row flex-col pt-6 px-4 sm:px-8 md:px-16 lg:px-20 xl:px-24">
      <div className="md:w-1/3 mx-4 flex flex-col items-center justify-center">
        <h3 className="text-2xl font-semibold tracking-wide">Track</h3>
        <p className="text-xl text-center w-7/8">
          Easily organize & display the experiences that matter the most to you
        </p>
      </div>
      <div className="md:w-1/3 mx-4 flex flex-col items-center justify-center">
        <h3 className="text-2xl font-semibold tracking-wide">Share</h3>
        <p className="text-xl text-center w-7/8">
          Combine media items, stories, activities & events all into a single
          post
        </p>
      </div>
      <div className="md:w-1/3 py-4 mx-4 flex flex-col items-center justify-center">
        <h3 className="text-2xl font-semibold tracking-wide">Explore</h3>
        <p className="text-xl text-center w-7/8">
          Dive into authentic exploration and experience the beauty of genuine
          sharing
        </p>
      </div>
    </div>
  );
}
