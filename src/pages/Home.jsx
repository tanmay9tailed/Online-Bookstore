import React from "react";
import Banner from "../components/banner";
import AllBooks from "../components/AllBooks";
import Poster from "../components/Poster";
import url from "../../url";

console.log(url)

const Home = () => {

  return (
    <div className="overflow-hidden">
        <>
          <Banner />
          <AllBooks data1="0" data2="6" headline="Best Seller" />
          <Poster />
          <AllBooks data1="3" data2="11" headline="Other Books" />
        </>
    </div>
  );
};

export default Home;
