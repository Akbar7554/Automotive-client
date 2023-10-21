import React from 'react';
import Navbar from '../Navbar/Navbar';
import { useLoaderData } from 'react-router-dom';
import SingleMyCart from '../SingleMyCart/SingleMyCart';

const MyCart = () => {
    const products = useLoaderData()
    return (
      <div>
        <Navbar></Navbar>
        
        <div className="m-2 md:m-10 grid grid-cols-1 md:grid-cols-2 gap-5">
          {products.map((product) => (
            <SingleMyCart key={product._id} product={product}></SingleMyCart>
          ))}
        </div>
      </div>
    )
};

export default MyCart;