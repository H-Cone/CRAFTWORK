    import React from 'react'
import { useAuth } from '../context/AuthContext'
import { Navigate } from 'react-router-dom'

    const RoleRoute = ({children, role}) => {

        const {user} = useAuth()

        if(!user) {
            return <Navigate to={'/signin'} replace/>
        }
        if(user.role !== role){
            return <Navigate to={'/dashboard'} replace/>
        }
        return children
    }

    export default RoleRoute