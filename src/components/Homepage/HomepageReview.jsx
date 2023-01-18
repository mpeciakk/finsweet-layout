import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useState } from "react"
import Image from "next/image"

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
    <div className="homepage-review-wrapper wrapper">
      <div className="homepage-review container">
        <div className="left">
          <h3>What our clients say about us</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</p>
        </div>

        <div className="right">
          <Carousel showThumbs={false} showStatus={false} selectedItem={currentSlide}
                    onChange={updateCurrentSlide} showIndicators={false} showArrows={false}>
            <div className="review">
              <h5>The best agency we’ve worked with so far. They understand our product and are able to add new features
                with a great focus.</h5>

              <div className="avatar">
                <div className="image">
                  <Image src="/avatar.jpeg" alt="avatar" fill />
                </div>

                <div className="info">
                  <span className="name">Jenny Wilson</span>
                  <span className="status">Vice President</span>
                </div>
              </div>
            </div>

            <div className="review">
              <h5>The best agency we’ve worked with so far. They understand our product and are able to add new features
                with a great focus.</h5>

              <div className="avatar">
                <div className="image">
                  <Image src="/avatar.jpeg" alt="avatar" fill />
                </div>

                <div className="info">
                  <span className="name">Jenny Wilson</span>
                  <span className="status">Vice President</span>
                </div>
              </div>
            </div>

            <div className="review">
              <h5>The best agency we’ve worked with so far. They understand our product and are able to add new features
                with a great focus.</h5>

              <div className="avatar">
                <div className="image">
                  <Image src="/avatar.jpeg" alt="avatar" fill />
                </div>

                <div className="info">
                  <span className="name">Jenny Wilson</span>
                  <span className="status">Vice President</span>
                </div>
              </div>
            </div>
          </Carousel>

          <div className="buttons">
            <button onClick={prevSlide}><span className="arrow" /></button>
            <button className="next" onClick={nextSlide}><span className="arrow" /></button>
          </div>
        </div>
      </div>
    </div>
  )
}