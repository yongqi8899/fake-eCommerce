import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Login from "../pages/Login";
import Root from "../layout/Root";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
        // children: [
        //   { 
        //     path:"", 
        //     element: <Home />, 
        //     // loader: homeLoader 
        //   },
        //   {
        //     path: "categories/:category",
        //     element: <Products />,
        //     // loader: productLoader,
        //   },
        // ],
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
export default router