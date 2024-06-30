import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

const ReviewForm = () => {
  const { id } = useParams();
  const [rating, setRating] = useState("");
  const [username, SetUsername] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");
  useEffect(() => {
    const fetchUserData = async () => {
      const user = await fetch(`http://localhost:3000/getUserData/${userId}`);
      const data = await user.json();
      SetUsername(data.username);
    };
    fetchUserData();
  }, [userId]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/submit-review", {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          id,
          rating,
          reviewText,
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to submit review");
      }
      navigate(`/book/${id}`);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <section className="flex flex-col md:flex-row h-screen items-center bg-blue-200">
      <div className="w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center">
        <div className="w-full h-100 px-8 py-5 shadow-2xl bg-blue-50 rounded-lg">
          <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">Add Your Review</h1>
          <form onSubmit={handleSubmit} className="mt-6">
            {/* <div className="flex items-center mb-4">
              <label className="mr-4 font-semibold text-gray-700">Rating:</label>
              <select
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                className="py-2 px-4 bg-gray-200 rounded-lg"
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
              </select>
            </div> */}
            <Typography component="legend">Controlled</Typography>
            <Rating
              name="simple-controlled"
              value={rating}
              onChange={(event, newValue) => {
                setRating(newValue);
              }}
            />
            <div className="mt-4">
              <label className="block text-gray-700">Review Text</label>
              <textarea
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                rows="4"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                required
              ></textarea>
            </div>
            {error && <p className="mt-4 text-red-500">{error}</p>}
            <button
              type="submit"
              className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg px-4 py-3 mt-6"
            >
              Submit Review
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ReviewForm;
