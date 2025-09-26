import React, { useState } from 'react'
import './Home.css'
import band_image from './assets/band_image.jpg'
import band_logo from './assets/band_logo.png'

const Home = () => {

  const [carouselScroll, setCarouselScroll] = useState(0)
  const maxScroll = 972 * 2

  return (
    <>
      <div className="image-wrapper">
        <img className="band-img" src={band_image} alt="" />
      </div>
      <section id="latest-news">
        <div className="content">
          <div className="section-title">LATEST NEWS</div>
          <div className="carousel">
            <div className="carousel-btns">
              <button className={`btn-left carousel-btn ${carouselScroll === 0 ? 'btn-inactive' : ''}`} onClick={() => setCarouselScroll(prev => Math.max(prev - 972, 0))}>
                &lt;
              </button>
              <button className={`btn-right carousel-btn ${carouselScroll === 1944 ? 'btn-inactive' : ''}`} onClick={() => setCarouselScroll(prev => Math.min(prev + 972, maxScroll))}>
                &gt;
              </button>
            </div>
              <div className="carousel-content" style={{ transform: `translateX(-${carouselScroll}px)` }}>
                {new Array(9).fill(0).map((object, index) => 
                <div className="carousel-obj">
                  <div className="obj-img-wrapper">
                    <img className="obj-img" src={band_logo} alt="" />
                  </div>
                  <div className="obj-title">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non, ut!</div>
                  <div className="obj-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, possimus!</div>
                  <div className="obj-read-more">Read More</div>
                </div>)}
              </div>
            
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
