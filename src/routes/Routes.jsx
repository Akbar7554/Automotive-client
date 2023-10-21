import { createBrowserRouter } from "react-router-dom"
import Root from "../layouts/Root"
import Home from "../pages/Home/Home"
import AddProduct from "../pages/shared/AddProduct/AddProduct"
import Login from "../pages/Login/Login"
import Register from "../pages/Register/Register"
import MyCart from "../pages/shared/MyCart/MyCart"
import UpdateProduct from "../pages/shared/UpdateProduct/UpdateProduct"
import AllBrand from "../pages/shared/AllBrand/AllBrand"
import ErrorPage from "../pages/ErrorPage/ErrorPage"
import ViewProduct from "../pages/shared/ViewProduct/ViewProduct"
import PrivateRoutes from "./PrivateRoutes"
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/allBrand.json"),
      },
      {
        path: "/add-product",
        element: (
          <PrivateRoutes>
            <AddProduct></AddProduct>
          </PrivateRoutes>
        ),
      },
      {
        path: "/my-cart",
        element: (
          <PrivateRoutes>
            <MyCart></MyCart>
          </PrivateRoutes>
        ),
        loader: () =>
          fetch("https://automotive-server-gamma.vercel.app/allCartData"),
      },
      {
        path: "/update-product/:id",
        element: (
          <PrivateRoutes>
            <UpdateProduct></UpdateProduct>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://automotive-server-gamma.vercel.app/product/${params.id}`
          ),
      },
      {
        path: "/view-product/:id",
        element: (
          <PrivateRoutes>
            <ViewProduct></ViewProduct>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://automotive-server-gamma.vercel.app/product/${params.id}`
          ),
      },
      {
        path: "/all-brand/:brandName",
        element: <AllBrand></AllBrand>,
        loader: ({ params }) =>
          fetch(
            `https://automotive-server-gamma.vercel.app/brand/${params.brandName}`
          ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
])

export default router
