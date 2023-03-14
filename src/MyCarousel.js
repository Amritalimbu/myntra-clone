
import React from 'react'
import { Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

import "./MyCarousel.css"
// import pic1 from "./'/images/pic1.jpg"
// import pic2 from "./images/pic2.jpg"
// import pic3 from "./images/pic3.jpg"
// import pic4 from "./images/pic4.jpg"

const MyCarousel = () => {  
  return (
    // <>
      <Carousel slide={false}>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://www.pixelstalk.net/wp-content/uploads/2016/07/3840x2160-Images-Free-Download.jpg"
            // src="holder.js/800x400?text=First slide&bg=373940"
            alt="First slide"
            />
            <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://th.bing.com/th/id/OIP.kGmuLIMjc1TVVqyC43yAZgHaEK?pid=ImgDet&rs=1"
            alt="Second slide"
            />

            <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://th.bing.com/th/id/OIP.U0SfqHcCr4A3TEW4cIDGOQHaEI?pid=ImgDet&rs=1"
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://th.bing.com/th/id/OIP.M9AsZ7Sm6Qq-LXpY92Tt2AHaEK?w=303&h=180&c=7&r=0&o=5&pid=1.7"
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3>Forth slide label</h3>
            <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://th.bing.com/th/id/OIP.r_M8trpEUbkUA93s4pTwiwHaEK?pid=ImgDet&rs=1"
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3>Fifth slide label</h3>
            <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
  )
}

export default MyCarousel
