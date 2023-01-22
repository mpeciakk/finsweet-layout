import WhiteContainer from "@/components/Container/WhiteContainer"
import ContactUsTitle from "@/components/ContactUs/ContactUsTitle"
import ContactUsForm from "@/components/ContactUs/ContactUsForm"

export default function ContactUs() {
  return (
    <WhiteContainer yPadding>
      <ContactUsTitle />
      <ContactUsForm />
    </WhiteContainer>
  )
}