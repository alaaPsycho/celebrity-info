import React,{useState} from 'react';
import {Link} from 'react-router-dom'
import Axios from 'axios'
import './Celebrity.css'
function Celebrity() {
    let [celebrity,setCelebrity] = useState('brad pitt')
    let [name,setName] = useState('prad pitt')
    let [nationality,setNationality] = useState('American')
    let [birthdy,setBerthdy] = useState('1963-12-18')
    let [age,setAge] = useState( 58 )
    let [gender,setGender] = useState('male')
    let [height,setHeight] = useState('1.80')
    let [isAlive,setIsAlive] = useState(true)
    let [netWorth,setNetWorth] = useState(' $300 million')
    let [occupation,setOccupation] = useState('actor')

    let [data,setData] = useState(true)

  let getData= (celebrity)=> Axios({
    method:'GET',
    url:`https://api.api-ninjas.com/v1/celebrity?name=${celebrity}`,
    headers: { 'X-Api-Key': '5EufIFcBjCHJLulV1V2HHA==L0QRbB3jgw95DjFA' }

  }).then(
    (response)=>{
      console.log(response) 
      setName(response.data[0].name)
      setNationality(response.data[0].nationality)
      setBerthdy(response.data[0].birthdy)
      setAge(response.data[0].age)
      setIsAlive(response.data[0].is_alive)
      setGender(response.data[0].gender)
      setHeight(response.data[0].height)
      setNetWorth(response.data[0].net_worth)
      setOccupation(response.data[0].occupation[0])
            

    
    })
    
   

  return (
    <>


        <div className='celebrity'>
           
                <div className='controls'>
                <input maxLength={'30'} type="text" placeholder='search  for a celebrity' onChange={(e)=>setCelebrity(e.target.value.toLowerCase())} />
                <button onClick={()=>{getData(celebrity == '' || undefined?null: celebrity);setData(data = false);}}>get information</button>
                </div>

     
               <div className='container box'>
                   <div className='row'>

                   

                        <div className='col-12'>
                        <p><strong>{celebrity + '  '} </strong><i class="fas fa-crown"></i></p>       
                        </div>

                        <div className='col-6'>
                        <p>nationality: <strong>{nationality}</strong></p>       
                        </div>

                      

                        <div className='col-6'>
                        <p>birthdy: <strong>{birthdy}</strong></p>       
                        </div>

                        <div className='col-6'>
                        <p>age: <strong>{age + ' years'}</strong></p>       
                        </div>

                        <div className='col-6'>
                        <p>gender: <strong>{gender}</strong></p>       
                        </div>

                        <div className='col-6'>
                        <p>height: <strong>{height +'cm'}</strong></p>       
                        </div> 
                        
                        <div className='col-6'>
                        <p>is alive: <strong>{isAlive == true ?'still alive': `died at age ${age + ' years'}`}</strong></p>       
                        </div>

                        <div className='col-6'>
                        <p>net worth: <strong>{netWorth + '$'}</strong></p>       
                        </div>
                        <div className='col-6'>
                        <p>occupation: <strong>{occupation}</strong></p>       
                        </div>



                        <div className='col-12 more-about'>
                        <p>more about <a  href={`${celebrity != 'matt leblanc'? 'https://en.wikipedia.org/wiki/' + celebrity.replace(' ', '_') :'https://en.wikipedia.org/wiki/Matt_LeBlanc' }`}>{celebrity}</a> </p>       
                        </div>

                   </div>
               </div>



            </div>
 


    </>
  );
}

export default Celebrity;
