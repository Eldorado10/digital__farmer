// @flow
import * as React from "react";
import './css/Carosel.css'
import image1 from '../../Image/Carosel/img1.jpg'
import image2 from '../../Image/Carosel/img2.jpg'
import image3 from '../../Image/Carosel/img3.jpg'
import image4 from '../../Image/Carosel/img4.jpg'

export const Carosel = () => {
  return (
    <div class="carousel ">
      <div id="slide1" class="carousel-item relative imger">
        <img
          src={image1}
          class=""
        />
        <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide4" class="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" class="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" class="carousel-item relative imger">
        <img
          src={image2}
          class=""
        />
        <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" class="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" class="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" class="carousel-item relative imger	">
        <img
          src={image3}
          class=""
        />
        <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" class="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" class="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" class="carousel-item relative imger">
        <img
          src={image4}
          className=""
        />
        <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" class="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" class="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};
