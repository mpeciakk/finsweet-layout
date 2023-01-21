import WhiteContainer from "@/components/Container/WhiteContainer"
import BlogPostCard from "@/components/Blog/BlogPostCard"

export default function BlogPosts() {
  return (
    <WhiteContainer>
      <div className="blog-posts">
        <h2>Our Blog</h2>
        <div className="cards">
          <BlogPostCard image="/blog-post-image1.jpg" date="27 Jan 2021"
                        title="How one Webflow user grew his single person consultancy from $0-100K in 14 months"
                        content="See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract" />
          <BlogPostCard image="/blog-post-image1.jpg" date="27 Jan 2021"
                        title="How one Webflow user grew his single person consultancy from $0-100K in 14 months"
                        content="See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract" />
          <BlogPostCard image="/blog-post-image1.jpg" date="27 Jan 2021"
                        title="How one Webflow user grew his single person consultancy from $0-100K in 14 months"
                        content="See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract" />
          <BlogPostCard image="/blog-post-image1.jpg" date="27 Jan 2021"
                        title="How one Webflow user grew his single person consultancy from $0-100K in 14 months"
                        content="See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract" />
          <BlogPostCard image="/blog-post-image1.jpg" date="27 Jan 2021"
                        title="How one Webflow user grew his single person consultancy from $0-100K in 14 months"
                        content="See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract" />
          <BlogPostCard image="/blog-post-image1.jpg" date="27 Jan 2021"
                        title="How one Webflow user grew his single person consultancy from $0-100K in 14 months"
                        content="See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract" />
        </div>
      </div>
    </WhiteContainer>
  )
}