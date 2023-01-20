import DarkHero from "@/components/Hero/DarkHero"
import DarkContainer from "@/components/Container/DarkContainer"

export default function WhiteContainer({ children }) {
  return (
    <div className="wrapper-light">
      <DarkContainer>
        {children}
      </DarkContainer>
    </div>
  )
}