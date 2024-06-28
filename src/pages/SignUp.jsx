import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const SignUp = () => {
  const { createUser, checkUserExists, loading } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const [showOTPDialog, setShowOTPDialog] = useState(false); // State to manage OTP dialog
  const [otp, setOTP] = useState("");
  const [userId, setUserId] = useState(null);
  const navigate = useNavigate();

  const handleSignUp = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const username = event.target.username.value;

    try {
      // Check if username exists
      const response = await checkUserExists(username);
      if (response.exists) {
        setError("Username already exists");
        return;
      }

      // Create user
      const createUserResponse = await createUser(email, password, username);
      setUserId(createUserResponse.userId);

      setShowOTPDialog(true); // Show OTP dialog after successful signup
    } catch (error) {
      setError(error.message);
    }
  };

  const handleVerifyOTP = () => {
    if (otp.length === 5) {
      navigate("/profile", { state: { userId } }); // Pass userId to the profile completion form
    } else if (otp.length > 0) {
      setError("Please enter a valid OTP to continue");
    } else {
      setError("Please enter OTP to continue");
    }
  };

  return (
    <section className="flex flex-col md:flex-row h-screen items-center bg-blue-200">
      <div className="w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center">
        <div className="w-full h-100 px-8 py-5 shadow-2xl bg-blue-50 rounded-lg">
          <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">Sign Up to your account</h1>
          <form onSubmit={handleSignUp} className="mt-6">
            <div>
              <label className="block text-gray-700">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter Email Address"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                autoFocus
                autoComplete="email"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Unique Username</label>
              <input
                type="text"
                name="username"
                placeholder="Enter Username"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                autoComplete="username"
                required
              />
            </div>
            <div className="mt-4">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                minLength="6"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                required
              />
            </div>
            <div className="text-right mt-2">
              <a href="#" className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">
                Forgot Password?
              </a>
            </div>
            <button
              type="submit"
              disabled={loading}
              className={`w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg px-4 py-3 mt-6 ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              Sign Up
            </button>
          </form>
          <hr className="my-6 border-gray-300 w-full" />
          <p className="mt-8">
            Already have an account?{" "}
            <Link to={"/login"} className="text-blue-500 hover:text-blue-700 font-semibold">
              Login to your account
            </Link>
          </p>
          {error && <p className="mt-4 text-red-500">{error}</p>}
        </div>
      </div>

      {showOTPDialog && (
        <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Enter the 5-digit OTP sent to you</h2>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOTP(e.target.value)}
              placeholder="Enter OTP"
              className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
            />
            <div className="mt-4 flex justify-end">
              <button onClick={() => setShowOTPDialog(false)} className="text-gray-500 hover:text-gray-700 mr-4">
                Cancel
              </button>
              <button
                onClick={handleVerifyOTP}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg px-4 py-2"
              >
                Verify OTP
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default SignUp;
