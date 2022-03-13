import React,{useEffect,useState} from 'react'
import '../components/Faq.css'
import $ from 'jquery'
import Footer from '../components/Footer'

function Faq() {

  const [toggle,setToggle] = useState(true) ;

  
  const   handleClick = ()=>   setToggle(toggle != toggle);

  useEffect(() => {


  /*    $('.faq .colps .colp  button').each(function(){

         $(this).on('click',function(){
          $('#colp-icon').toggleClass('fa-caret-down')

         })
      })*/

   
  
 

   
  }, [])
  
  return (
    <div className='faq'>
        <div className='faq-header'>
            <div className='overlay'></div>
            <div className='content'>
                <h1>faQ</h1>
                <p>faq page</p>
                </div>
            </div>

        <div className='asked'>
        <h3>Frequently Asked Questions</h3>
          </div>
    <div className='colps '>
     {/*<h3>Frequently Asked Questions</h3> */} 
  
     

<div  className='colp'>
            <p>
  <button class="btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample2" aria-expanded="false" aria-controls="collapseWidthExample" onClick={  handleClick}>
  Who is the most Oscar-winning actor?
 <i id='colp-icon' className={`fas  ${ toggle == true ?" fa-angle-right": " fa-angle-down"}`}></i>
  </button>
</p>
<div className='content' style={{minHeight: '120px'}}>
  <div class="collapse collapse-horizontal" id="collapseWidthExample2">
    <div class="card card-body" style={{width: '300px'}}>
    The most Oscar-winning actor is <span>daniel day lewis</span>

    </div>
  </div>
</div>
</div>

<div  className='colp '>
            <p>
  <button class="btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample" onClick={  handleClick}>
  How rich is michael jackson?
 <i id='colp-icon' className={`fas  ${ toggle == true ?" fa-angle-right": " fa-angle-down"}`}></i>
  </button>
</p>
<div className='content' style={{minHeight: '120px'}}>
  <div class="collapse collapse-horizontal" id="collapseWidthExample">
    <div class="card card-body" style={{width: '300px'}}>
    Michael Jackson net worth is <span>500000000$</span>

    </div>
  </div>
</div>
</div>



<div  className='colp '>
            <p>
  <button class="btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample3" aria-expanded="false" aria-controls="collapseWidthExample" onClick={  handleClick}>
  How old is Rowan Atkinson?
 <i id='colp-icon' className={`fas  ${ toggle == true ?" fa-angle-right": " fa-angle-down"}`}></i>
  </button>
</p>
<div className='content' style={{minHeight: '120px'}}>
  <div class="collapse collapse-horizontal" id="collapseWidthExample3">
    <div class="card card-body" style={{width: '300px'}}>
    Rowan Atkinson's age is <span> 67 years</span>

    </div>
  </div>
</div>
</div>



</div>

    <Footer />
    </div>
  )
}

export default Faq