import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import url from "../../url";

const Shop = () => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  const addToCart = (book) => {
    fetch(`${url}/add-to-cart`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        book_name: book.book_name,
        author: book.author,
        description: book.description,
        price: book.price,
        genre: book.genre,
        publication_year: book.publication_year,
        rating: book.rating,
        book_cover_img_link: book.book_cover_img_link,
        userId: localStorage.getItem("userId"),
        quantity: book.quantity,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Added successfully");
      })
      .catch((error) => {
        console.error("Error adding to cart:", error);
        alert("Failed to add to cart");
      });

    navigate(`/cart/${localStorage.getItem("userId")}`);
  };

  useEffect(() => {
    fetch(`${url}/all-books/`)
      .then((res) => res.json())
      .then((data) => setBooks(data))
      .catch((error) => {
        console.error("Error fetching books:", error);
      });
  }, []);

  return (
    <div className="py-20 px-10 ">
      <h1 className="text-center text-3xl sm:text-6xl font-medium pb-3">
        Here are Our All Books
      </h1>
      <hr className="py-4" />
      <div className="sm:px-16 grid gap-10 grid-cols-1 sm:grid-cols-3 lg:grid-cols-4">
        {books.map((book) => (
          <div
            key={book._id}
            className="book-card relative bg-slate-200 rounded-md py-6 px-7 shadow-xl flex flex-col"
          >
            <div className="h-[300px] flex justify-center">
              <Link to={`/book/${book._id}`} className="">
                <img src={book.book_cover_img_link} alt="" className="h-full" />
              </Link>
            </div>
            <div className="pt-5 flex flex-col justify-center items-center">
              <p className="font-semibold">{book.book_name}</p>
              <p className="font-light">Author : {book.author}</p>
              <p className="text-yellow-500">Rating : {book.rating}</p>
            </div>
            <button
              className="bg-blue-700 hover:bg-blue-800 text-white rounded py-1 mt-2"
              onClick={() => addToCart(book)}
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
