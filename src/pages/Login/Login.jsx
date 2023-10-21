import React, { useContext } from "react"
import Navbar from "../shared/Navbar/Navbar"
import googleSvg from "../../assets/google-icon-logo-svgrepo-com.svg"
import { Link, useLocation, useNavigate } from "react-router-dom"
import toast, { Toaster } from "react-hot-toast"
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth"
import { AuthContext } from "../../providers/AuthProvider"
import app from "../../Firebase/firebase.config"

const Login = () => {
  // const handleLogin = e => {
  //     e.preventDefault()
  //     const form = new FormData(e.currentTarget)
  //     console.log(form.get("password"));
  // }

  // google sign in
  const auth = getAuth(app)
  const provider = new GoogleAuthProvider()
  const { signIn } = useContext(AuthContext)
  const location = useLocation()
  const navigate = useNavigate()

  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user
        console.log(user)
        toast.success("Account Created Successfully!")
      })
      .catch((error) => {
        console.error(error)
      })
    navigate(location?.state ? location.state : "/")
  }
  console.log("location in login page", location)
  const handleLogin = (e) => {
    e.preventDefault()
    console.log(e.currentTarget)
    const form = new FormData(e.currentTarget)
    const email = form.get("email")
    const password = form.get("password")
    console.log(email, password)
    signIn(email, password)
      .then((result) => {
        console.log(result.user)
        toast.success("Successfully SignIn", {
          style: {
            padding: "16px",
            color: "white",
            backgroundColor: "rgb(74 222 128)",
          },
          iconTheme: {
            primary: "black",
            secondary: "#FFFAEE",
          },
        })
        
        navigate(location?.state ? location.state : "/")
        navigate(location?.accessToken ? location.accessToken : "/")
      })
      .catch((error) => {
        console.error(error)
        toast.error("Your email or password do not match. Please try again", {
          style: {
            padding: "16px",
            color: "white",
            backgroundColor: "rgb(239 68 68)",
            textAlign: "center",
          },
          iconTheme: {
            primary: "black",
            secondary: "#FFFAEE",
          },
        })
      })
  }

  return (
    <div className="">
      <Navbar></Navbar>
      <Toaster></Toaster>
      <div className="bg-gray-800 dark:bg-gray-800 h-screen overflow-hidden flex items-center justify-center">
        <div className="bg-white lg:w-6/12 md:7/12 w-8/12 shadow-3xl rounded-xl">
          <div
            onClick={handleGoogleLogin}
            className="bg-gray-800 cursor-pointer shadow shadow-gray-200 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full p-4 md:p-8"
          >
            <img className="w-10" src={googleSvg} alt="" />
          </div>
          <form onSubmit={handleLogin} className="p-12 md:p-24">
            <div className="flex items-center text-lg mb-6 md:mb-8">
              <svg className="absolute ml-3" width="24" viewBox="0 0 24 24">
                <path d="M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z" />
              </svg>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-200 rounded pl-12 py-2 md:py-4 focus:outline-none w-full"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="flex items-center text-lg mb-6 md:mb-8">
              <svg className="absolute ml-3" viewBox="0 0 24 24" width="24">
                <path d="m18.75 9h-.75v-3c0-3.309-2.691-6-6-6s-6 2.691-6 6v3h-.75c-1.24 0-2.25 1.009-2.25 2.25v10.5c0 1.241 1.01 2.25 2.25 2.25h13.5c1.24 0 2.25-1.009 2.25-2.25v-10.5c0-1.241-1.01-2.25-2.25-2.25zm-10.75-3c0-2.206 1.794-4 4-4s4 1.794 4 4v3h-8zm5 10.722v2.278c0 .552-.447 1-1 1s-1-.448-1-1v-2.278c-.595-.347-1-.985-1-1.722 0-1.103.897-2 2-2s2 .897 2 2c0 .737-.405 1.375-1 1.722z" />
              </svg>
              <input
                type="password"
                id="password"
                name="password"
                className="bg-gray-200 rounded pl-12 py-2 md:py-4 focus:outline-none w-full"
                placeholder="Password"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-gradient-to-b from-gray-700 to-gray-900 font-medium p-2 md:p-4 text-white uppercase w-full rounded"
            >
              Login
            </button>
            <p className="text-center mt-5 text-xl text-gray-500">
              Don&#x27;t have an account yet?
              <Link
                to="/register"
                href="#!"
                className="font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none"
              >
                Sign up
              </Link>
              .
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
