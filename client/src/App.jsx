import Header from "./components/Header";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="px-4 sm:px-8 md:px-16 lg:px-20 xl:px-24">
        <Header />
        <h1>Hey</h1>
      </div>
    </>
  );
}

export default App;
