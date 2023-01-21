import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useState } from "react"
import Image from "next/image"
import GrayContainer from "@/components/Container/GrayContainer"

function Review({ content, avatar, name, role }) {
  return (
    <div className="review">
      <h5>{content}</h5>

      <div className="avatar">
        <div className="image">
          <Image src={avatar} alt="avatar" fill />
        </div>

        {/*<div className="info">*/}
          <span className="name">{name}</span>
          <span className="role">{role}</span>
        {/*</div>*/}
      </div>
    </div>
  )
}

export default function HomepageReview() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide(currentSlide + 1)
  }

  const prevSlide = () => {
    setCurrentSlide(currentSlide - 1)
  }

  const updateCurrentSlide = (index) => {
    if (currentSlide !== index) {
      setCurrentSlide(index)
    }
  }

  return (
    <GrayContainer>
      <div className="homepage-review">
        <div className="left">
          <h3>What our clients say about us</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</p>
        </div>

        <div className="right">
          <Carousel showThumbs={false} showStatus={false} selectedItem={currentSlide}
                    onChange={updateCurrentSlide} showIndicators={false} showArrows={false}>
            <Review
              content="The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."
              avatar="/avatar.jpeg" name="Jenny Wilson" role="Vice President" />
            <Review
              content="The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."
              avatar="/avatar.jpeg" name="Jenny Wilson" role="Vice President" />
            <Review
              content="The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."
              avatar="/avatar.jpeg" name="Jenny Wilson" role="Vice President" />
          </Carousel>

          <div className="buttons">
            <button onClick={prevSlide}><span className="arrow" /></button>
            <button className="next" onClick={nextSlide}><span className="arrow" /></button>
          </div>
        </div>
      </div>
    </GrayContainer>
)
}