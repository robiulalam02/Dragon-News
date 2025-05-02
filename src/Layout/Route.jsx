import {
  createBrowserRouter,
} from "react-router";
import Root from "../Pages/Root";
import Home from "../Pages/Home";
import Category from "../Pages/Category";
import AllCategories from "../components/Category/AllCategories";
import CategoryNews from "../Pages/CategoryNews";
import Trending from "../Pages/Trending";
import Login from "../components/Login/Login";
import Auth_Layout from "./Auth_Layout";
import Register from "../components/Register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home
      },

      {
        path: '/categories/:id',
        loader: () => fetch('/news.json'),
        Component: CategoryNews
      },
      {
        path: '/categories/details/:id',
        element: <h3>This is Details</h3>
      },
    ]
  },
  {
    path: '/auth',
    Component: Auth_Layout,
    children: [
      {
        path: '/auth/login',
        Component: Login
      },
      {
        path: '/auth/register',
        Component: Register
      }
    ]
  }
]);