import Navbar from "./components/Navbar";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div className="h-screen">
        <Navbar />
        <Header />
      </div>
      <div className="px-4 sm:px-8 md:px-16 lg:px-20 xl:px-24">
        <h1>Hey</h1>
      </div>
    </>
  );
}

export default App;
