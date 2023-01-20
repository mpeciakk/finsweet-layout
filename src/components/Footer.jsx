import Image from "next/image"
import WhiteContainer from "@/components/Container/WhiteContainer"
import DarkContainer from "@/components/Container/DarkContainer"

export default function Footer() {
  return (
    <footer>
      <DarkContainer>
        <footer className="footer">
          <div className="contact">
            <div className="text-box">
              <div className="logo">
                <Image src="/logo.svg" alt="logo" width={122} height={25} />
              </div>
              <p>We are always open to discuss your project and improve your online presence.</p>
            </div>

            <div className="contact-box">
              <div className="email">
                <span className="bold">Email me at</span><br />
                <span>contact@website.com</span>
              </div>
              <div className="phone">
                <span className="bold">Call us</span><br />
                <span>0927 6277 28525</span>
              </div>
            </div>
          </div>

          <div className="socials">
            <h2>Let&apos;s Talk!</h2>
            <p className="text">We are always open to discuss your project, improve your online presence and help with
              your UX/UI design
              challenges.</p>
            <div className="icons">
              <Image src="/facebook.svg" alt="Facebook" width={16} height={16} />
              <Image src="/twitter.svg" alt="Twitter" width={16} height={16} />
              <Image src="/instagram.svg" alt="Instagram" width={16} height={16} />
              <Image src="/linkedin.svg" alt="LinkedIn" width={16} height={16} />
            </div>
          </div>
        </footer>
      </DarkContainer>

      <WhiteContainer>
        <div className="bottom-bar">
          <span>Copyright 2021, template by Finsweet.com</span>

          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>FAQ</li>
            <li>Blog</li>
          </ul>
        </div>
      </WhiteContainer>
    </footer>
  )
}