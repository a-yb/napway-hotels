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
        animate={{ y: [-700, 0] }}
        transition={{ duration: 0.1, delay: 0.1 * idx }}
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
