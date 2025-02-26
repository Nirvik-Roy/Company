import React from 'react'

const HomeServices = () => {
  return (
    <>
      <div className='uni_container'>
        <div className='services_wrapper'>
            <h3 style={{
                textAlign:'center'
            }}>Our Services</h3>
            <h5 style={{
                textAlign:'center'
            }}>Would you like me to tailor it further based on your API's offerings?</h5>
            <div className='services_card_wrapper'>
                <div className='sevices_div'>
                    <div className='services_head'>
                        <div className='services_circle'></div>
                        <h5>Api</h5>
                    </div>
                    <h6>Would you like me to tailor it further based on your API's offerings?</h6>
                </div>


                <div className='sevices_div'>
                    <div className='services_head'>
                        <div className='services_circle'></div>
                        <h5>Dashboard</h5>
                    </div>
                    <h6>Would you like me to tailor it further based on your API's offerings?</h6>
                </div>



                <div className='sevices_div'>
                    <div className='services_head'>
                        <div className='services_circle'></div>
                        <h5>Earning</h5>
                    </div>
                    <h6>Would you like me to tailor it further based on your API's offerings?</h6>
                </div>



                <div className='sevices_div'>
                    <div className='services_head'>
                        <div className='services_circle'></div>
                        <h5>Upload Product</h5>
                    </div>
                    <h6>Would you like me to tailor it further based on your API's offerings?</h6>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default HomeServices
