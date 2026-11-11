import React from 'react'
import { useAuth } from '../context/AuthContext'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import api from '../service/api'

const Dashboard = () => {

    const {user} = useAuth()
    
  return (
    <>
    <h1>Welcome, {user.firstName}</h1>
    
        {user.role === "client" ? (
    <>
        <h2>Your projects</h2> 
        <Link to={'/post-project'} className='cta'>
            Post a project
        </Link>
        </> 
        ) : (
            <>
            <h2>Your proposals</h2> 
            
        <Link to={'/browse'} className='cta'>
            Browse
        </Link>
            </>
        )
        
    }
    
    </>

  )
}

export default Dashboard