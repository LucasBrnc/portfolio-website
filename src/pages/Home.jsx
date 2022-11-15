import React from "react";
import Starpath from "../components/Starpath";

export default function Home() {
  return (
    <section className="h-screen overflow-hidden">
      <div className="relative z-0">
        <Starpath />
        <div className="absolute z-1 bottom-0 h-2/5 w-full bg-gradient-to-t from-black/100 via-black/70" />
        <div className="absolute bottom-0 flex flex-col justify-center items-start gap-1 h-40 w-full px-12 ">
          <h1
            className="text-5xl font-mersadRegular text-transparent bg-clip-text
		bg-gradient-to-br from-orange-500 to-purple-500"
          >
            Lucas.b
          </h1>
          <p className="text-white font-mersadLight text-xl">
            <span
              className="font-mersadLight text-2xl text-transparent bg-clip-text
		bg-gradient-to-br from-orange-500 to-purple-500"
            >
              \\{" "}
            </span>
            Product Manager
          </p>

          <p className="text-white font-mersadLight text-xl">
            <span
              className="font-mersadLight text-2xl text-transparent bg-clip-text
		bg-gradient-to-br from-orange-500 to-purple-500"
            >
              \\{" "}
            </span>
            Web Designer
          </p>
        </div>
      </div>
    </section>
  );
}
