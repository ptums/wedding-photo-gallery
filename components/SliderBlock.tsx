import React from 'react'
import Carousel from 'react-multi-carousel'
import { formatImageUrl } from '../utils/helpers'
import { Slide, UserAgent } from '../interfaces'

type Props = {
  slides: Slide[]
  userAgent: UserAgent
}

export default function SliderBlock({ slides, userAgent }: Props): JSX.Element {
  const responsive = {
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

  const options = userAgent.deviceType === 'mobile' ? 'c_scale,w_464' : null

  return (
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlaySpeed={2000}
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
      autoPlay
      responsive={responsive}
    >
      {slides.length > 0 &&
        slides.map((slide) => (
          <img
            key={slide._id}
            alt={slide.altText}
            height="auto"
            src={formatImageUrl(false, slide.image, options, userAgent.os)}
            width="100%"
          />
        ))}
    </Carousel>
  )
}
