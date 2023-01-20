import Image from 'next/image'
import WhiteContainer from "@/components/Container/WhiteContainer"

export default function AboutUsContent() {
  return (
    <WhiteContainer>
        <div className="aboutus">
          <span>Who we are</span>
          <div className="goal">
            <h3>Goal focussed</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.</p>
          </div>
          <div className="improvement">
            <h3>Continuous improvement</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.</p>
          </div>
        </div>

        <div className="image">
          <Image src="/aboutus-content.jpeg" alt="aboutus-content" fill></Image>
        </div>
      </WhiteContainer>
  )
}