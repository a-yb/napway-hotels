import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { motion } from 'framer-motion'

import styles from './ChapterNav.module.css'

export type ChapterNavItem = {
  link: string
  icon: string
  label: string
}

interface ChapterNapProps {
  models: ChapterNavItem[]
}

function ChapterNav(props: ChapterNapProps) {
  return (
    <nav className={styles['chapternav']}>
      <motion.ul
        animate={{ x: [200, 0] }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className={styles['chapternav-items']}
      >
        {props.models.map((model, i) => (
          <li className={styles['chapternav-item']} key={model.label}>
            <Link href={model.link} passHref>
              <div className={styles['chapternav-link']}>
                <Image
                  src={model.icon}
                  alt={model.label}
                  height={72}
                  width={128}
                  className={styles['chapternav-icon']}
                />
                <h3 className={styles['chapternav-label']}>{model.label}</h3>
              </div>
            </Link>
          </li>
        ))}
      </motion.ul>
    </nav>
  )
}

export default ChapterNav
