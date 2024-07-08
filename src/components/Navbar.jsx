import React, { useContext, useEffect, useState } from "react";
import { FaBookOpen } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const Navbar = () => {
  const [mobile, setMobile] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const { logout, user } = useContext(AuthContext);
  // console.log(user.userId)

  const navItems = [
    { link: "Home", path: "/" },
    { link: "Shop", path: "/shop" },
    { link: "Dashboard", path: `/admin/dashboard/${localStorage.getItem("userId")}` },
    { link: <svg className="w-6 h-6  dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M4 4a1 1 0 0 1 1-1h1.5a1 1 0 0 1 .979.796L7.939 6H19a1 1 0 0 1 .979 1.204l-1.25 6a1 1 0 0 1-.979.796H9.605l.208 1H17a3 3 0 1 1-2.83 2h-2.34a3 3 0 1 1-4.009-1.76L5.686 5H5a1 1 0 0 1-1-1Z" clipRule="evenodd"/>
    </svg>
    , path: `/cart/${localStorage.getItem("userId")}` },
  ];

  const handleClick = () => {
    setMobile(!mobile);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsSticky(scrollY > 300);
    };
    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`w-[100%] flex items-center justify-between px-5 py-2 md:py-3 md:px-10 fixed top-0 left-0 z-50 transition-all ${
          isSticky ? "bg-cyan-800" : ""
        }`}
      >
        <div className="l-nav flex items-center gap-2 text-blue-600 text-xl sm:text-2xl md:text-3xl pointer-events-none">
          <FaBookOpen className="rotate-12" /> Books
        </div>
        <div className={`r-nav flex items-center gap-5 flex-col sm:flex-row`}>
          {mobile ? (
            <FaXmark
              className="text-blue-400 hover:text-blue-600 transition text-xl sm:hidden"
              onClick={handleClick}
            />
          ) : (
            <GiHamburgerMenu
              className="text-blue-400 hover:text-blue-600 transition text-xl sm:hidden"
              onClick={handleClick}
            />
          )}

          {user && navItems.map(({ link, path }) => (
            <Link
              key={path}
              to={path}
              className="text-blue-400 hover:text-blue-600 hover:underline transition text-xl sm:text-lg md:text-lg sm:block hidden cursor-pointer"
            >
              {link}
            </Link>
          ))}
          {user && (
            <Link
              className="text-white bg-red-500 hover:bg-red-600 transition-colors py-2 px-5 rounded-lg sm:block hidden"
              onClick={logout}
              to={'/login'}
            >
              Logout
            </Link>
          )}
          {!user && (
            <Link
              className="text-white bg-green-500 hover:bg-green-600 transition-colors py-2 px-5 rounded-lg sm:block hidden"
              to={'/signup'}
            >
              Sign Up
            </Link>
          )}
        </div>
      </div>
      <div
        className={`flex flex-col items-end px-16 py-10 gap-10 h-screen w-[75%] bg-blue-100 fixed top-0 transition-all sm:hidden z-40 ${
          mobile ? "right-0 block" : "right-[-100%] hidden"
        }`}
      >
        {user && navItems.map(({ link, path }) => (
          <Link
            key={path}
            to={path}
            className="text-blue-600 hover:text-blue-950 hover:underline transition text-xl sm:text-lg md:text-lg sm:block cursor-pointer"
          >
            {link}
          </Link>
        ))}
        {user && (
          <Link
            className="text-white bg-red-500 hover:bg-red-600 transition-colors py-2 px-5 rounded-lg"
            onClick={logout}
            to={'/login'}
          >
            Logout
          </Link>
        )}
        {!user && (
            <Link
              className="text-white bg-green-500 hover:bg-green-600 transition-colors py-2 px-5 rounded-lg"
              to={'/signup'}
            >
              Sign Up
            </Link>
          )}
      </div>
    </>
  );
};

export default Navbar;
