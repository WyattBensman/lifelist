import Header from "../components/Header";
import Overview from "../components/Overview";
import LifeList from "../components/LifeList";
import Question from "../components/Question";
import WorldMap from "../components/WorldMap";
import Collage from "../components/Collage";
import Navbar from "../components/Navbar";

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
