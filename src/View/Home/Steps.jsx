import React, { useEffect, useRef } from 'react'
import img from '../../assets/image (5).png'
import img1 from '../../assets/image 53.png'
import img2 from '../../assets/image (6).png'
import img3 from '../../assets/image (7).png'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const Steps = () => {
    const data =[
        
        {
        title:'Step 1: Get Your Unique Link Your Key to Earning!',
        description:'Sign up for our referral program and unlock your personal referral link. It’s free, easy, and your ticket to earning passive income!',
        img: img,
    
    },

    {
        title:'Step 2: Share & Spark the Chain Reaction',
        description:'Spread the word! Share your link with friends, family, and followers—via social media, messages, or even word of mouth. The more you share, the bigger your earning potential!',
        img:img1
    },


    {
        title:'Step 3: Earn Every Time Someone Buys',
        description:'When someone purchases using your link, you earn a commission. But here’s the magic—if they share your link with others, and those people buy, you keep earning from every sale down the line!',
        img:img2
    },

    {
        title:'Step 4: Watch Your Earnings Multiply!',
        description:'The chain keeps growing, and so do your rewards! The more people share, the more commissions you rack up. There’s no limit—just keep sharing and keep earning!',
        img:img3
    },

]
const ref = useRef(null)
useEffect(()=>{
   
   const pathLength = ref.current.getTotalLength()
   gsap.set(ref.current,{strokeDasharray:pathLength})
  
   gsap.fromTo(ref.current,{
    strokeDashoffset:pathLength
   },{
    strokeDashoffset:0,
    ease:'easeIn',
    duration:20,
    scrollTrigger:{
        
        trigger:'.svg_container',

        start:'top top',
        end:'bottom bottom',
        scrub:15,
        once:true
    }
   })
},[])

  return (
    <>
      <div className='steps_wrapper' style={{
        position:'relative'
      }}>
        <div className='uni_container'>
        <div className='steps_display_class'>

       
        {data.map((e,i)=>{
            return (
                <>
                <div className='step_wrapper'>
                <div className='step_content'>
                    <h1>{e.title}</h1>
                    <p>{e.description}</p>
                </div>
                <div className='step_circle_wrapper'>
                    <div className={i===3 ? 'step_circle_div2' : 'step_circle_div'}>
                        <img src={e.img}/>
                    </div>
                </div>
            </div>
                </>
            )
        })}
        </div>
        <div className='new_layout_display_class'>
        <div className='new_layout_wrapper'>
        <div  style={{
                display:"flex",
                flexDirection:'column',
                rowGap:'250px',
                position:'relative',
               
            }}  >
                {data.map((e,i)=>{
                    return(
                        <>
                            <div className='step_content_new'>
                            <h1>{e.title}</h1>
                            <p>{e.description}</p>
                            </div>
                        </>
                    )
                })}
            </div>
        <div style={{
                display:"flex",
                flexDirection:'column',
                rowGap:'70px',
                position:'relative',
               
            }} className='steps_circle_wrapper'>
{data.map((e,i)=>{
    return(
        <>
            <div className='step_circle_div2'>
                <img src={e.img}/>
            </div>
        </>
    )
})}
                <div className='svg_container'>
                <svg className='svg_class' width={"125%"} height={"130%"} viewBox="0 0 474 2352" fill="none" xmlns="http://www.w3.org/2000/svg">
<path ref={ref} className='svg_path' d="M409.5 1C390.794 74.8279 433.51 233.994 282.365 240C188.211 242.503 18.34 254.802 7.86464 442.5C1.62928 550.739 8.09154 675.935 264.365 711C314.871 717.911 416.664 756.235 464.394 889.5C493.077 969.585 441.567 1172 221.894 1172C109.894 1172 19.8553 1214.32 3.39396 1388.5C-17.1827 1606.23 260 1630.5 272 1630.5C510 1630.5 500.34 1970.87 399 2026C274 2094 288.421 2086.84 221.894 2133C96.5001 2220 131 2310.5 131 2352" stroke="#0EA8C5" stroke-width="8"/>
</svg>



                </div>
            </div>
        </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default Steps
