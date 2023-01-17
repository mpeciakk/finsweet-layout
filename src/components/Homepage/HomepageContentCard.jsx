import Image from "next/image"

export default function HomepageContentCard({ icon, title, content }) {
  return (
    <div className="box">
      <div className="icon">
        <Image src={icon} alt={title} width={35} height={35} />
      </div>
      <h6>{title}</h6>
      <p>{content}</p>
    </div>
  )
}