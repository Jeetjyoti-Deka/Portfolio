import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import ScrollDown from "./components/ScrollDown";
import Skills from "./components/Skills";

function App() {
  return (
    <main className="overflow-x-hidden w-full relative">
      <Navbar />
      <Hero />
      <ScrollDown />
      <Skills />
      <Projects />
    </main>
  );
}

export default App;
