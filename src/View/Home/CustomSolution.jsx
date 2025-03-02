import React from 'react'
import Coding from './Coding'
const CustomSolution = () => {
  return (
    <>
      <div className='custom_solution_wrapper'>
        <div className='uni_container'>
            <div className='custom_solution_main'>
                <Coding/>
                <div className='right_custom_solution'>
                   <h2>Custom built integration <br/>
                   solution</h2>
                   <p>Offer investment products to your customers by using Tarrakki’s robust APIs and create UI/UX the way you want it.</p>
                   <button className='discover_btn'>Discover</button>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default CustomSolution
