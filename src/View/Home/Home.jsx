import React from 'react'
import Header from '../../Layout/Header'
import './Home.css'
import img from '../../assets/7107883 1.png'
import HomeServices from './HomeServices'
import HomeSolution from './HomeSolution'
import ModualSolutions from './ModualSolutions'
import CustomSolution from './CustomSolution'
import EnhanceProduct from './EnhanceProduct'
import Company from './Company'
import Steps from './Steps'
import Slider from './Slider'
import Achievements from './Achievements'
import BuyApi from './BuyApi'
const Home = () => {
  return (
    <>
     <div className='home_wrapper'>
        <Header/>
        <div className='uni_container'>
            <div className='banner_wrapper'>
                <div className='banner_left_content_wrapper'>
                
                <h1>Embed a customized <br/>
                    wealth management</h1>
<p>To up the ante of your existing services and to stand out
from the crowd use Coupon APIS and Create an Interface
that offers the best engagement to your customers
</p>
<button className='request_btn'>Request Api Docs</button>
                
                 
                </div>
                <div className='banner_right_content_wrapper'>
                    <img src={img}/>
                </div>
            </div>
        </div>
     </div> 
     <HomeServices/>
     <HomeSolution/>
     <ModualSolutions/>
     <CustomSolution/>
     <EnhanceProduct/>
     <Company/>
     <Steps/>
     <Slider/>
     <Achievements/>
     <BuyApi/>
    </>
  )
}

export default Home
