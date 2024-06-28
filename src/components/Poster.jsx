import React from "react";
import poster from "../assets/favoritebook.jpg";
import { Link } from "react-router-dom";

const Poster = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-around p-10 sm:p-20">
      <div className=" w-full sm:w-2/5 ">
        <img src={poster} alt="" />
      </div>
      <div className="w-full sm:w-2/5 pt-5 sm:pt-0">
        <h1 className="text-5xl font-bold ">Find your favorite</h1>
        <h1 className="text-blue-500 text-5xl font-bold">Books Here</h1>
        <p className="py-6">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit,
          eveniet veniam? Nam beatae inventore itaque accusamus corrupti. Ipsa
          omnis minus, eos cum repellendus ullam maiores alias doloremque, ea
          assumenda aspernatur.
        </p>
        <div className="flex items-start gap-6 sm:gap-16">
          <div>
            <h1 className="text-4xl font-bold py-2">800+</h1>
            <p>Book Listining</p>
          </div>
          <div>
            <h1 className="text-4xl font-bold py-2">550+</h1>
            <p>Register User</p>
          </div>
          <div>
            <h1 className="text-4xl font-bold py-2">1200+</h1>
            <p>Pdf Download</p>
          </div>
        </div>
         <div className="pt-10">
         <Link to="/shop" className="py-4 px-5 bg-blue-600 text-white rounded-md font-medium cursor-pointer transition-all hover:bg-blue-700">Explore More</Link>
         </div>
      </div>
    </div>
  );
};

export default Poster;
