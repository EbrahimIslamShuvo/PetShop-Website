import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./Root";
import Home from "./Pages/Home/Home";
import Shop from "./Pages/Shop/Shop";
import Blog from "./Pages/Blog/Blog";
import AboutUS from "./Pages/AboutUS/AboutUS";
import User from "./Pages/User/User";
import Favourite from "./Pages/Favourite/Favourite";
import Cart from "./Pages/Cart/Cart";
import Contact from "./Pages/ContactUs/Contact";
import SingleBlog from "./Pages/Blog/Pages/SingleBlog";
import SingleProduct from "./Pages/Shop/Page/SingleProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root> ,
    children: [
      {
        path: "/",
        element: <Home></Home> ,
      },
      {
        path: "/shop/all",
        element: <Shop></Shop>
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "/about",
        element: <AboutUS></AboutUS>
      },
      {
        path: "/user",
        element: <User></User>
      },
      {
        path: "/favourite",
        element: <Favourite></Favourite>
      },
      {
        path: "/cart",
        element: <Cart></Cart>
      },
      {
        path: "/shop/:id",
        element: <Shop></Shop>
      },
      {
        path: "/blog/:id",
        element: <SingleBlog></SingleBlog>
      },
      {
        path: "/product/:id",
        element: <SingleProduct></SingleProduct>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
