import React from 'react'

const Header = () => {
  return (
    <>
      <div className='nav_wrapper'>
        <div className='uni_container'>
            <div className='nav_main'>
                <h1>Coupon</h1>
                <p>About Us</p>
                <div className='nav_btn_divs'>
                    <button className='button'>Login</button>
                    <button className='button'>Subscription</button>
                </div>
                <i class="fa-solid fa-bars-staggered" style={{
                  fontSize:'28px'
                }}></i>
            </div>
        </div>
      </div>
    </>
  )
}

export default Header
