import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Featured from "./components/Featured";
import GithubGraph from "./components/GitHubCalendar";
import Projects from "./pages/Projects";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <Hero />
              <Featured />
              <GithubGraph />
            </main>
          }
        />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
}

export default App;
