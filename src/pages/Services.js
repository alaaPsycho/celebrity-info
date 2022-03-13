import React from 'react'
import '../components/Services.css'
import Footer from '../components/Footer'

function Services() {
  return (
    <div className='services'>
    <div className='services-header'>
        <div className='overlay'></div>
        <div className='content'>
            <h1>services</h1>
            <p>services  page</p>
            </div>
        </div>

        <div className='container services-icon-app'>
                <div className='row'>
                    <div className='col-lg-4'>
                        <div className='content'>
                           <i  className='fas fa-infinity fa-5x' />
                            <h1 >Lots of famous characters</h1>
                            <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available. Wikipedia</p>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='content'>
                            <i  className='fas fa-user fa-5x' />
                            <h1 >without registration</h1>
                            <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available. Wikipedia</p>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='content'>
                            <i  className='fas fa-tachometer-alt fa-5x' />
                            <h1 >very fast  </h1>
                            <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available. Wikipedia</p>
                        </div>
                    </div>
                </div>
               
            </div>
            <Footer /> 
    </div>
  )
}

export default Services