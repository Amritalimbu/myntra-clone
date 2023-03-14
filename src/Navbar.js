import React, { useState } from 'react'
import "./Navbar.css"
import Men from './Men';
import { FaSearch } from 'react-icons/fa';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Navbar() {
  const [item,setItem]=useState(false);
  const hendleMenMenu=()=>{
    setItem(()=>{
      if(!item){
        return(
          <Men /> 
        )
      }else{
        return(
          console.log("error")
        )
      }
    })
  }
  return (
    <div>
      <nav className="nav">
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd0G-Ymq1J72RmnGHmPQyLZgY68-ZAWSywjA&usqp=CAU"
          alt="img" id="myntraimg"/>
        </div>
          <a className="a" href='/Men'onClick={hendleMenMenu}><b>MEN</b></a>
        <div>
          <a className="a" href='/Women' ><b>WOMEN</b></a>
        </div>

        <div>
          <a className="a" href='/Kids'><b>KIDS</b></a>
        </div>

        <div>
          <a className="a" href='/Homeliving' id="homeliving"><b>HOME & LIVING</b></a>
        </div>

        <div>
          <a className="a" href='/Beauty' id="beauty"><b>BEAUTY</b></a>
        </div>

        <div className='searchinput'>
          <button id="searchbar"><FaSearch/></button>
          <input id="input" placeholder='Search for products, brands and more' ></input>
        </div>

        <div>
          <a className="a" href='/Beauty'><b>Profile</b></a>
        </div>

        <div>
          <a className="a" href='/Beauty' id="wistlist"><b>Wishtlist</b></a>
        </div>

        <div>
          <a className="a" href='/Beauty' id="bag"><b>Bag</b></a>
        </div>

      </nav>
    </div>
  )
}

export default Navbar
