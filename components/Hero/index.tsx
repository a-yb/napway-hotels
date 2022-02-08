import { motion } from 'framer-motion'
import React, { useState } from 'react'

import styles from './Hero.module.css'

export default function Hero() {
  const heroMsg = 'True Address For A Nap'

  const hero = Array.from(heroMsg).map((val, idx) => {
    return (
      <motion.p
        className={styles['hero-text__char']}
        key={idx}
        animate={{ y: [-500, -400, -300, -200, -50, 0] }}
        transition={{ duration: 0.055, delay: 0.075 * idx, ease: 'easeIn' }}
      >
        {val === ' ' ? <>&nbsp;</> : val}
      </motion.p>
    )
  })

  return (
    <div className={styles['background']}>
      <div className="global-wrapper font-base text-slate-200 text-4xl text-center pt-[5%]">
        <h2 className={styles['hero-text']}>{hero}</h2>
      </div>
    </div>
  )
}
