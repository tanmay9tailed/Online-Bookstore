import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../context/AuthProvider";

const EditProfile = () => {
  const { user, updateUserProfile, getUserDetails } = useContext(AuthContext);
  const [details, setDetails] = useState(null);
  const userId = user.userId;

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const userDetails = await getUserDetails(userId);
        setDetails(userDetails);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUserDetails();
  }, [getUserDetails, userId]);

  const [formData, setFormData] = useState({
        username: details.username || "",
        email: details.email || "",
        age: details.age || "",
        description: details.description || "",
        dob: details.dob || "",
        location: details.location || "",
        work: details.work || "",
  });

  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await updateUserProfile({ ...formData, userId });
      if (response.message === "User profile updated successfully") {
        setMessage("Profile updated successfully");
      } else {
        setMessage("Error updating profile");
      }
    } catch (error) {
      setMessage("Error updating profile");
    }
  };

  return (
    <section className="bg-blue-100 min-h-screen w-full flex flex-col justify-center items-center">
      <form onSubmit={handleSubmit} className="w-full sm:w-3/4 md:w-3/4 lg:w-1/2 bg-white shadow-lg sm:rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">Edit Profile</h2>
        <div>
          <label className="block text-gray-700">Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-2 rounded-lg bg-gray-200"
            readOnly
          />
        </div>
        <div>
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-2 rounded-lg bg-gray-200"
            readOnly
          />
        </div>
        <div>
          <label className="block text-gray-700">Age</label>
          <input
            type="text"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-2 rounded-lg bg-gray-200"
          />
        </div>
        <div>
          <label className="block text-gray-700">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-2 rounded-lg bg-gray-200"
          />
        </div>
        <div>
          <label className="block text-gray-700">Date of Birth</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-2 rounded-lg bg-gray-200"
          />
        </div>
        <div>
          <label className="block text-gray-700">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-2 rounded-lg bg-gray-200"
          />
        </div>
        <div>
          <label className="block text-gray-700">Work</label>
          <input
            type="text"
            name="work"
            value={formData.work}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-2 rounded-lg bg-gray-200"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-500 hover:bg-indigo-400 text-white font-semibold rounded-lg px-4 py-2 mt-6"
        >
          Update Profile
        </button>
        {message && <p className="mt-4 text-center">{message}</p>}
      </form>
    </section>
  );
};

export default EditProfile;
