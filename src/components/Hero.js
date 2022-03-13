import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import Aos  from 'aos'
import 'aos/dist/aos.css'
import './Hero.css'

function Hero() {
    useEffect(()=>{
        Aos.init({duration:2000})
    },[])
  return (
    <div className='hero' >
        <div className='hero-bg'>
            <div className='content'>
                <div className='h3-app' data-aos='slide-up'>
                    <h3>celebrity information</h3>
                </div>
                <div className='h1-app' data-aos='slide-right'>
                    <h1>celebrity</h1>
                </div>
                <div className='button-app' data-aos='slide-left'>
                    <button>coming soon</button>
                </div>
                <div className='p-app' data-aos='slide-down'>
                    <p><a href=''>show in github</a></p>
                </div>
                
                <div className='i-app' >
                <Link to=''><i class="fas fa-arrow-alt-circle-down fa-5x"></i></Link>
                </div>
            </div>

           
        </div>
    </div>
  )
}

export default Hero