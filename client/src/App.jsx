import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Overview from "./components/Overview";
import LifeList from "./components/LifeList";

function App() {
  return (
    <>
      <div className="h-screen">
        <Navbar />
        <Header />
      </div>
      <Overview />
      <LifeList />
    </>
  );
}

export default App;
