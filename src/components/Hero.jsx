import Image from "next/image"

export default function Hero({ content, image }) {
  return (
    <div className="hero-wrapper wrapper">
      <div className="hero container">
        <div className="content">
          {content}
        </div>

        <div className="image">
          <Image src={image} alt="homepage hero" layout="fill" objectFit="contain" />
        </div>
      </div>
    </div>
  )
}