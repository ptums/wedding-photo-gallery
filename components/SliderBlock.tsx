import React from 'react'
import Carousel from 'react-multi-carousel'
import ImageBlock from './ImageBlock'
import slides from '../utils/slides.json'

export default function SliderBlock() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
      dots: true,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      dots: true,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      dots: true,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      dots: true,
    },
  }

  return (
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlaySpeed={3000}
      centerMode={false}
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      renderButtonGroupOutside={false}
      sliderClass=""
      slidesToSlide={1}
      swipeable
      responsive={responsive}
    >
      {slides.length > 0 &&
        slides.map((slide, index) => (
          <ImageBlock key={`slide-${index}`} {...slide} />
        ))}
    </Carousel>
  )
}
