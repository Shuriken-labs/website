import React from 'react'
import arrow from '../assets/arrow.svg'

const Button = ({bgColor}) => {
  return (
   <button  className={`flex gap-[10px] py-[25px] px-[35px] rounded-[25px] box-shadow ${bgColor} text-white`}
      >
      Join community 
       <img src={arrow} alt="" />
   </button>
  )
}

export default Button