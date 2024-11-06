// @flow
import * as React from "react";
import details from "../../Image/Details.jpg";

export const Details = () => {
  return (
    <div class="hero bg-base-100 min-h-screen">
      <div class="hero-content flex-col lg:flex-row">
        <img src={details} class="max-w-sm rounded-lg lg:w-1/2 shadow-2xl" />
        <div className="px-12">
          <h1 class="text-5xl font-bold">Farmer's Of Bangladesh</h1>
          <p class="py-6 ">
            Farmers in Bangladesh play a critical role in the nation’s economy,
            with agriculture employing a large portion of the population. They
            primarily cultivate rice, jute, tea, and various vegetables,
            contributing to Bangladesh's status as one of the world's leading
            rice and jute producers. Despite their hard work, Bangladeshi
            farmers often face challenges, including limited access to modern
            technology, vulnerability to flooding and climate change, and
            fluctuating market prices.
          </p>
        </div>
      </div>
    </div>
  );
};

// Farmers in Bangladesh play a critical role in the nation’s economy,
//             with agriculture employing a large portion of the population. They
//             primarily cultivate rice, jute, tea, and various vegetables,
//             contributing to Bangladesh's status as one of the world's leading
//             rice and jute producers. Despite their hard work, Bangladeshi
//             farmers often face challenges, including limited access to modern
//             technology, vulnerability to flooding and climate change, and
//             fluctuating market prices.
