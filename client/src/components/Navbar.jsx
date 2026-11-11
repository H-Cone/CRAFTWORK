    import React from 'react'
    import { Link } from 'react-router-dom'
    import { useTheme } from '../context/ThemeContext'
    import './Navbar.css'
import { useAuth } from '../context/AuthContext'

    const Navbar = () => {
    const centerLinks = [
        { href: '#features', label: 'Features' },
        { href: '#how-it-works', label: 'How it works' },
        { href: '#about', label: 'About' },
    ]

    const {user, logout} = useAuth()

    const { toggleTheme } = useTheme()

    return (
        <>
        <nav className="navbar">
            <Link to="/" className="logo">
            <span className="logo-icon"></span>
            Craftwork
            </Link>

            <div className="nav-links">
            {centerLinks.map((link) => (
                <a key={link.href} href={link.href}>
                {link.label}
                </a>
            ))}
            </div>

            <div className="nav-actions">
            <button
                className="theme-toggle"
                onClick={toggleTheme}
                aria-label="Toggle theme"
            >
                ◐
            </button>

            {user ? (
                <Link to={'/'}>
                <button onClick={logout} className='cta'>Logout</button>
                </Link>
                ) 
                : (
                    <>

            <Link to="/signin" className="signin-link">
                Sign in
            </Link>

            <Link to="/signup" className="cta">
                Get started →
            </Link>

                    </>
                )}
            </div>
        </nav>
        </>
    )
    }

    export default Navbar