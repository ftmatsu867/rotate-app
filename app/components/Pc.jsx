import Image from 'next/image'
import React from 'react'
import pcImage from "../../public/pc.jpg"
import "../styles/PcArea.scss"
const Pc = () => {
  return (
    <div className='pc'>
        <Image src={pcImage} objectFit={"cover"} layout='fill'/>
    </div>
  )
}

export default Pc