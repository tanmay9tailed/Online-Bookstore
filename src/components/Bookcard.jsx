import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import "./book-slider.css";
import { FaCartShopping } from "react-icons/fa6";

const Bookcard = ({ books, headline }) => {
  return (
    <div>
      <h1 className="text-4xl sm:text-6xl text-center py-5 font-semibold font-mono">{headline}</h1>
      <hr />
      <div className="book-slider pl-2 py-5">
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper ">
          {books.map((book) => (
            <SwiperSlide key={book._id}>
              <div className="book-container relative">
                <Link to={`/book/${book._id}`}>
                  <img src={book.book_cover_img_link} alt="" className="h-3/4"/>
                </Link>
                <div className="py-5">
                  <p className="font-semibold">{book.book_name}</p>
                  <p className="font-light">Author : {book.author}</p>
                  <p className="text-yellow-500">rating : {book.rating}</p>
                </div>
                <div className="shopping-cart absolute bg-blue-700 rounded-md p-3 top-[-11px] right-[-7px] hover:bg-blue-900 active:bg-blue-950">
                  <FaCartShopping />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Bookcard;
