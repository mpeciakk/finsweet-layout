import WhiteContainer from "@/components/Container/WhiteContainer"
import BlogPostTitle from "@/components/Blog/BlogPostTitle"

export default function BlogPostFeatured() {
  return (
    <WhiteContainer yPadding>
      <div className="blog-post-featured">
        <BlogPostTitle />

        <div className="description">
          <p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside.</p>

          <span>Read more</span>
        </div>
      </div>
    </WhiteContainer>
  )
}