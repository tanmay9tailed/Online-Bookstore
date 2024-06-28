import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../context/AuthProvider";

const Dashboard = () => {
  const { getUserDetails, user } = useContext(AuthContext);
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

  if (!details) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-blue-50 min-h-screen w-full flex flex-col justify-center items-center">
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
            <h2 className="text-xl font-semibold">@{details.username}</h2>
            <p className="text-gray-600">{details.email}</p>
          </div>
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Profile Details:</h3>
          <div className="border border-gray-200 rounded-lg p-4">
            <ul className="divide-y divide-gray-200">
              <li className="flex items-center py-2">
                <span className="w-1/4 font-semibold">Location:</span>
                <span className="text-gray-600">{details.location || "N/A"}</span>
              </li>
              <li className="flex items-center py-2">
                <span className="w-1/4 font-semibold">Age:</span>
                <span className="text-gray-600">{details.age || "N/A"}</span>
              </li>
              <li className="flex items-center py-2">
                <span className="w-1/4 font-semibold">Work:</span>
                <span className="text-gray-600">{details.work || "N/A"}</span>
              </li>
              <li className="flex items-center py-2">
                <span className="w-1/4 font-semibold">Date of Birth:</span>
                <span className="text-gray-600">{details.dob || "N/A"}</span>
              </li>
              <li className="flex items-start py-2">
                <span className="w-1/4 font-semibold">Description:</span>
                <span className="text-gray-600">{details.description || "N/A"}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
