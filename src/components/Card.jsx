import Image from "next/image"

export default function Card({ icon, title, content, background = false }) {
  return (
    <div className={`box ${background ? "background" : ""}`}>
      <div className="icon">
        <Image src={icon} alt={title} width={35} height={35} />
      </div>
      <h6>{title}</h6>
      <p>{content}</p>
    </div>
  )
}