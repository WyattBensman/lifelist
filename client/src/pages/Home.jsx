import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Overview from "./components/Overview";
import LifeList from "./components/LifeList";
import Question from "./components/Question";
import Footer from "./components/Footer";
import WorldMap from "./components/WorldMap";
import Collage from "./components/Collage";

export default function Home() {
  return (
    <>
      <div className="h-screen">
        <Navbar />
        <Header />
      </div>
      <Overview />
      <LifeList />
      <Collage />
      <WorldMap />
      <Question />
      <Footer />
    </>
  );
}
