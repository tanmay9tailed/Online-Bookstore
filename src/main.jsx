import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Shop from "./pages/Shop.jsx";
import About from "./components/About.jsx";
import Sell from "./components/Sell.jsx";
import SingleBook from "./pages/SingleBook.jsx";
import DashboardLayout from "./Dashboard/DashboardLayout.jsx";
import Dashboard from "./Dashboard/Dashboard.jsx";
import UploadBook from "./Dashboard/UploadBook.jsx";
import ManageBook from "./Dashboard/ManageBook.jsx";
import EditBook from "./Dashboard/EditBook.jsx";
import AuthProvider from "../context/AuthProvider.jsx";
import SignUp from "./pages/SignUp.jsx";
import Login from "./pages/Login.jsx";
import ProfileCompletionForm from "./pages/ProfileCompletionForm.jsx";
import EditProfile from "./Dashboard/EditProfile.jsx";
import ReviewForm from "./pages/ReviewForm.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<ProfileCompletionForm />} />
        <Route
          path="/book/:id"
          element={<SingleBook />}
          loader={({ params }) =>
            fetch(`http://localhost:3000/book/${params.id}`)
          }
        />
        <Route
          path="/book/:id/review"
          element={<ReviewForm />}
          // loader={({ params }) =>
          //   fetch(`http://localhost:3000/book/${params.id}`)
          // }
        />
      </Route>
      <Route path="/admin/dashboard" element={<DashboardLayout />}>
        {/* <Route path="/admin/dashboard" element={<Dashboard />} /> */}
        <Route path="/admin/dashboard/upload" element={<UploadBook />} />
        <Route path="/admin/dashboard/manage" element={<ManageBook />} />
        <Route path="/admin/dashboard/editprofile" element={<EditProfile />} />
        <Route
          path="/admin/dashboard/:id"
          element={<Dashboard />}
          loader={({ params }) =>
            fetch(`http://localhost:3000/getUserData/${params.id}`)
          }
        />
        <Route
          path="/admin/dashboard/editprofile/:id"
          element={<EditProfile />}
          loader={({ params }) =>
            fetch(`http://localhost:3000/getUserData/${params.id}`)
          }
        />
        <Route
          path="/admin/dashboard/edit-books/:id"
          element={<EditBook />}
          loader={({ params }) =>
            fetch(`http://localhost:3000/book/${params.id}`)
          }
        />
      </Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
