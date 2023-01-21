import DarkHero from "@/components/Hero/DarkHero"
import DarkContainer from "@/components/Container/DarkContainer"

export default function WhiteContainer({ children, yPadding }) {
  return (
    <div className="wrapper-light">
      <DarkContainer yPadding={yPadding}>
        {children}
      </DarkContainer>
    </div>
  )
}