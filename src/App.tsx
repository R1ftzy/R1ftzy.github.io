import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./pages/Hero";
import Featured from "./components/Featured";
import GithubGraph from "./components/GitHubCalendar";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";

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
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
