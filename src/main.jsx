import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import url from "../url.js";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Shop from "./pages/Shop.jsx";
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
import Cart from "./pages/Cart.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<ProfileCompletionForm />} />
        <Route path="/book/review/:id" element={<ReviewForm />} />
        <Route
          path="/book/:id"
          element={<SingleBook />}
          loader={({ params }) =>
            fetch(`${url}/book/${params.id}`)
          }
        />
        <Route
          path="/cart/:id"
          element={<Cart />}
          loader={({ params }) =>
            fetch(`${url}/cart/${params.id}`)
          }
        />
      </Route>
      <Route path="/admin/dashboard" element={<DashboardLayout />}>
        <Route path="/admin/dashboard/upload" element={<UploadBook />} />
        <Route path="/admin/dashboard/manage" element={<ManageBook />} />
        <Route path="/admin/dashboard/editprofile" element={<EditProfile />} />
        <Route
          path="/admin/dashboard/:id"
          element={<Dashboard />}
          loader={({ params }) =>
            fetch(`${url}/getUserData/${params.id}`)
          }
        />
        <Route
          path="/admin/dashboard/editprofile/:id"
          element={<EditProfile />}
          loader={({ params }) =>
            fetch(`${url}/getUserData/${params.id}`)
          }
        />
        <Route
          path="/admin/dashboard/edit-books/:id"
          element={<EditBook />}
          loader={({ params }) =>
            fetch(`${url}/book/${params.id}`)
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
