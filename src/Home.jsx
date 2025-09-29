import React, { useState } from 'react'
import './Home.css'
import band_image from './assets/band_image.jpg'
import band_logo from './assets/band_logo.png'
import YouTube from 'react-youtube'

const Home = () => {

  const [carouselScroll, setCarouselScroll] = useState(0)
  const maxScroll = 972 * 2


  return (
    <>
      <div className="image-wrapper">
        <img className="band-img" src={band_image} alt="" />
      </div>
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
        <button className="read-all-news-btn">READ ALL NEWS</button>
        <div className="section-divider"></div>
        <div className="section">
          <div className="section-title">2025 SHOW DATES</div>
          <div className="tour-dates">
            {new Array(8).fill(0).map((object, index) => 
              <div className="show">
                <div className="show-date">Fri, Jul 24</div>
                <div className="show-title">Hills of Rock Festival 2026 @ 4:30 PM</div>
                <div className="show-location">Pittsburgh, PA</div>
                <button className="show-tickets">TICKETS</button>
              </div>)}
          </div>
          <button className="show-all-dates-btn">VIEW ALL TOUR DATES</button>
        </div>
        <div className="section-divider"></div>
        <div className="section">
          <div className="section-title">WATCH THE OFFICIAL (SONG) MUSIC VIDEO!</div>
          <YouTube videoId="IEDEtZ4UVtI" opts={{
            height: '390',
            width: '640',
            playerVars: {
              autoplay: 0,
              controls: 1,
              modestbranding: 1,
            },
          }}/>
          <button className="show-all-dates-btn">WATCH MORE VIDEOS</button>
        </div>
        <div className="section-divider"></div>
        <div className="section">
          <div className="section-title">MUSIC</div>
          <div className="section-subtitle">Click here to check out our full discography</div>
        </div>
      </div>
    </>
  )
}

export default Home
