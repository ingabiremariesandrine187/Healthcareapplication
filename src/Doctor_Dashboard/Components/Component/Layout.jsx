import React from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from './NavDashboard'
import Sidebar from './Sidebar'

function DashLayout() {
    return(
        <div>
   < Navbar/>
   <Outlet/>
   <Sidebar/>
        </div>
    )
}
export default DashLayout