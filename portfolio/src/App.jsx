import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Sociallink from "./components/social_links";
import About from "./components/about";
import Portfolio from "./components/portfolio";

import Contact from "./components/contact";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
     
      <Contact />
      <Sociallink />
    </div>
  );
}

export default App;
