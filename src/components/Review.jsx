import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./review.css";

// import required modules
import { Pagination } from "swiper/modules";
import { FaStar } from "react-icons/fa";
import { Avatar } from "flowbite-react";
import profile from "../assets/profile.jpg"

export default function Review() {
  return (
    <div className="review px-10 sm:px-20 pb-10">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
        //   clickable: true,
        }}
        breakpoints={{
          570: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper">
        <SwiperSlide>
          <div id="review" className="text-start shadow-2xl bg-gray-50 rounded-md px-8">
            <div className="flex text-yellow-300 gap-2 py-4">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <div className="text-sm font-light pb-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum,
              commodi consequatur. Modi adipisci aliquid, unde quasi velit
              accusantium sunt veniam voluptatem odio debitis laborum.
              Architecto rem molestias obcaecati! Delectus, neque. Lorem ipsum
            </div>
            <div className="flex flex-wrap gap-2 py-2">
              <Avatar
                img={profile}
                alt="avatar of Jese"
                rounded 
                className="w-[50px]"
              />
            </div>
            <h1 className="font-semibold pb-4">Tanmay sahu</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div id="review" className="text-start shadow-2xl bg-gray-50 rounded-md px-8">
            <div className="flex text-yellow-300 gap-2 py-4">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <div className="text-sm font-light pb-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum,
              commodi consequatur. Modi adipisci aliquid, unde quasi velit
              accusantium sunt veniam voluptatem odio debitis laborum.
              Architecto rem molestias obcaecati! Delectus, neque. Lorem ipsum
            </div>
            <div className="flex flex-wrap gap-2 py-2">
              <Avatar
                img={profile}
                alt="avatar of Jese"
                rounded 
                className="w-[50px]"
              />
            </div>
            <h1 className="font-semibold pb-4">Tanmay sahu</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div id="review" className="text-start shadow-2xl bg-gray-50 rounded-md px-8">
            <div className="flex text-yellow-300 gap-2 py-4">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <div className="text-sm font-light pb-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum,
              commodi consequatur. Modi adipisci aliquid, unde quasi velit
              accusantium sunt veniam voluptatem odio debitis laborum.
              Architecto rem molestias obcaecati! Delectus, neque. Lorem ipsum
            </div>
            <div className="flex flex-wrap gap-2 py-2">
              <Avatar
                img={profile}
                alt="avatar of Jese"
                rounded 
                className="w-[50px]"
              />
            </div>
            <h1 className="font-semibold pb-4">Tanmay sahu</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div id="review" className="text-start shadow-2xl bg-gray-50 rounded-md px-8">
            <div className="flex text-yellow-300 gap-2 py-4">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <div className="text-sm font-light pb-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum,
              commodi consequatur. Modi adipisci aliquid, unde quasi velit
              accusantium sunt veniam voluptatem odio debitis laborum.
              Architecto rem molestias obcaecati! Delectus, neque. Lorem ipsum
            </div>
            <div className="flex flex-wrap gap-2 py-2">
              <Avatar
                img={profile}
                alt="avatar of Jese"
                rounded 
                className="w-[50px]"
              />
            </div>
            <h1 className="font-semibold pb-4">Tanmay sahu</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div id="review" className="text-start shadow-2xl bg-gray-50 rounded-md px-8">
            <div className="flex text-yellow-300 gap-2 py-4">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <div className="text-sm font-light pb-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum,
              commodi consequatur. Modi adipisci aliquid, unde quasi velit
              accusantium sunt veniam voluptatem odio debitis laborum.
              Architecto rem molestias obcaecati! Delectus, neque. Lorem ipsum
            </div>
            <div className="flex flex-wrap gap-2 py-2">
              <Avatar
                img={profile}
                alt="avatar of Jese"
                rounded 
                className="w-[50px]"
              />
            </div>
            <h1 className="font-semibold pb-4">Tanmay sahu</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div id="review" className="text-start shadow-2xl bg-gray-50 rounded-md px-8">
            <div className="flex text-yellow-300 gap-2 py-4">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <div className="text-sm font-light pb-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum,
              commodi consequatur. Modi adipisci aliquid, unde quasi velit
              accusantium sunt veniam voluptatem odio debitis laborum.
              Architecto rem molestias obcaecati! Delectus, neque. Lorem ipsum
            </div>
            <div className="flex flex-wrap gap-2 py-2">
              <Avatar
                img={profile}
                alt="avatar of Jese"
                rounded 
                className="w-[50px]"
              />
            </div>
            <h1 className="font-semibold pb-4">Tanmay sahu</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div id="review" className="text-start shadow-2xl bg-gray-50 rounded-md px-8">
            <div className="flex text-yellow-300 gap-2 py-4">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <div className="text-sm font-light pb-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum,
              commodi consequatur. Modi adipisci aliquid, unde quasi velit
              accusantium sunt veniam voluptatem odio debitis laborum.
              Architecto rem molestias obcaecati! Delectus, neque. Lorem ipsum
            </div>
            <div className="flex flex-wrap gap-2 py-2">
              <Avatar
                img={profile}
                alt="avatar of Jese"
                rounded 
                className="w-[50px]"
              />
            </div>
            <h1 className="font-semibold pb-4">Tanmay sahu</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div id="review" className="text-start shadow-2xl bg-gray-50 rounded-md px-8">
            <div className="flex text-yellow-300 gap-2 py-4">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <div className="text-sm font-light pb-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum,
              commodi consequatur. Modi adipisci aliquid, unde quasi velit
              accusantium sunt veniam voluptatem odio debitis laborum.
              Architecto rem molestias obcaecati! Delectus, neque. Lorem ipsum
            </div>
            <div className="flex flex-wrap gap-2 py-2">
              <Avatar
                img={profile}
                alt="avatar of Jese"
                rounded 
                className="w-[50px]"
              />
            </div>
            <h1 className="font-semibold pb-4">Tanmay sahu</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div id="review" className="text-start shadow-2xl bg-gray-50 rounded-md px-8">
            <div className="flex text-yellow-300 gap-2 py-4">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <div className="text-sm font-light pb-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum,
              commodi consequatur. Modi adipisci aliquid, unde quasi velit
              accusantium sunt veniam voluptatem odio debitis laborum.
              Architecto rem molestias obcaecati! Delectus, neque. Lorem ipsum
            </div>
            <div className="flex flex-wrap gap-2 py-2">
              <Avatar
                img={profile}
                alt="avatar of Jese"
                rounded 
                className="w-[50px]"
              />
            </div>
            <h1 className="font-semibold pb-4">Tanmay sahu</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div id="review" className="text-start shadow-2xl bg-gray-50 rounded-md px-8">
            <div className="flex text-yellow-300 gap-2 py-4">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <div className="text-sm font-light pb-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum,
              commodi consequatur. Modi adipisci aliquid, unde quasi velit
              accusantium sunt veniam voluptatem odio debitis laborum.
              Architecto rem molestias obcaecati! Delectus, neque. Lorem ipsum
            </div>
            <div className="flex flex-wrap gap-2 py-2">
              <Avatar
                img={profile}
                alt="avatar of Jese"
                rounded 
                className="w-[50px]"
              />
            </div>
            <h1 className="font-semibold pb-4">Tanmay sahu</h1>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
