import React from 'react'
import {Link,NavLink} from 'react-router-dom'
import './Footer.css'
function Footer() {
  return (
    <div className='footer'>
        <div className='container'>
            <div className='row'>

            <div className='col-12 links-app'>
                <Link className='link' to='/'>home</Link>      
                <Link  className='link' to='/about'>about</Link>
                 <Link  className='link' to='/services'>services</Link>
                    <Link  className='link' to='/faq'>faQ</Link>
                </div>


                <div className='col-12 content-app'>
                    
                    <div className='content'>
                        <h3>contact Us</h3>
                        <a href='#'>
                        <i class="fas fa-phone fa-2x"></i>
                        <p>027753696</p>
                            </a>

                            <a href='#'>
                            <i class="fas fa-at fa-2x"></i>
                        <p>alaaedine62@gmail.com</p>
                            </a>   
                    </div>

                </div>

              

                <div className='col-12 icons-app'>
                        <a href='https://www.facebook.com/alaa.edin.1004/'><i class="fab fa-facebook fa-2x"></i></a>
                        <a href='https://alaaedine62@gmail.com'><i class="fab fa-google fa-2x"></i></a>
                        <a href='https://github.com/taharAlaa'><i class="fab fa-github fa-2x"></i></a>
                        <a href='https://www.instagram.com/psychoxunknown/'><i class="fab fa-instagram fa-2x"></i></a>
                        <a href='#'><i class="fab fa-twitter fa-2x"></i></a>

                </div>

          
            </div>
        </div>

        <div className='copy-right'>
                     <p>created by <span>alaa tahar </span>| all right reserved&copy;</p>
                     <p>Designed in  year 2021-2022</p>
                    </div>

    </div>
  )
}

export default Footer