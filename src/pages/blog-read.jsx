import BlogPostTitle from "@/components/Blog/BlogPostTitle"
import WhiteContainer from "@/components/Container/WhiteContainer"
import BlogPostContent from "@/components/Blog/BlogPostContent"

export default function BlogRead() {
  return (
    <WhiteContainer yPadding>
      <BlogPostTitle />
      <BlogPostContent />
    </WhiteContainer>
  )
}