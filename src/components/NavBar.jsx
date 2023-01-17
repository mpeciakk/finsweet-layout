import Image from "next/image"
import { useState } from "react"

export default function NavBar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)

  return (
    <div className="navbar-wrapper wrapper">
      <nav className="navbar container">
        <div className="logo">
          <Image src="/logo.svg" alt="logo" width={122} height={25} />
        </div>

        <button
          className={`hamburger ${isNavExpanded ? "expanded" : ""}`}
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          <div className="icon">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        <ul className={`links ${isNavExpanded ? "expanded" : ""}`}>
          <li className="active">Home</li>
          <li>About us</li>
          <li>Features</li>
          <li>Pricing</li>
          <li>FAQ</li>
          <li>Blog</li>

          <li>
            <button className="contact-us">Contact us</button>
          </li>
        </ul>
      </nav>
    </div>
  )
}
