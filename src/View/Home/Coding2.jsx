import React, { useEffect, useRef, useState } from 'react'
import circle1 from '../../assets/Ellipse 201.png'
import circle2 from '../../assets/Ellipse 202.png'
import circle3 from '../../assets/Ellipse 203.png'
import cross from '../../assets/proicons_cancel.png'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const Coding2 = () => {
    const tl= gsap.timeline()
  
    let ref5 = useRef()
    let ref6 =useRef()
    let ref7 = useRef()
    let ref8 = useRef()

    let clutter5 =''
    let clutter6 =''
    let clutter7 =''
    let clutter8 =''

    useEffect(()=>{
        let text=ref5.current.innerText
        let split = text.split('');
        split.forEach(function(e,i){
            clutter5 += `<div style="display:inline-block;">${e}</div>`
        })
        ref5.current.innerHTML = clutter5

        let text2=ref6.current.innerText
        let split2 = text2.split('');
        split2.forEach(function(e,i){
            clutter6 += `<div style="display:inline-block;">${e}</div>`
        })
        ref6.current.innerHTML = clutter6
        
        let text3 = ref7.current.innerText
        let split3 = text3.split('');
        split3.forEach(function(e,i){
            clutter7 += `<div style="display:inline-block;">${e}</div>`
        })
        ref7.current.innerHTML = clutter7
       
        let text4 = ref8.current.innerText
        let split4 = text4.split('');
        split4.forEach(function(e,i){
            clutter8 += `<div style="display:inline-block;">${e}</div>`
        })
        ref8.current.innerHTML = clutter8



        gsap.to('.text5 div', {
            duration:0.5,
            opacity:1,
            stagger:0.15,
            scrollTrigger:{
                trigger:'.scroll',
                scroller:'body'
            },
            onComplete:()=>{
                gsap.to('.text6 div', {
                    duration:0.5,
                    opacity:1,
                    stagger:0.15,
                    onComplete:()=>{
                        gsap.to('.text7 div', {
                            duration:0.5,
                            opacity:1,
                            stagger:0.15,
                            onComplete:()=>{
                                gsap.to('.text8 div', {
                                    duration:0.5,
                                    opacity:1,
                                    stagger:0.15,
                                   
                                  });
                            }
                            
                          
                          });
                    }
                  
                  });
            }
          
          });
        
  
          
         

            


              

        


    },[])
    
   
  return (
    <>
     <div className='left_custom_solution scroll'>
                         <div className='coding_div'>
                             <div className='coding_div_head_wrapper'>
                                 <div className='left_div'>
                                 {[circle1, circle2, circle3].map((e,i)=>{
                                     return(
                                         <>
                                         <div className='circle_div'>
                                         <img src={e}/>
                                     </div>
                                         </>
                                     )
                                 })}
                                   
                                 </div>
                                 <div className='right_div'>
                                     <img src={cross}/>
                                 </div>
                             </div>
                             <div className='coding_div_content_Wrapper'>
                             <p className='text5' ref={ref5} style={{
                                marginTop:'15px',
                                marginBottom:'20px',
                             }}>const data = null;</p>
                             <p className='text6' ref={ref6}>const xhr = new XMLHttpRequest();</p>
                             <p className='text7' ref={ref7} style={{
                            
                                marginBottom:'20px',
                             }}>xhr.withCredentials = true;</p>
                             <p className='text8' ref={ref8} style={{
                                marginBottom:'10px'
                             }}>xhr.addEventListener('readystatechange', function()({}
                                <br/>
                                'if (this.readyState === this.DONE)<br/>{
	                            '		console.log(this.responseText);'
	}'
    <br/>
                            ))</p>
                             </div>
                             
                         </div>
                     </div>  
    </>
  )
}

export default Coding2
