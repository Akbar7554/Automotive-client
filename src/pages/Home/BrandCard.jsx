import React from "react"
import { Link } from "react-router-dom";

const BrandCard = ({ brands}) => {
  // const { _id, name, brandName, price, rating, image, cars, message } = product
  const { name, image_url } = brands
  
  return (
    <Link
      to={`/all-brand/${name}`}
      className="cursor-pointer mb-5 mx-10 md:mx-0 p-10 card card-compact md:w-96 bg-gray-800 shadow-xl"
    >
      <figure>
        <img className="h-36 w-36" src={image_url} alt="Shoes" />
      </figure>
      <h1 className="text-center my-5 text-2xl font-bold text-white">{name}</h1>
    </Link>
  )
}

export default BrandCard
