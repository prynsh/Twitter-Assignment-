import Image from 'next/image'
import React from 'react'
import tags from "../assets/Tags.png"

const Figma = () => {
  return (
    <div>
      <Image src={tags} alt='tags'/>
    </div>
  )
}

export default Figma
