import React from "react"
import BannerImage from "../../../assets/CarBannerImage.png"
const Banner = () => {
  return (
    <div className="bg-white dark:bg-gray-800 flex flex-col-reverse relative z-20 items-center overflow-hidden">
      <div className="container mx-auto px-6 flex relative py-16  text-center">
        <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
          <span className="w-full h-2 rounded-lg bg-gray-800 dark:bg-rose-700 mb-12"></span>
          <h1 className="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-800">
            Vehicles
            <span className="text-5xl sm:text-7xl">for Sale</span>
          </h1>
          <p className="text-sm mt-3 sm:text-base text-gray-700 dark:text-white">
            THE WHOLE UNIVERSE OF ELECTRIC VEHICLES TO MATCH YOUR NEEDS
          </p>
          <div className="flex mx-auto mt-8">
            <a
              href="#"
              className="uppercase py-2 px-4 rounded-lg bg-rose-700 border-2 border-transparent text-white text-md mr-4 hover:bg-rose-600"
            >
              More Cars...
            </a>
            {/* <a
              href="#"
              className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-pink-500 text-pink-500 dark:text-white hover:bg-pink-500 hover:text-white text-md"
            >
              Read more
            </a> */}
          </div>
        </div>
        <div className="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
          <img src={BannerImage} className="max-w-xs md:max-w-xl m-auto" />
        </div>
      </div>
    </div>
  )
}

export default Banner
