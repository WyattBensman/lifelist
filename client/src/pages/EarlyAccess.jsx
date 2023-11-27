import EarlyAccessForm from "../components/EarlyAccessForm";
import EarlyAccessHeader from "../components/EarlyAccessHeader";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function EarlyAccess() {
  return (
    <>
      <div className="h-screen">
        <Navbar />
        <EarlyAccessHeader />
        <div className="flex justify-center mt-10">
          <div className="w-2/5">
            <h2 className="text-4xl font-semibold">
              Be one of the first users!
            </h2>
            <p className="mt-4">
              Gain <p className="font-medium italic inline">early access</p>{" "}
              prior to the official launch &{" "}
              <p className="font-medium italic inline">reserve</p> your username
            </p>
            <EarlyAccessForm />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
