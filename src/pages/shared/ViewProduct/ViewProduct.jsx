import React from "react"
import { useLoaderData } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import Swal from "sweetalert2"

const ViewProduct = () => {
  const product = useLoaderData()
  const { _id, name, brandName, price, rating, image, cars, message } = product
  console.log(product)

  const handleAddProduct = () => {
    const { _id, name, brandName, price, rating, image, cars, message } =
      product
    console.log(product)
    fetch(`https://automotive-server-ibnlr8cev-akbar7554.vercel.app/add-cart`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name,
        brandName,
        price,
        rating,
        image,
        cars,
        message,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Product Added Successfully!",
            icon: "success",
            confirmButtonText: "Ok",
          })
        }
      })
  }
  return (
    <div>
      <Navbar></Navbar>
      <div className="py-12 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-8 flex justify-center">
            <p className="relative rounded-full px-6 py-4 text-lg leading-6 text-rose-600 ring-1 ring-inset ring-rose-900/10 hover:ring-rose-600">
              <span className="hidden md:inline"></span>
              <a className="font-semibold text-rose-600">
                <span className="absolute inset-0"></span> {brandName}{" "}
              </a>
            </p>
          </div>
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              {name}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">{message}</p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <button
                onClick={handleAddProduct}
                className="rounded-md bg-rose-500 px-4 py-3 text-lg font-semibold text-white shadow-sm hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600"
              >
                Add to Cart <span className="text-2xl">→</span>
              </button>
              <a className="text-xl font-semibold leading-6 text-rose-600">
                {price}0 $
              </a>
            </div>
          </div>
          <div className="mt-10 flow-root sm:mt-20">
            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <img
                src={image}
                width="2432"
                height="1442"
                className="rounded-md shadow-2xl ring-1 ring-gray-900/10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewProduct
