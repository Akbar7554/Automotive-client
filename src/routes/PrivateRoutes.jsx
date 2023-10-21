import React from "react"
import { useContext } from "react"
import { AuthContext } from "../providers/AuthProvider"
import { Navigate, useLocation } from "react-router-dom"
const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    console.log(location.pathname)
    if (loading) {
        return (
          <div className="md:ml-[600px] md:mt-[300px]">
            <span className="loading loading-ball loading-xs"></span>
            <span className="loading loading-ball loading-sm"></span>
            <span className="loading loading-ball loading-md"></span>
            <span className="loading loading-ball loading-lg"></span>
          </div>
        )
  }
  if (user) {
    return children
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>
}

export default PrivateRoutes
