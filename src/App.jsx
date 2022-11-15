import "./App.css";
import React from "react";
import Starpath from "./Starpath";

function App() {
  return (
    <div className="App">
      <div className="h-screen overflow-hidden">
        <div className="relative z-0">
          <Starpath />
          <div className="absolute z-1 bottom-0 h-2/5 w-full bg-gradient-to-t from-black/100 via-black/70" />
          <div className="absolute bottom-8 flex flex-col justify-center items-start gap-1 h-32 w-full px-12 ">
            <h1 className="text-white font-mersadLight text-4xl">
              //{" "}
              <span
                className="text-5xl font-mersadRg text-transparent bg-clip-text
            bg-gradient-to-br from-orange-500 to-purple-500"
              >
                QUONV
              </span>
            </h1>
            <p className="text-white font-mersadLight text-2xl">
              Conversion optimisation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
