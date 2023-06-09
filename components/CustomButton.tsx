"use client"

import Image from 'next/image'

const CustomButton = () => {
  return (
    <button
    disabled={false}
    type={"button"}
    className={`custom-btn`}
    onClick={()=>{}}
    >
    <span
    className={`flex-1`}
    >
        Title
    </span>
    </button>
  )
}

export default CustomButton