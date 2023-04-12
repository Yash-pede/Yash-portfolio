import {
  Navbar,
  Hero,
  About,
  Contact,
  Experience,
  Feedbacks,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

const App = () => {
  return (
    <div className="relative z-0 bg-primary ">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>

      <div className="">
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
      </div>
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  );
};

export default App;
