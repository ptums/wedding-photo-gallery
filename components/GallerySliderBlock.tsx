import react from 'react'
import Carousel from 'react-multi-carousel'

const CustomDot = ({ onClick, ...rest }) => {
  const {
    onMove,
    index,
    active,
    carouselState: { currentSlide, deviceType } 
  } = rest;
  const carouselItems = [CarouselItem1, CaourselItem2, CarouselItem3];
  // onMove means if dragging or swiping in progress.
  // active is provided by this lib for checking if the item is active or not.
  return (
    <button
      className={active ? "active" : "inactive"}
      onClick={() => onClick()}
    >
      {React.Children.toArray(carouselItems)[index]}
    </button>
  );
};

const GallerySliderBlock = ({ slides, title }) => {

  return (
    <>
      <h3>{title}</h3>
      <Carousel showDots customDot={<CustomDot />}>
        {slides.length > 0 &&
          slides.map((slide, index) => (
            <ImageBlock key={`slide-${index}`} {...slide} />
          ))}
      </Carousel>
    </>
  )
}