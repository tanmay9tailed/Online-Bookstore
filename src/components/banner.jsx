import React from "react";
import Swipper from "./swiper";

const banner = () => {
  return (
    <>
      <div className="banner w-screen flex bg-blue-50 py-24 pl-4 sm:pl-10 flex-col sm:flex-row ">
        <div className="l-banner w-3/5 flex flex-col gap-8">
          <h1 className="text-6xl sm:text-5xl font-semibold">
            Buy and Sell Your <br />
            Books
          </h1>
          <p className="text-lg sm:text-xs w-full sm:w-3/4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit alias quasi tenetur corrupti optio minima deserunt,
            repellat tempora eos. Eius accusamus ex optio cumque saepe impedit
            numquam aspernatur perspiciatis rem! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Eligendi aliquam minima in ratione quo
            dolorem sunt, ea consequuntur impedit voluptatum enim nobis! Quod
            maiores nihil inventore ipsam ad quis soluta?
          </p>
          <div className="flex items-center w-[300px]">
            <input
              type="text"
              className="w-3/4 outline-none px-3 py-1 border-2 border-blue-700"
            />
            <button className="w-1/4 bg-blue-700 text-white px-3 py-1 border-2 border-blue-700">
              Search
            </button>
          </div>
        </div>
        <div className="r-banner w-2/5 m-auto sm:pr-20 ">
          <Swipper />
        </div>
      </div>
    </>
  );
};

export default banner;
