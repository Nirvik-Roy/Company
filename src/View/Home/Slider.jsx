import React from 'react'
import img from '../../assets/image (8).png'
const Slider = () => {
  return (
    <>
      <div className='slider_wrapper'>
        <div className='uni_container'>
            <div className='slider_head'>
                <h4>What People Are Saying</h4>
                <div className='arrow_wrapper'>
                    <div className='arrow_div'>
                    <i class="fa-solid fa-arrow-left"></i>
                    </div>
                    <div className='arrow_div'>
                    <i class="fa-solid fa-arrow-right"></i>
                    </div>
                </div>
            </div>
            <div className='slider_div'>
                <div className='left_slide_content'>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem</p>
                    <h3>Gregg Bergstrom</h3>
                    <h5>Marketing Execute</h5>
                </div>
                <div className='right_slide_img'>
                     <img src={img}/>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Slider
