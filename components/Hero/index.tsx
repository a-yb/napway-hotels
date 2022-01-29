import Image from 'next/image'
import React from 'react'

export default function Hero() {
  return (
    <div>
      <div className="global-wrapper">
        <Image
          src="/static/imgs/models/dormy/exterior-2.png"
          height={300}
          width={600}
          alt="asdasd"
        />
      </div>
    </div>
  )
}
