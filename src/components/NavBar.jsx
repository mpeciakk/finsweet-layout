import Image from "next/image"
import { useState } from "react"
import Link from "next/link"
import DarkContainer from "@/components/Container/DarkContainer"

export default function NavBar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)

  return (
    <DarkContainer>
      <nav className="navbar">
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
          <li>
            <Link href="pricing">Pricing</Link>
          </li>
          <li>
            <Link href="faq">FAQ</Link>
          </li>
          <li>
            <Link href="blog">Blog</Link>
          </li>

          <li>
            <Link href="contact-us">
              <button className="primary contact-us">Contact us</button>
            </Link>

          </li>
        </ul>
      </nav>
    </DarkContainer>
  )
}
