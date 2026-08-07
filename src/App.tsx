import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Featured from "./components/Featured"

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Featured />
      </main>
    </>
  );
}

export default App;
