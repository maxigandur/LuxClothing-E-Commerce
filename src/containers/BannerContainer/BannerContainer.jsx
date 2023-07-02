import React from 'react'
import "./BannerContainer.css"
import banner1 from "../imgBanners/banner1.png"
import banner2 from "../imgBanners/banner2.png"
import banner3 from "../imgBanners/banner3.png" 

const BannerContainer = () => {
  return (
    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100 img1" src={banner1} alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100 img2" src={banner2} alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100 img3" src={banner3} alt="Second slide"/>
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
  )
}

export default BannerContainer