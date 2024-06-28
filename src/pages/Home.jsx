import React, { useContext } from "react";
import Banner from "../components/banner";
import AllBooks from "../components/AllBooks";
import Review from "../components/Review";
import Poster from "../components/Poster";
// import { AuthContext } from "../../context/AuthProvider";
import SignUp from "./SignUp";

const Home = () => {

  return (
    <div className="overflow-hidden">
        <>
          <Banner />
          <AllBooks data1="0" data2="6" headline="Best Seller" />
          <Poster />
          <AllBooks data1="3" data2="11" headline="Other Books" />
          <Review />
        </>
    </div>
  );
};

export default Home;
