import React from 'react'
import {Link,NavLink} from 'react-router-dom'
import Aos  from 'aos'
import '../components/About.css'
import Footer from '../components/Footer'
function about() {
  return (
    <div className='about' >
  
         <div className='about-header'>
          <div className='overlay'></div>

          <div className='content'>
            <h3>about</h3>
            <p>All you need to know about us</p>
          </div>
        </div>

        <div className='container about-body'>
              <div className='row'>
                <div className='col-12'>
                    <h1>what drives us</h1>
                    <p className='lorem'>lorem ipsum - dolor</p>
                </div>
                <div className='col-12 img-p-con'>
                    <img  src='https://i.pinimg.com/originals/a8/a5/c5/a8a5c50460f8e620525c5300f1b51398.jpg'/>
                    <p className='long-p'>The site provides you with information about famous personalities
                    such as actors or singers to get to know them more</p>
                </div>

              </div>
            </div>
    

    <Footer />
    </div>
  )
}

export default about