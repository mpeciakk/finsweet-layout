import DarkHero from "@/components/Hero/DarkHero"
import DarkContainer from "@/components/Container/DarkContainer"

export default function GrayContainer({ children, yPadding }) {
  return (
    <div className="wrapper-gray">
      <DarkContainer yPadding={yPadding}>
        {children}
      </DarkContainer>
    </div>
  )
}