import React from 'react';
import Header from '../shared/Header/Header';
import Navbar from '../shared/Navbar/Navbar';
import Banner from '../shared/Banner/Banner';
import Footer from '../shared/Footer/Footer';
import { useLoaderData } from 'react-router-dom';
import BrandCard from './BrandCard';
import { Toaster } from 'react-hot-toast';
import ExtraSection from '../shared/ExtraSection/ExtraSection';

const Home = () => {
    const brands = useLoaderData()
    return (
      <div className="dark:bg-gray-800">
        {/* <Header></Header> */}
        <Navbar></Navbar>
        <Toaster />
        <Banner></Banner>
        <div className="mx-auto mt-5 grid grid-cols-1 md:px-36 md:py-6  md:grid-cols-3 md:gap-10">
          {brands.map((abrand) => (
            <BrandCard key={abrand._id} brands={abrand}></BrandCard>
          ))}
        </div>
        <ExtraSection></ExtraSection>
        <Footer></Footer>
      </div>
    )
};

export default Home;