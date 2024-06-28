import React from "react";

const Sell = () => {
  return (
    <div className="h-screen bg-blue-50 pt-10">
      <div className="max-w-xl mx-auto bg-blue-200 p-6 rounded shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-blue-700">Book Information</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="book_name" className="block text-blue-400 font-bold mb-2">
              Book Name
            </label>
            <input
              type="text"
              id="book_name"
              name="book_name"
              value=""
              className="w-full px-3 py-2 leading-tight text-blue-400 border border-blue-700 rounded focus:outline-none focus:shadow-outline"
              readOnly
            />
          </div>
          <div className="mb-4">
            <label htmlFor="author" className="block text-blue-400 font-bold mb-2">
              Author
            </label>
            <input
              type="text"
              id="author"
              name="author"
              value=""
              className="w-full px-3 py-2 leading-tight text-blue-400 border border-blue-700 rounded focus:outline-none focus:shadow-outline"
              readOnly
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-blue-400 font-bold mb-2">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value=""
              className="w-full px-3 py-2 leading-tight text-blue-400 border border-blue-700 rounded focus:outline-none focus:shadow-outline resize-none h-40"
              readOnly
            />
          </div>
          <div className="mb-4">
            <label htmlFor="genre" className="block text-blue-400 font-bold mb-2">
              Genre
            </label>
            <input
              type="text"
              id="genre"
              name="genre"
              value=""
              className="w-full px-3 py-2 leading-tight text-blue-400 border border-blue-700 rounded focus:outline-none focus:shadow-outline"
              readOnly
            />
          </div>
          <div className="mb-4">
            <label htmlFor="publication_year" className="block text-blue-400 font-bold mb-2">
              Publication Year
            </label>
            <input
              type="text"
              id="publication_year"
              name="publication_year"
              value=""
              className="w-full px-3 py-2 leading-tight text-blue-400 border border-blue-700 rounded focus:outline-none focus:shadow-outline"
              readOnly
            />
          </div>
          <div className="mb-4">
            <label htmlFor="rating" className="block text-blue-400 font-bold mb-2">
              Rating
            </label>
            <input
              type="text"
              id="rating"
              name="rating"
              value=""
              className="w-full px-3 py-2 leading-tight text-blue-400 border border-blue-700 rounded focus:outline-none focus:shadow-outline"
              readOnly
            />
          </div>
          <div className="mb-4">
            <label htmlFor="price" className="block text-blue-400 font-bold mb-2">
              Price
            </label>
            <input
              type="text"
              id="price"
              name="price"
              value=""
              className="w-full px-3 py-2 leading-tight text-blue-400 border border-blue-700 rounded focus:outline-none focus:shadow-outline"
              readOnly
            />
          </div>
          <div className="mb-4">
            <label htmlFor="book_cover_img_link" className="block text-blue-400 font-bold mb-2">
              Book Cover Image Link
            </label>
            <input
              type="text"
              id="book_cover_img_link"
              name="book_cover_img_link"
              value=""
              className="w-full px-3 py-2 leading-tight text-blue-400 border border-blue-700 rounded focus:outline-none focus:shadow-outline"
              readOnly
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Sell;
