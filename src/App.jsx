import "./App.css";
import React from "react";
import Lottie from "lottie-react";
import heroAnimation from "./assets/hero-animation.json";

function App() {
  return (
    <div className="App">


      <div className="overflow-hidden">


        <div className="h-screen">


          <div className="relative h-3/4">


            <Lottie
              className="scale-150 rotate-90 translate-y-36 z-1"
              animationData={heroAnimation}
              loop={true}
            ></Lottie>


            <div className="absolute top-96 h-52 w-full bg-gradient-to-t from-black via-black/90" />


            <div className="z-2 absolute bottom-24 px-12">


              <div className="flex flex-col gap-3">
                <h1 className="text-white font-mersadLight text-5xl">
                  // QUONV
                </h1>
                <p className="text-white font-mersadLight text-2xl">
                  Conversion optimisation 
                </p>
              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
