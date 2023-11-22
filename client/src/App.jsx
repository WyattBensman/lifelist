import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Overview from "./components/Overview";
import LifeList from "./components/LifeList";
import Question from "./components/Question";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="h-screen">
        <Navbar />
        <Header />
      </div>
      <Overview />
      <LifeList />
      <Question />
      <Footer />
    </>
  );
}

export default App;
