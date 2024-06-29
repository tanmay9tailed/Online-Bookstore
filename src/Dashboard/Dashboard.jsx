import React from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

const Dashboard = () => {
  const { id } = useParams();
  const {
    username,
    email,
    age,
    description,
    dob,
    location,
    work,
  } = useLoaderData();

  return (
    <div className="bg-blue-100 min-h-screen w-full flex flex-col justify-center items-center">
      <div className="w-full sm:w-3/4 md:w-3/4 lg:w-1/2 bg-white shadow-lg sm:rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4">User Dashboard</h1>
        <div className="flex items-center mb-4">
          <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
            {/* Replace with actual image src={user.profileImage || "https://via.placeholder.com/150"} */}
            <img
              src="https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=1024x1024&w=is&k=20&c=oGqYHhfkz_ifeE6-dID6aM7bLz38C6vQTy1YcbgZfx8="
              alt="User Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-xl font-semibold">@{username}</h2>
            <p className="text-gray-600">{email}</p>
          </div>
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Profile Details:</h3>
          <div className="border border-gray-200 rounded-lg p-4">
            <ul className="divide-y divide-gray-200">
              <li className="flex items-center py-2">
                <span className="w-1/4 font-semibold">Location:</span>
                <span className="pl-5 text-gray-600">{location}</span>
              </li>
              <li className="flex items-center py-2">
                <span className="w-1/4 font-semibold">Age:</span>
                <span className="pl-5 text-gray-600">{age}</span>
              </li>
              <li className="flex items-center py-2">
                <span className="w-1/4 font-semibold">Work:</span>
                <span className="pl-5 text-gray-600">{work}</span>
              </li>
              <li className="flex items-center py-2">
                <span className="w-1/4 font-semibold">Date of Birth:</span>
                <span className="pl-5 text-gray-600">{dob}</span>
              </li>
              <li className="flex items-start py-2">
                <span className="w-1/4 font-semibold">Description:</span>
                <span className="pl-5 text-gray-600">{description}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-10 w-full flex justify-end">
        <Link className="text-white bg-green-500 py-2 px-5 rounded-lg transition-colors hover:bg-green-600" to={`/admin/dashboard/editprofile/${id}`}>Edit</Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
