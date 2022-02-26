import React from "react";
import "./testimonial.css";
import AVTR1 from "../../assets/lady.png";
import AVTR2 from "../../assets/man.png";
import AVTR3 from "../../assets/mike.png";
import AVTR4 from "../../assets/daisy.jpg";
import AVTR5 from "../../assets/ehiz.jpg";
import AVTR6 from "../../assets/ramno.jpg";

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    names: "Lady Slan",
    review: `Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
    ad minim veniam quis nostrud exercitation ullamco laboris nisi`,
  },
  {
    avatar: AVTR2,
    names: "man kon",
    review: `Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
    ad minim veniam quis nostrud exercitation ullamco laboris nisi`,
  },
  {
    avatar: AVTR3,
    names: "Mike o",
    review: `Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
    ad minim veniam quis nostrud exercitation ullamco laboris nisi`,
  },
  {
    avatar: AVTR4,
    names: "Daisy nou",
    review: `Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
    ad minim veniam quis nostrud exercitation ullamco laboris nisi`,
  },
  {
    avatar: AVTR5,
    names: "Ehiz Slan",
    review: `Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
    ad minim veniam quis nostrud exercitation ullamco laboris nisi`,
  },
  {
    avatar: AVTR6,
    names: "Ramno Niels",
    review: `Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
    ad minim veniam quis nostrud exercitation ullamco laboris nisi`,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      modules={[ Pagination ]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {data.map(({ avatar, names, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt=""></img>
              </div>
              <h5 className="client__name">{names}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;