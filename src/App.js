import { Hero } from "./page/Hero";
import { About } from "./page/About";
import { Project } from "./page/Project";
import { Contact } from "./page/Contact";
import Navbar from "./components/Navbar";
import './App.css';


function App() {
  return (
    <>

      <Navbar />
      <Hero/>
      <About/>
      <Project/>
      <Contact/>
    </>
  )
}

export default App;
