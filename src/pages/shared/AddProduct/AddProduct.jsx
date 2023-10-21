import React from "react"
import Navbar from "../Navbar/Navbar"
import Swal from "sweetalert2"

const AddProduct = () => {
  const handleAddProduct = (e) => {
    e.preventDefault()

    const form = e.target

    const name = form.name.value
    const brandName = form.brandName.value
    const price = form.price.value
    const rating = form.rating.value
    const image = form.image.value
    const cars = form.cars.value
    const message = form.message.value

    const newProduct = { name, brandName, price, rating, image, cars, message }
    console.log(newProduct)

    fetch("https://automotive-server-ibnlr8cev-akbar7554.vercel.app/product", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProduct),
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
      <form
        onSubmit={handleAddProduct}
        className="bg-gray-800 m-5 p-5 rounded-lg md:p-20 md:m-10"
      >
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="name"
              id="name"
              className="block py-2.5 px-0 w-full text-xl text-gray-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-rose-500 focus:outline-none focus:ring-0 focus:border-rose-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="name"
              className="peer-focus:font-medium absolute text-xl text-gray-400 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-rose-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Name
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="brandName"
              id="brandName"
              className="block py-2.5 px-0 w-full text-xl text-gray-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-rose-500 focus:outline-none focus:ring-0 focus:border-rose-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="brandName"
              className="peer-focus:font-medium absolute text-xl text-gray-400 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-rose-600 peer-focus:dark:text-rose-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Brand Name
            </label>
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="price"
              id="price"
              className="block py-2.5 px-0 w-full text-xl text-gray-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-rose-500 focus:outline-none focus:ring-0 focus:border-rose-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="price"
              className="peer-focus:font-medium absolute text-xl text-gray-400 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-rose-600 peer-focus:dark:text-rose-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Price
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="number"
              name="rating"
              id="rating"
              className="block py-2.5 px-0 w-full text-xl text-gray-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-rose-500 focus:outline-none focus:ring-0 focus:border-rose-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="rating"
              className="peer-focus:font-medium absolute text-xl text-gray-400 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-rose-600 peer-focus:dark:text-rose-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Rating
            </label>
          </div>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="image"
            id="image"
            className="block py-2.5 px-0 w-full text-xl text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-rose-800 dark:border-gray-00 dark:focus:border-rose-500 focus:outline-none focus:ring-0 focus:border-rose-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="image"
            className="peer-focus:font-medium absolute text-xl text-gray-400 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-rose-500 peer-focus:dark:text-rose-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Image URL
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <h1 className="text-gray-400 text-xl mb-3">Type Of </h1>
          <fieldset className="md:flex gap-4">
            <legend className="sr-only">Countries</legend>
            <div className="flex items-center mb-4">
              <input
                id="cars-option-1"
                type="radio"
                name="cars"
                value="BMW"
                className="cursor-pointer w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="cars-option-1"
                className="block ml-2 text-xl font-medium text-gray-400 dark:text-gray-300"
              >
                Car
              </label>
            </div>

            <div className="flex items-center mb-4">
              <input
                id="cars-option-2"
                type="radio"
                name="cars"
                value="Mercedes"
                className="cursor-pointer w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="cars-option-2"
                className="block ml-2 text-xl font-medium text-gray-400 dark:text-gray-300"
              >
                Truck
              </label>
            </div>

            <div className="flex items-center mb-4">
              <input
                id="cars-option-3"
                type="radio"
                name="cars"
                value="Lamborghini"
                className="cursor-pointer w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="cars-option-3"
                className="block ml-2 text-xl font-medium text-gray-400 dark:text-gray-300"
              >
                Bus
              </label>
            </div>
            <div className="flex items-center mb-4">
              <input
                id="cars-option-3"
                type="radio"
                name="cars"
                value="Ferrari"
                className="cursor-pointer w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="cars-option-3"
                className="block ml-2 text-xl font-medium text-gray-400 dark:text-gray-300"
              >
                Baby-Texi
              </label>
            </div>
            <div className="flex items-center mb-4">
              <input
                id="cars-option-3"
                type="radio"
                name="cars"
                value="Tesla"
                className="cursor-pointer w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="cars-option-3"
                className="block ml-2 text-xl font-medium text-gray-400 dark:text-gray-300"
              >
                Rick-shaw
              </label>
            </div>
            <div className="flex items-center mb-4">
              <input
                id="cars-option-3"
                type="radio"
                name="cars"
                value="Porsche"
                className="cursor-pointer w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="cars-option-3"
                className="block ml-2 text-xl font-medium text-gray-400 dark:text-gray-300"
              >
                Motor-Cycle
              </label>
            </div>
          </fieldset>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <label
            htmlFor="message"
            className="block text-xl text-gray-400 font-medium mb-2"
          >
            Description
          </label>
          <textarea
            id="message"
            name="message"
            className="border-2 border-rose-600 p-2 w-full rounded-lg focus:outline-none focus:border-rose-600"
            rows="5"
          ></textarea>
        </div>

        <button
          type="submit"
          className="text-white bg-rose-700 hover:bg-rose-800 focus:ring-4 focus:outline-none focus:ring-rose-300 font-medium rounded-lg text-lg w-full sm:w-auto px-5 py-2.5 text-center dark:bg-rose-600 dark:hover:bg-rose-700 dark:focus:ring-rose-800"
        >
          Add Product
        </button>
      </form>
    </div>
  )
}

export default AddProduct
