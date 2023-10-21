import React, { useEffect, useState } from "react"
import { Link, useLoaderData } from "react-router-dom"
import { AiFillDelete, AiOutlineEye } from "react-icons/ai"
import { RiEditLine } from "react-icons/ri"
import Navbar from "../Navbar/Navbar"
import AdvertiseProduct from "../AdvertiseProduct/AdvertiseProduct"

const AllBrand = () => {
  

  

  const allbrands = useLoaderData()
  console.log(allbrands)
  

  return (
    <div>
      <Navbar></Navbar>
      <AdvertiseProduct></AdvertiseProduct>
      {allbrands.map((brand) => {
        return (
          <div key={brand._id} className="md:m-10 p-5">
            <div className="card card-side bg-base-100 shadow-xl  md:text-lg rounded-lg">
              <figure>
                <img className=" h-64 w-80" src={brand.image} alt="Movie" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  <span className="text-md md:text-2xl">Model :</span>{" "}
                  {brand.name}
                </h2>
                <p>
                  <span className="text-lg font-bold">Brand Name :</span>{" "}
                  {brand.brandName}
                </p>
                <p>
                  <span className="text-lg font-bold">Price : </span>
                  {brand.price}0$
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
                    <Link to={`/view-product/${brand._id}`}>
                      <button className="text-xl bg-gray-500 w-10 h-10 rounded-lg flex justify-center items-center">
                        <AiOutlineEye className="text-white"></AiOutlineEye>
                      </button>
                    </Link>
                    <Link to={`/update-product/${brand._id}`}>
                      <button className="text-xl bg-[#3C393B] w-10 h-10 rounded-lg flex justify-center items-center">
                        <RiEditLine className="text-white"></RiEditLine>
                      </button>
                    </Link>
                    {/* <button
                      //   onClick={() => handleDelete(_id)}
                      className="text-xl bg-rose-600 w-10 h-10 rounded-lg flex justify-center items-center"
                    >
                      <AiFillDelete className="text-white"></AiFillDelete>
                    </button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default AllBrand
