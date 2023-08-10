import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AllBlogData from '../Screens/AllBlogData'
import BlogDetails from '../Screens/BlogDetails'
// import Dashboard from '../Screens/Dashboard'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/allblogs" element={<AllBlogData />}> </Route>
      <Route path="/allblogs/:id" element={<BlogDetails />}></Route>
     
      
    </Routes>
  )
}

export default AppRoutes
