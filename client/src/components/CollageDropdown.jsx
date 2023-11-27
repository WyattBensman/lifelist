export default function CollageDropdown() {
  return (
    <div className="flex md:flex-row flex-col pt-6 px-4 sm:px-8 md:px-16 lg:px-20 xl:px-24">
      <div className="md:w-1/3 mx-4 flex flex-col items-center justify-center">
        <h3 className="text-2xl font-semibold tracking-wide">Logbook</h3>
        <p className="text-xl text-center w-7/8">
          Keep track of upcoming experiences, while continuously updating
          ongoing ones
        </p>
      </div>
      <div className="md:w-1/3 mx-4 flex flex-col items-center justify-center">
        <h3 className="text-2xl font-semibold tracking-wide">Privacy Groups</h3>
        <p className="text-xl text-center w-7/8">
          An easy way to hide memories that aren’t meant for everyone to see
        </p>
      </div>
      <div className="md:w-1/3 py-4 mx-4 flex flex-col items-center justify-center">
        <h3 className="text-2xl font-semibold tracking-wide">
          Tracking Integration
        </h3>
        <p className="text-xl text-center w-7/8">
          Embed data from third-party tracking applications directly to your
          collage
        </p>
      </div>
    </div>
  );
}
