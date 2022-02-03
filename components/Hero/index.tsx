import { motion } from 'framer-motion'
import React from 'react'

import styles from './Hero.module.css'

export default function Hero() {
  return (
    <div className={styles['background']}>
      <div className="global-wrapper font-base text-slate-200 text-4xl text-center pt-[5%]">
        <motion.h2
          className={styles['hero-text']}
          animate={{ x: [-200, 100, 0] }}
          transition={{ duration: 2 }}
        >
          True Address For A Nap
        </motion.h2>
      </div>
    </div>
  )
}
