import React from 'react'
import { CCarousel } from '@coreui/react'
function Cars() {
  return (
    <div>
      <CCarousel controls indicators dark>
  <CCarouselItem>
    <CImage className="d-block w-100" src={ReactImg} alt="slide 1" />
    <CCarouselCaption className="d-none d-md-block">
      <h5>First slide label</h5>
      <p>Some representative placeholder content for the first slide.</p>
    </CCarouselCaption>
  </CCarouselItem>
  <CCarouselItem>
    <CImage className="d-block w-100" src={VueImg} alt="slide 2" />
    <CCarouselCaption className="d-none d-md-block">
      <h5>Second slide label</h5>
      <p>Some representative placeholder content for the first slide.</p>
    </CCarouselCaption>
  </CCarouselItem>
  <CCarouselItem>
    <CImage className="d-block w-100" src={AngularImg} alt="slide 3" />
    <CCarouselCaption className="d-none d-md-block">
      <h5>Third slide label</h5>
      <p>Some representative placeholder content for the first slide.</p>
    </CCarouselCaption>
  </CCarouselItem>
</CCarousel>
    </div>
  )
}

export default Cars
