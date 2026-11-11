import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import NotFound from './pages/NotFound'
import Dashboard from './pages/Dashboard'
import ProtectedRoute from './components/ProtectedRoute'
import RoleRoute from './components/RoleRoute'
import PostProjects from './pages/PostProjects'
import Browse from './pages/Browse'
import ProjectDetail from './pages/ProjectDetail'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Dashboard/>
          </ProtectedRoute>
          } 
          />

          <Route path="/post-project" element={<RoleRoute role={"client"}><PostProjects/></RoleRoute>} />

          <Route path="/browse" element={<ProtectedRoute><Browse/></ProtectedRoute>} />
          <Route path="/projects/:id" element={<ProtectedRoute><ProjectDetail/></ProtectedRoute>} />

        {/* wildcard */}
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App