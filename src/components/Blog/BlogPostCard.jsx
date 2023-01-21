import Image from "next/image"

export default function BlogPostCard({ image, date, title, content }) {
  return (
    <div className="blog-post-card">
      <div className="image">
        <Image src={image} fill alt={image} />
      </div>

      <div className="date">
        {date}
      </div>

      <h6 className="title">
        {title}
      </h6>

      <div className="content">
        {content}
      </div>

      <div className="read-more">Read more</div>
    </div>
  )
}