import React from 'react'
import pic from "./pic.jpg"
import "./Men.css"
// import MenShirts from './MenShirts'

const Men = () => {
  // const [click,setClick]=useState(false)
  // const handleclickmenu=()=>{
  //   setClick(!click)
  // }
  return (
    // <div className='menmenu' onClick={handleclickmenu}>
      
    //   <>
    //     <div>
    //     <h4>shirts</h4>
    //     <p>formal shirts</p>
    //     <p>casual shirts</p>
    //     <p>t-shirts</p>
    //   </div>

    //   <div>
    //     <h4>jeans pants</h4>
    //     <p>fdkljds</p>
    //     <p>fjifhue</p>
    //     <p>urehqiu</p>
    //   </div>
    //   <div>
    //     <h4>formal pants</h4>
    //     <p>fdkljds</p>
    //     <p>fjifhue</p>
    //     <p>urehqiu</p>
    //   </div>
    //   <div>
    //     <h4>jeans pants</h4>
    //     <p>fdkljds</p>
    //     <p>fjifhue</p>
    //     <p>urehqiu</p>
    //   </div>
    //   <div>
    //     <h4>jeans pants</h4>
    //     <p>fdkljds</p>
    //     <p>fjifhue</p>
    //     <p>urehqiu</p>
    //   </div>
    //   <div>
    //     <h4>jeans pants</h4>
    //     <p>fdkljds</p>
    //     <p>fjifhue</p>
    //     <p>urehqiu</p>
    //   </div>
    //   </>
      
    // </div>
    // <div className='div'>
    //   <div className='mendiv'>
    //     <img src={pic} alt="Img" className="img" onClick={handleclickmenu}/>
    //     <p>Name : LUXURAZI Blazers
    //       <br></br>
    //       Rs : 4,999      
    //     </p>
    //     {/* <p>Rs : 4,999</p> */}
    //   </div>

    //   <div className='mendiv'>
    //     <img src={pic} alt="Img" className="img"/>
    //     <p>Name : LUXURAZI Blazers
    //     <br></br>
    //       Rs : 4,999  
    //     </p>
        
    //   </div>

    //   <div className='mendiv'> 
    //     <img src={pic} alt="Img" className="img"/>
    //     <p>Name : LUXURAZI Blazers
    //     <br></br>
    //       Rs : 4,999  
    //     </p>
       
    //   </div>
    <div id='maindiv'>

      <div className='mendiv'>
        <img src={pic} alt="Img" className="img"/>
        <p>Name : LUXURAZI Blazers
        <br></br>
          Rs : 4,999  
        </p>
        
      </div>

      <div className='mendiv'>
        <img src={pic} alt="Img" className="img" />
        <p>Name : LUXURAZI Blazers
        <br></br>
          Rs : 4,999  
        </p>
        
      </div>

      <div className='mendiv'>
        <img src={pic} alt="Img" className="img" />
        <p>Name : LUXURAZI Blazers
        <br></br>
          Rs : 4,999  
        </p>         
      </div>    
  </div>
  )
}

export default Men
