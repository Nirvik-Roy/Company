import React from 'react'
import img from '../../assets/Group 1000004547.png'
import img2 from '../../assets/Group 1000004554.png'
import img3 from '../../assets/Group 1000004546.png'
import img4 from '../../assets/Group 1000004549.png'
import img5 from '../../assets/Group 1000004548.png'
import img6 from '../../assets/Group 1000004548 (1).png'
import img7 from '../../assets/Group 1000004550.png'
import img8 from '../../assets/Group 1000004550 (1).png'
import img9 from '../../assets/Group 1000004551.png'
import img10 from '../../assets/Group 1000004551 (1).png'
import img11 from '../../assets/Group 1000004507.png'
import img12 from '../../assets/Group 1000004507 (1).png'
import img13 from '../../assets/Group 1000004509.png'
import img14 from '../../assets/Group 1000004509 (1).png'
import img15 from '../../assets/Group 1000004553.png'
import img16 from '../../assets/Group 1000004553 (1).png'
import img17 from '../../assets/Group 1000004511.png'
import img18 from '../../assets/Group 1000004511 (1).png'
import img19 from '../../assets/Group 1000004513.png'
import img20 from '../../assets/Group 1000004513 (1).png'
import img21 from '../../assets/Group 1000004561.png'
import img22 from '../../assets/Group 1000004562.png'
import img23 from '../../assets/Group 1000004563.png'
import img24 from '../../assets/Group 1000004564.png'
import img25 from '../../assets/Group 1000004547 (1).png'
import img26 from '../../assets/Group 1000004547 (2).png'
const ModualSolutions = () => {
  return (
    <>
      <div className='modular_solutions_wrapper' style={{
        background:'rgb(245, 249, 252)',
        paddingTop:'40px'
      }}>
      <div className='uni_container'>
        <div className='modular_solutions_main'>
        <div className='modular_solutions_left'>
            <h4>Modual solutions</h4>
            <h3>Your label, our system- 
            Plug and play in a few hours</h3>
            <h6>
            Make investment products part of your offerings by 
leveraging the pre-built investment platform without 
needing to build it all yourself. Enable your users to
 invest without leaving your platform.
            </h6>
        </div>
        <div className='modular_solutions_right'>
          {[1,2,3,4,5,6,7,8,9,1,5,5,4,7,8,9,8,7,8,10,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1].map((e,i)=>{
            return(
                <>
                <div className='box'>
                {i===2 && <>
                    <img className='default' src={img3}/>
                    <div className='default_active'>
                    <img src={img4}/>
                    <p>Connect</p>
                    </div>
                </>}
                {i === 9 && <>
                    <img className='default' src={img5}/>
                    <div className='default_active'>
                    <img src={img6}/>
                    <p>Connect</p>
                    </div>
                </>}
                {i === 10 && <>
                    <img className='default' src={img7}/>
                    <div className='default_active'>
                    <img src={img8}/>
                    <p>Connect</p>
                    </div>
                </>}
                {i === 14 && <>
                    <img className='default' src={img9}/>
                    <div className='default_active'>
                    <img src={img10}/>
                    <p>Connect</p>
                    </div>
                </>}
                {i === 15 && <>
                    <img className='default' src={img11}/>
                    <div className='default_active'>
                    <img src={img12}/>
                    <p>Connect</p>
                    </div>
                </>}
                {i === 17 && <>
                    <img className='default' src={img13}/>
                    <div className='default_active'>
                    <img src={img14}/>
                    <p>Connect</p>
                    </div>
                </>}
                {i === 21 && <>
                    <img className='default' src={img15}/>
                    <div className='default_active'>
                    <img src={img16}/>
                    <p>Connect</p>
                    </div>
                </>}
                {i === 28 && <>
                    <img className='default' src={img17}/>
                    <div className='default_active'>
                    <img src={img18}/>
                    <p>Connect</p>
                    </div>
                </>}
                {i === 29 && <>
                    <img className='default' src={img19}/>
                    <div className='default_active'>
                    <img src={img20}/>
                    <p>Connect</p>
                    </div>
                </>}
                {i === 31 && <>
                    <img className='default' src={img21}/>
                    <div className='default_active'>
                    <img src={img22}/>
                    <p>Connect</p>
                    </div>
                </>}
                {i === 35 && <>
                    <img className='default' src={img23}/>
                    <div className='default_active'>
                    <img src={img24}/>
                    <p>Connect</p>
                    </div>
                </>}
                {i === 36 && <>
                    <img className='default' src={img25}/>
                    <div className='default_active'>
                    <img src={img26}/>
                    <p>Connect</p>
                    </div>
                </>}
                    {i === 18 && <>
                        <img src={img}/>
                        <p>Connect</p>
                    </> }
                    {i === 27 && <>
                        <img src={img2}/>
                        <p>Terminal</p>
                    </>}
                </div>
                </>
            )
          })  }
        </div>
        </div>
      </div>
        
      </div>
    </>
  )
}

export default ModualSolutions
