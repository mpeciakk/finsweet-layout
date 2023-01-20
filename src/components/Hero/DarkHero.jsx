import Image from "next/image"
import DarkContainer from "@/components/Container/DarkContainer"
import Hero from "@/components/Hero/Hero"

export default function DarkHero({ content, image }) {
  return (
    <DarkContainer>
      <Hero content={content} image={image} />
    </DarkContainer>
  )
}