import Image from "next/image"
import WhiteContainer from "@/components/Container/WhiteContainer"

export default function BlogPostTitle() {
  return (
    <div className="blog-post-title">
      <h2>
        A UX Case Study on Creating a Studious Environment for Students
      </h2>

      <p>Andrew Jonson Posted on 27th January 2021</p>

      <div className="image">
        <Image src="/blog-title.jpg" alt="blog-title" fill />
      </div>
    </div>
  )
}