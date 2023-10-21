import React, { useState } from "react"
import { Link, useLoaderData } from "react-router-dom"
import { AiOutlineEye, AiFillDelete } from "react-icons/ai"
import { RiEditLine } from "react-icons/ri"
import Swal from "sweetalert2"
const SingleMyCart = ({ product }) => {
  const { _id, name, brandName, price, rating, image, cars, message } = product
  const [users, setUsers] = useState(product)

  const handleDelete = (_id) => {
    const { name, brandName, price, rating, image, cars, message } = product
    console.log(_id)
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        //   console.log("Deleted")
        fetch(
          `https://automotive-server-ibnlr8cev-akbar7554.vercel.app/product/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data)
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Product has been deleted.", "success")
              const remaining = users.filter((user) => user._id !== _id)
              setUsers(remaining)
            }
          })
      }
    })
  }
  return (
    <div className="card card-side bg-base-100 shadow-xl md:text-lg rounded-lg">
      <figure>
        <img className=" h-64 w-80" src={image} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          <span className="text-md md:text-2xl">Model :</span> {name}
        </h2>
        <p>
          <span className="text-lg font-bold">Brand Name :</span> {brandName}
        </p>
        <p>
          <span className="text-lg font-bold">Price : </span>
          {price}0$
        </p>
        <div className="rating">
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
            checked
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
        </div>
        <div className="card-actions justify-end mt-2">
          {/* <p className="w-40">{message}</p> */}
          <div className="btn-group btn-group-horizontal items-center flex gap-5">
            {/* <button className="text-xl bg-gray-500 w-10 h-10 rounded-lg flex justify-center items-center">
              <AiOutlineEye className="text-white"></AiOutlineEye>
            </button> */}
            {/* <Link to={`update-product/${_id}`}>
              <button className="text-xl bg-[#3C393B] w-10 h-10 rounded-lg flex justify-center items-center">
                <RiEditLine className="text-white"></RiEditLine>
              </button>
            </Link> */}
            <button
              onClick={() => handleDelete(_id)}
              className="text-xl bg-rose-600 w-10 h-10 rounded-lg flex justify-center items-center"
            >
              <AiFillDelete className="text-white"></AiFillDelete>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleMyCart
