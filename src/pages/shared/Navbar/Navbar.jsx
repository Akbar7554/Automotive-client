import React, { useContext } from "react"
import { Link, NavLink } from "react-router-dom"
import logoImage from "../../../assets/logo.png"
import { AuthContext } from "../../../providers/AuthProvider"
import userProfile from "../../../assets/userprofile.png"
import { useState, useEffect } from "react"
import { theme } from "flowbite-react"
import { MdOutlineDarkMode } from "react-icons/md"

const Navbar = () => {
  const [theme, setTheme] = useState("light")
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    }
    else {
      document.documentElement.classList.remove("dark")
    }
  }, [theme])

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }



   const { user, userSignOut, createUser } = useContext(AuthContext)
   const handleSignOut = () => {
     userSignOut()
       .then((result) => {
         const user = result.user
         console.log(user)
       })
       .catch((error) => {
         console.error(error)
       })
  }
  const NavLinkStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      // textDecoration: isActive ? "overline" : "none",
      color: isActive ? "red" : "normal",
    }
  }
  const navLinks = (
    <>
      <li style={{ NavLinkStyle }}>
        <NavLink
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: "18px",
          }}
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: "18px",
          }}
          to="/add-product"
        >
          Add Product
        </NavLink>
      </li>
      <li>
        <NavLink
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: "18px",
          }}
          to="/my-cart"
        >
          My Cart
        </NavLink>
      </li>
    </>
  )
  return (
    <div className="navbar bg-gray-800 ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-white h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-40 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <div className="flex items-center">
          <img className="h-20 w-20" src={logoImage} alt="" />
          <h1 className="text-white text-base md:text-2xl font-semibold">
            AUTOMOTIVE
          </h1>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <button
          onClick={handleThemeSwitch}
          className="p-2 ring-2 rounded-full font-bold ring-purple-500 ring-offset-2 ring-offset-slate-50 mr-6 dark:ring-offset-slate-900 text-white"
        >
          <MdOutlineDarkMode className="text-2xl"></MdOutlineDarkMode>
        </button>

        {user?.email ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user.photoURL} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-40 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">{user.displayName}</a>
              </li>
              <li>
                <a>{user.email}</a>
              </li>
              <li>
                <Link to="/" onClick={handleSignOut}>
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        ) : (
          <div className="w-10 h-10 rounded-full">
            <img className="w-10 h-10 rounded-full" src={userProfile} />
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
