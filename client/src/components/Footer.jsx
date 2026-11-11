import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {

  const columns = [
  {
    title: "Product",
    links: [
      { href: "#features", label: "Features" },
      { href: "#how-it-works", label: "How it works" },
      { href: "#about", label: "About" },
    ],
  },
  {
    title: "Account",
    links: [
      { to: "/signin", label: "Sign in" },
      { to: "/signup", label: "Sign up" },
    ],
  },
]


  return (
    <>
    
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <Link to="/" className="logo">
            <span className="logo-icon"></span>
            Craftwork
          </Link>
          <p>Hire talent. Ship work. Get paid.</p>
        </div>

        {columns.map((col) => (
          <div key={col.title} className="footer-col">
            <h4>{col.title}</h4>
            {col.links.map((link) =>
              link.to ? (
                <Link key={link.label} to={link.to}>{link.label}</Link>
              ) : (
                <a key={link.label} href={link.href}>{link.label}</a>
              )
            )}
          </div>
        ))}
      </div>

      <p className="footer-copy">© 2026 Craftwork. All rights reserved.</p>
    </footer>
    </>
  )
}

export default Footer