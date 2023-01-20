import DarkHero from "@/components/Hero/DarkHero"
import DarkContainer from "@/components/Container/DarkContainer"
import Hero from "@/components/Hero/Hero"
import WhiteContainer from "@/components/Container/WhiteContainer"

export default function LightHero({ content, image }) {
  return (
    <WhiteContainer>
      <div className="hero-light">
        <Hero content={content} image={image} />
      </div>
    </WhiteContainer>
  )
}