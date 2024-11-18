import * as React from "react";
import Farmer from "../../New folder/401-a67db987-338d-4632-bad5-ece7ea944e12.jpg";
export const Banner = () => {
  return (
    <div className="hero bg-base-200 my-5">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={Farmer} className="rounded-lg lg:w-1/2 shadow-2xl" alt="" />
        <div>
          <h1 className="text-5xl font-bold">
            Agroforestry for a sustainable future
          </h1>
          <p className="py-6">
            A village farmer is the backbone of rural communities, working
            tirelessly to grow crops and raise livestock that sustain local and
            regional food supplies. Using traditional knowledge often passed
            down through generations, they skillfully manage the land, adapt to
            seasonal changes, and sustain biodiversity, all while contributing
            to food security and the local economy. Their resilience and
            adaptability are essential for both their livelihood and the
            well-being of the community..
          </p>
        </div>
      </div>
    </div>
  );
};
