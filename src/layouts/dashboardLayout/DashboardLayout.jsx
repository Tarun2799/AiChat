import React, { useEffect } from 'react'
import "./dashboardLayout.css"
import { Outlet, useNavigate } from 'react-router-dom'
import { useAuth } from '@clerk/clerk-react'

const DashboardLayout = () => {

  const {userId , isLoaded} = useAuth();

  const navigate = useNavigate();
 
  useEffect(() => {
    if(isLoaded && !userId){ // if our dashboard page is loaded and we are not authenticated then we will redirected to our sign-in page
      navigate("/sign-in");
    }
  },[isLoaded, userId, navigate]);


  return (
    <div className='dashboardLayout'>
        <div className="menu">MENU</div>
        <div className="content">
            <Outlet/>
        </div>
    </div>
  )
}

export default DashboardLayout