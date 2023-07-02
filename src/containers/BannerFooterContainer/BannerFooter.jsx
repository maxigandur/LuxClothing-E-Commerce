import React from 'react'
import "./BannerFooter.css"
import banner2 from "../imgBanners/bannerfooter.png"

const BannerFooter = () => {
  return (
    <div className='divfooter'>
    <div className='bannerfooterMain'>
        {/* <div classNameName='bannerfooterMain'>         
        </div> */}
        {/* <div id="carouselExampleControls carro" classNameName="carousel slide" data-ride="carousel">
          <div classNameName="carousel-inner">
            <div classNameName="carousel-item active">
              <div classNameName="d-block w-100 bannerfooter1" src="#" alt="First slide"/>
            </div>
            <div classNameName="carousel-item ">
              <div classNameName="d-block w-100 bannerfooter2" src="#" alt="Second slide"/>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
          </a>
        </div> */}

<div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100 img1" src={banner2} alt="First slide"/>
    </div>
    
    
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
        
    </div>
    </div>
  )
}

export default BannerFooter