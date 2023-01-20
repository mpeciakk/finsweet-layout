import Image from "next/image"
import { useState } from "react"
import Link from "next/link"

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
          <li className="active">
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="about-us">About us</Link>
          </li>
          <li>
            <Link href="features">Features</Link>
          </li>
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
