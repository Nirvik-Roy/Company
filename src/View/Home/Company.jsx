import React from 'react'
import img from '../../assets/image-removebg-preview.png'
import img2 from '../../assets/image__1_-removebg-preview.png'
import img3 from '../../assets/image__2_-removebg-preview.png'
import img4 from '../../assets/image__3_-removebg-preview.png'
import img5 from '../../assets/image__4_-removebg-preview.png'
const Company = () => {
  return (
    <>
      <div className='company_wrapper'>
        <div className='company_logo_main'>
        {[img, img2, img3, img4, img5].map((e,i)=>{
            return(
                <>
                <div className='company_logo_div'>
                <img src={e}/>
            </div>
                </>
            )
        })}
           
        </div>
      </div>
    </>
  )
}

export default Company
