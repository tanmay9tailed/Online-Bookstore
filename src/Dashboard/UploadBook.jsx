import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UploadBook = () => {
  const navigate = useNavigate();
  const initialFormData = {
    book_name: '',
    author: '',
    book_cover_img_link: '',
    description: '',
    genre: '',
    publication_year: '',
    rating: '',
    price:''
  };
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData); 
    
    fetch("https://online-bookstore-backend-olive.vercel.app/upload-book",{
      method:"POST",
      headers:{
        "Content-type":"application/json",
      },
      body:JSON.stringify(formData)
    }).then(res => res.json()).then(data => {
      alert("uploaded successfull");
      // console.log(data)
      setFormData(initialFormData);
    })
    navigate('/shop')
  };

  const genreOptions = [
    "Horror",
    "Comedy",
    "Science Fiction",
    "Fantasy",
    "Mystery",
    "Thriller",
    "Romance",
    "Adventure",
    "Drama",
    "Action",
    "Historical Fiction",
    "Biography",
    "Self-help",
    "Cookbook",
    "Travel",
    "Poetry",
    "Graphic Novel",
    "Young Adult",
    "Memoir",
    "Business",
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl sm:text-5xl font-bold">Upload a Book</h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto px-10 py-5 bg-blue-700 rounded shadow-2xl text-white mt-10">
        <div className="mb-4">
          <label htmlFor="book_name" className="block mb-1">
            Book Name:
          </label>
          <input
            type="text"
            id="book_name"
            name="book_name"
            value={formData.book_name}
            onChange={handleChange}
            className="w-full border p-2 rounded text-black border-blue-600 focus:border-2 focus:border-black shadow-inner bg-blue-100"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="author" className="block mb-1">
            Author:
          </label>
          <input
            type="text"
            id="author"
            name="author"
            value={formData.author}
            onChange={handleChange}
            className="w-full border p-2 rounded text-black border-blue-600 focus:border-2 focus:border-black shadow-inner bg-blue-100"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="book_cover_img_link" className="block mb-1">
            Cover Image Link:
          </label>
          <input
            type="text"
            id="book_cover_img_link"
            name="book_cover_img_link"
            value={formData.book_cover_img_link}
            onChange={handleChange}
            className="w-full border p-2 rounded text-black border-blue-600 focus:border-2 focus:border-black shadow-inner bg-blue-100"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block mb-1">
            Description:
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border p-2 rounded text-black border-blue-600 focus:border-2 focus:border-black shadow-inner bg-blue-100"
            required></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="genre" className="block mb-1">
            Genre:
          </label>
          <select
            id="genre"
            name="genre"
            value={formData.genre}
            onChange={handleChange}
            className="w-full border p-2 rounded text-black border-blue-600 focus:border-2 focus:border-black bg-blue-100">
            <option value="">Select Genre</option>
            {genreOptions.map((genre, index) => (
              <option key={index} value={genre}>
                {genre}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="publication_year" className="block mb-1">
            Publication Year:
          </label>
          <input
            type="number"
            id="publication_year"
            name="publication_year"
            value={formData.publication_year}
            onChange={handleChange}
            className="w-full border p-2 rounded text-black border-blue-600 focus:border-2 focus:border-black shadow-inner bg-blue-100"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="rating" className="block mb-1">
            Rating:
          </label>
          <input
            type="number"
            id="rating"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            className="w-full border p-2 rounded text-black border-blue-600 focus:border-2 focus:border-black shadow-inner bg-blue-100"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="rating" className="block mb-1">
            Price:
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full border p-2 rounded text-black border-blue-600 focus:border-2 focus:border-black shadow-inner bg-blue-100"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded shadow-lg transition-colors hover:bg-blue-900">
          Upload
        </button>
      </form>
    </div>
  );
};

export default UploadBook;
