import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import url from "../../url";

const Shop = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch(`${url}/all-books/`)
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div className="py-20 px-10 ">
      <h1 className="text-center text-3xl sm:text-6xl font-medium pb-3">
        Here are Our All Books
      </h1>
      <hr className="py-4" />
      <div className=" sm:px-16 grid gap-10 grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 ">
        {books.map((book) => (
          <div
            key={book._id}
            className="book-card relative bg-slate-200 rounded-md py-6 px-7 shadow-xl flex flex-col">
            <div className="h-[300px] flex justify-center">
              <Link to={`/book/${book._id}`} className="">
                <img src={book.book_cover_img_link} alt="" className="h-full" />
              </Link>
            </div>
            <div className="pt-5 flex flex-col justify-center items-center">
              <p className="font-semibold">{book.book_name}</p>
              <p className="font-light">Author : {book.author}</p>
              <p className="text-yellow-500">rating : {book.rating}</p>
            </div>
            <button className="bg-blue-700 text-white rounded py-1 mt-2">Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
