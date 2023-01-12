import React from 'react'

import {Routes} from 'react-router-dom'

import Home from "./Pages/Home/Home"
import Auth from "./Pages/Auth/Auth"

const AllRoutes = () => {
  return (
    <Routes>
      <Routes exact path='/welcome' component={Home} />
      <Routes path='/Auth' component={Auth} />
    </Routes>
  )
}

export default AllRoutes