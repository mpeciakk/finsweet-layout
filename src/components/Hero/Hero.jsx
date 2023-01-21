import Image from "next/image"
import DarkContainer from "@/components/Container/DarkContainer"

export default function Hero({ content, image }) {
  return (
    <div className="hero">
      <div className="content">
        {content}
      </div>

      <div className="image">
        <Image src={image} alt="homepage hero" fill />
      </div>
    </div>
  )
}