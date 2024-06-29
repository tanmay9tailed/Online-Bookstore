import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const SingleBook = () => {
  const { id } = useParams()
  const { book_name, author, description, genre, publication_year, rating, book_cover_img_link } = useLoaderData();

  return (
    <div className="bg-blue-100 min-h-screen flex justify-center items-center">
      <div className="relative max-w-screen-xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Full-screen Book Cover Section */}
        <div className="relative bg-blue-100 w-full flex justify-center items-center pt-14">
          <img src={book_cover_img_link} alt={book_name} className="object-contain h-full" />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white py-4 px-6 sm:py-6 sm:px-8">
            <h2 className="text-4xl sm:text-5xl font-bold">{book_name}</h2>
          </div>
        </div>

        {/* Book Details and Review Section */}
        <div className="p-6 sm:p-8 relative">
          {/* Author and Genre Section */}
          <div className="flex items-center mb-4">
            <div className="flex-shrink-0">
              <img src={book_cover_img_link} alt={book_name} className="h-20 w-20 sm:h-24 sm:w-24 rounded-full shadow-lg" />
            </div>
            <div className="ml-4 sm:ml-6">
              <p className="text-lg sm:text-xl font-semibold text-blue-700">{author}</p>
              <p className="text-gray-600 text-sm sm:text-base">{genre} | {publication_year}</p>
            </div>
          </div>

          {/* Rating and Description Section */}
          <div className="border-t border-gray-200 pt-4">
            <p className="text-lg sm:text-xl mb-4"><span className="font-bold text-blue-700">Rating:</span> {rating}</p>
            <p className="text-base sm:text-lg mb-4"><span className="font-bold text-blue-700">Description:</span> {description}</p>
          </div>

          {/* Review Button */}
          <div className="w-full flex items-end justify-end bottom-6 right-6">
            <Link className="bg-blue-700 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md" to={`/book/${id}/review`}>
              Add Review
            </Link>
          </div>

          {/* Review Section */}
          <div className="mt-8">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-blue-700">Reviews</h3>
            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="text-base">No reviews yet. Be the first to review!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBook;
