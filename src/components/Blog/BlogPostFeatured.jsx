import WhiteContainer from "@/components/Container/WhiteContainer"
import Image from "next/image"

export default function BlogPostFeatured() {
  return (
    <WhiteContainer yPadding>
      <div className="blog-post-featured">
        <h2>
          A UX Case Study on Creating a Studious Environment for Students
        </h2>

        <p>Andrew Jonson Posted on 27th January 2021</p>

        <div className="image">
          <Image src="/blog-title.jpg" alt="blog-title" fill />
        </div>

        <div className="description">
          <p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside.</p>

          <span>Read more</span>
        </div>
      </div>
    </WhiteContainer>
  )
}