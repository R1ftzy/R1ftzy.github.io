import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Featured from "./components/Featured"
import GithubGraph from "./components/GitHubCalendar";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Featured />
        <GithubGraph />
      </main>
    </>
  );
}

export default App;
