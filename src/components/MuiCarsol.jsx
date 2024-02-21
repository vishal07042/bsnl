import React from 'react';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';

export default function MuiCarsol() {
  return (
    <MDBCarousel showControls interval={1000} className=''>
      <MDBCarouselItem itemId={1} interval={1000}>
        <img src='https://mdbootstrap.com/img/new/slides/041.jpg' className='d-block w-100 h-60' alt='...' />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={2}>
        <img src='https://mdbootstrap.com/img/new/slides/042.jpg' className='d-block w-100 w-100 h-60' alt='...' />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={3}>
        <img src='https://mdbootstrap.com/img/new/slides/043.jpg' className='d-block w-100 w-100 h-60' alt='...' />
      </MDBCarouselItem>
    </MDBCarousel>
  );
}