import Image from "next/image"

export default function Hero() {
  return (
    <div className="hero-wrapper wrapper">
      <div className="hero container">
        <div className="content">
          <h1>Building stellar websites for early startups</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>

          <div className="buttons">
            <button className="work">View our work</button>
            <button className="pricing">View pricing</button>
          </div>
        </div>

        <div className="image">
          <Image src="/homepage-hero.png" alt="homepage hero" layout="fill" objectFit="contain" />
        </div>
      </div>
    </div>
  )
}