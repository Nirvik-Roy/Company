import React, { useEffect, useRef, useState } from 'react'
import circle1 from '../../assets/Ellipse 201.png'
import circle2 from '../../assets/Ellipse 202.png'
import circle3 from '../../assets/Ellipse 203.png'
import cross from '../../assets/proicons_cancel.png'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const Coding = () => {
    let ref1 = useRef()
    let ref2 = useRef()
    let ref3 = useRef()
    let ref4 = useRef()
    
    
    let clutter1 = ''
    let clutter2 = ''
    let clutter3 = ''
    let clutter4 = ''

    useEffect(() => {
        let text = ref1.current.innerText
        let split = text.split('');
        split.forEach(function (e, i) {
            clutter1 += `<div style="display:inline-block;">${e}</div>`
        })
        ref1.current.innerHTML = clutter1

        let text2 = ref2.current.innerText
        let split2 = text2.split('');
        split2.forEach(function (e, i) {
            clutter2 += `<div style="display:inline-block;">${e}</div>`
        })
        ref2.current.innerHTML = clutter2

        let text3 = ref3.current.innerText
        let split3 = text3.split('');
        split3.forEach(function (e, i) {
            clutter3 += `<div style="display:inline-block;">${e}</div>`
        })
        ref3.current.innerHTML = clutter3

        let text4 = ref4.current.innerText
        let split4 = text4.split('');
        split4.forEach(function (e, i) {
            clutter4 += `<div style="display:inline-block;">${e}</div>`
        })
        ref4.current.innerHTML = clutter4



        gsap.to('.text1 div', {
            duration: 0.5,
            opacity: 1,
            stagger: 0.15,
            scrollTrigger: {
                trigger: '.left_custom_solution',
                scroller: 'body',
            },
            onComplete: () => {
                gsap.to('.text2 div', {
                    duration: 0.5,
                    opacity: 1,
                    stagger: 0.15,
                    onComplete: () => {
                        gsap.to('.text3 div', {
                            duration: 0.5,
                            opacity: 1,
                            stagger: 0.15,

                            onComplete: () => {
                                gsap.to('.text4 div', {
                                    duration: 0.5,
                                    opacity: 1,
                                    stagger: 0.15,

                                });
                            }
                        });
                    }

                });
            }
        });



    }, [])


    return (
        <>
            <div className='left_custom_solution'>
                <div className='coding_div'>
                    <div className='coding_div_head_wrapper'>
                        <div className='left_div'>
                            {[circle1, circle2, circle3].map((e, i) => {
                                return (
                                    <>
                                        <div className='circle_div'>
                                            <img src={e} />
                                        </div>
                                    </>
                                )
                            })}

                        </div>
                        <div className='right_div'>
                            <img src={cross} />
                        </div>
                    </div>
                    <div className='coding_div_content_Wrapper'>
                        <p className='text1' ref={ref1} style={{
                            marginTop: '15px',
                            marginBottom: '20px',
                        }}>const data = null;</p>
                        <p className='text2' ref={ref2}>const xhr = new XMLHttpRequest();</p>
                        <p className='text3' ref={ref3} style={{

                            marginBottom: '20px',
                        }}>xhr.withCredentials = true;</p>
                        <p className='text4' ref={ref4} style={{
                            marginBottom: '10px'
                        }}>xhr.addEventListener('readystatechange', function()({ }
                            <br />
                            'if (this.readyState === this.DONE)<br />{
                                '		console.log(this.responseText);'
                            }'
                            <br />
                            ))</p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Coding
