import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import circle from '../assets/circle.png'
import thrive from '../assets/thrive.png'
import thrive1 from '../assets/thrive1.png'
import button1 from '../assets/button1.png'
import innovate from '../assets/Innovate.png'
import { IoMdMenu } from "react-icons/io";






const Hero = () => {
    const ImageSwitcher = () => {
        const images = [thrive, thrive1, innovate];
        const [currentIndex, setCurrentIndex] = useState(0);
      
        useEffect(() => {
          const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
          }, 1000);
      
          return () => clearInterval(interval); // Proper cleanup
        }, []);
      
        return <img src={images[currentIndex]} alt="Switching Image"  />;
      };
    
    
   

  return (
    
       

    <div className='relative text-left space-y-5 px-44 pt-16'>
        <h1 className='font-bold font-sans text-8xl leading-normal text-[#E0E0E0] text-left '> 
            Empowering
            <span className='text-[#E0E0E066]'> Communities </span>to
        </h1>
        <img src={circle} alt="logo-circle" className='absolute top-12 left-[882px]' />
        <div className='flex flex-col md:flex-row items-center justify-center lg:justify-start'>
        <ImageSwitcher />
           <h1 className='font-bold font-sans text-8xl leading-normal text-[#E0E0E0]'>in Web3</h1>
        </div>
        <p className='font-semibold font-sans text-[20px] leading-[100%] text-[#E0E0E0]'>Your gateway to blockchain education, insights, and <br /> real-world innovation.</p>
        <button className='py-[25px] px-[35px] bg-[#662D91] rounded-[25px] '>
            Join Community
        </button>
           </div>
    
   
  )
}

export default Hero


