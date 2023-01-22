import WhiteContainer from "@/components/Container/WhiteContainer"

export default function ContactUsForm() {
  return (
    <WhiteContainer>
      <div className="contact-us-form">
        <label>
          <span>Name</span>
          <input type="text" name="name" placeholder="Enter your name" />
        </label>

        <label>
          <span>Email</span>
          <input type="text" name="email" placeholder="Enter your email" />
        </label>

        <label>
          <span>Category</span>
          <input type="text" name="category" placeholder="Provide context" />
        </label>

        <label>
          <span>Subject</span>
          <input type="text" name="subject" placeholder="Select subject" />
        </label>

        <label className="message-textarea">
          <span>Message</span>
          <textarea name="message" placeholder="Write your question here" />
        </label>

        <button className="primary black">Send Message</button>

      </div>
    </WhiteContainer>
  )
}