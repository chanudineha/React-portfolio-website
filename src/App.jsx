import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";


import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import LightRays from "./components/LightRays";

const App = () => {
  // state that holds current ray color
  const [rayColor, setRayColor] = useState("#9b5de5"); // start purple

  // toggle function — MUST be defined inside the component
  const toggleRayColor = () => {
    setRayColor((prev) => (prev === "#9b5de5" ? "#001f54" : "#9b5de5"));
  };

  return (
    <div className="overflow-x-hidden text-stone-300 antialiased">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="relative h-full w-full bg-black">
          {/* grid overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right,#4f4f4f2e 1px, transparent 1px), linear-gradient(to bottom,#8080800a 1px, transparent 1px)",
              backgroundSize: "14px 24px",
            }}
          />
          {/* radial highlight */}
          <div
            className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full"
            style={{
              background:
                "radial-gradient(circle 400px at 50% 300px, rgba(251,251,251,0.21), #000)",
            }}
          />

          {/* LightRays fills this background container */}
          <LightRays
            raysOrigin="top-center"
            raysColor={rayColor}
            raysSpeed={1.5}
            lightSpread={0.8}
            rayLength={1.2}
            followMouse={true}
            mouseInfluence={0.1}
            className="absolute inset-0"
          />
        </div>
      </div>
      {/* Toggle button (icon) */}
      <button
        onClick={toggleRayColor}
        aria-label="Toggle background color"
        title="Toggle background color"
        className="fixed top-4 right-4 z-20 p-3 rounded-full bg-gray-800 text-white shadow-lg hover:bg-gray-700 transition flex items-center justify-center"
      >
        {rayColor === "#9b5de5" ? <FaMoon size={18} /> : <FaSun size={18} />}
      </button>

      {/* Main content */}
      <div className="container mx-auto px-8 relative z-10">
        <Navbar />
        <Hero />
        <Technologies />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </div>
  );
};

export default App;






