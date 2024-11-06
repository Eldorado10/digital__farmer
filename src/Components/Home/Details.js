// @flow
import * as React from "react";
import details from "../../Image/Details.jpg";

export const Details = () => {
  return (
    <section
      className="hero min-h-screen my-24 bg-cover bg-center"
      style={{
        background: `url(${details}) `,
      }}
    >
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <div>
            <h1 className=" text-white text-6xl font-bold font-serif">
              Farmer's Of Bangladesh
            </h1>
            <p className="text-white text-2xl py-6">
              Farmers in Bangladesh play a critical role in the nation’s
              economy, with agriculture employing a large portion of the
              population. They primarily cultivate rice, jute, tea, and various
              vegetables, contributing to Bangladesh's status as one of the
              world's leading rice and jute producers. Despite their hard work,
              Bangladeshi farmers often face challenges, including limited
              access to modern technology, vulnerability to flooding and climate
              change, and fluctuating market prices.
            </p>
          </div>
        </div>
      </div>
    </section>
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
