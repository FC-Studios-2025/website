import Lottie from 'lottie-react'
import LottieAnimation from "../assets/LottieAnimation.json"
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
        <div>
            <hr />
        </div>
        <div className='flex justify-around p-8'>
            <div>
              <Link to='/testimonials' className="hover:text-teal-400 transition-colors">Testimonials</Link>
            </div>
            <div>
              <Link to='/about' className="hover:text-teal-400 transition-colors">About Us</Link>
            </div>
            <div>Our Works</div>
        </div>
        {/* <div>
            <Lottie animationData={LottieAnimation} />
        </div> */}
    </div>
  )
}

export default Footer