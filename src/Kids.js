import React from 'react';
import "./Kids.css";
import kids from "./kids.jpg"

const Kids = () => {
  return (
    <div className='kidspic'>
        <div>
            <img src={kids} alt="img" className='img'/>
            <p>Name : </p>
            <p>Rs : 3,500</p>
        </div>

        <div>
            <img src={kids} alt="img" className='img'/>
            <p>Name : </p>
            <p>Rs : 3,500</p>
        </div>

        <div>
            <img src={kids} alt="img" className='img'/>
            <p>Name : </p>
            <p>Rs : 3,500</p>
        </div>

        <div>
            <img src={kids} alt="img" className='img'/>
            <p>Name : </p>
            <p>Rs : 3,500</p>
        </div>

        <div>
            <img src={kids} alt="img" className='img'/>
            <p>Name : </p>
            <p>Rs : 3,500</p>
        </div>

        <div>
            <img src={kids} alt="img" className='img'/>
            <p>Name : </p>
            <p>Rs : 3,500</p>
        </div>
      
    </div>
  )
}

export default Kids
