import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";

function App() {
  return (
    <main className="overflow-x-hidden w-full">
      <Navbar />
      <Hero />
      <Skills />
    </main>
  );
}

export default App;
