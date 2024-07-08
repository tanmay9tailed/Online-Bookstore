import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import StarRating from "../components/StarRating";
import url from "../../url";

const SingleBook = () => {
  const { id } = useParams();
  const bookId = id;
  const { book_name, author, description, price, genre, publication_year, rating, book_cover_img_link } =
    useLoaderData();
  const [reviews, setReviews] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const userId = localStorage.getItem("userId");

  const addToCart = () => {
    fetch(`${url}/add-to-cart`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        book_name,
        author,
        description,
        price,
        genre,
        publication_year,
        rating,
        book_cover_img_link,
        userId,
        quantity,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("added successfull");
      });
  };

  useEffect(() => {
    fetch(`${url}/getReviews`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [bookId]);

  return (
    <div className="bg-blue-100 min-h-screen flex justify-center items-center">
      <div className="relative max-w-screen-xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="relative bg-blue-100 w-full flex justify-center items-center pt-14">
          <img src={book_cover_img_link} alt={book_name} className="object-contain h-full" />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white py-4 px-6 sm:py-6 sm:px-8">
            <h2 className="text-4xl sm:text-5xl font-bold">{book_name}</h2>
          </div>
        </div>

        <div className="p-6 sm:p-8 relative">
          <div className="flex items-center mb-4">
            <div className="flex-shrink-0">
              <img
                src={book_cover_img_link}
                alt={book_name}
                className="h-20 w-20 sm:h-24 sm:w-24 rounded-full shadow-lg"
              />
            </div>
            <div className="ml-4 sm:ml-6">
              <p className="text-lg sm:text-xl font-semibold text-blue-700">{author}</p>
              <p className="text-gray-600 text-sm sm:text-base">
                {genre} | {publication_year}
              </p>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-4">
          <p className="text-base sm:text-lg mb-4">
              <span className="font-bold text-blue-700">Price:</span>
              <span> &#8377; </span>
               {price}
            </p>
            <p className="text-lg sm:text-xl mb-4 flex">
              <span className="font-bold text-blue-700 mr-3">Rating:</span>
              <StarRating rating={rating} />
            </p>
            <p className="text-base sm:text-lg mb-4">
              <span className="font-bold text-blue-700">Description:</span> {description}
            </p>
          </div>

          <div className="w-full">
            <Link
              className="bg-orange-700 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md"
              to={`/cart/${userId}`}
              onClick={addToCart}
            >
              Add To Cart
            </Link>
            <div className="w-full mt-5">
              <label htmlFor="quantity" className="mr-2 font-bold text-blue-700">
                Quantity:
              </label>
              <input
                id="quantity"
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
          </div>

          <div className="w-full flex items-end justify-end bottom-6 right-6">
            <Link
              className="bg-blue-700 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md"
              to={`/book/review/${bookId}`}
            >
              Add Review
            </Link>
          </div>

          <div className="mt-8">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-blue-700">Reviews</h3>
            {reviews.filter((review) => review.id === bookId).length > 0 ? (
              reviews
                .filter((review) => review.id === bookId)
                .map((review, index) => (
                  <div key={index} className="bg-gray-100 p-4 rounded-lg mb-4">
                    <p className="font-bold text-base">@{review.username || "username"}</p>
                    <p className="text-base flex">
                      <span className="font-bold mr-2">Rating:</span>
                      {Array.from({ length: 5 }).map((_, index) =>
                        index < review.rating ? (
                          <svg
                            key={index}
                            className="w-6 h-6 text-yellow-300 dark:text-white"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                          </svg>
                        ) : (
                          <svg
                            key={index}
                            className="w-6 h-6 text-gray-800 dark:text-white"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                          </svg>
                        )
                      )}
                    </p>
                    <p className="text-base">{review.reviewText}</p>
                  </div>
                ))
            ) : (
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="text-base">No reviews yet. Be the first to review!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBook;
