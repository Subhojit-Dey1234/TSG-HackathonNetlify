import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export default function ProtectedNotAuth() {
    const isAuthenticated = localStorage.getItem("access-token")
    return (
        isAuthenticated ? <Navigate to={"/"} /> : <Outlet/>
    )
}
