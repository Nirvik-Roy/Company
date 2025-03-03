import React from 'react'
import img from '../../assets/image-removebg-preview.png'
import img2 from '../../assets/image__1_-removebg-preview.png'
import img3 from '../../assets/image__2_-removebg-preview.png'
import img4 from '../../assets/image__3_-removebg-preview.png'
import img5 from '../../assets/image__4_-removebg-preview.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Company = () => {
  var settings = {
    dots: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 799,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
         
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <div className='company_wrapper'>
      
   
        <Slider {...settings}>
        {[img, img2, img3, img4, img5].map((e,i)=>{
            return(
                <>
                <div className='company_logo_div'>
                <img src={e}/>
            </div>
                </>
            )
        })}
        </Slider>
      
           
      
      </div>
    </>
  )
}

export default Company
