import { motion } from 'framer-motion'
import React, { useContext } from 'react'
import Link from 'next/link'

import styles from './HamburgerMenu.module.css'
import { HamburgeMenuContext } from '../../context/HamburgerMenuContext'

import { HiX } from 'react-icons/hi'

const variants = {
  open: {
    height: '100%',
  },
  collapsed: { height: 0 },
}

function HamburgerMenu() {
  const { isActive, toggleMenu } = useContext(HamburgeMenuContext)!
  return (
    <motion.div
      variants={variants}
      inherit={false}
      initial={isActive ? 'open' : 'collapsed'}
      animate={isActive ? 'open' : 'collapsed'}
      transition={{
        ease: 'linear',
        duration: 0.45,
      }}
      className={styles['hamburger-menu'] + ' ' + (isActive ? '' : 'hidden')}
    >
      <nav className={styles['menu']}>
        <button
          className={styles['menu-close-btn']}
          onClick={() => {
            toggleMenu()
          }}
        >
          <HiX className={styles['menu-close-btn__icon']} size={24} />
        </button>
        <ul className={styles['menu-items']}>
          <li className={styles['menu-item']}>
            <Link href={'/rental-models'}>Rental Models</Link>
          </li>
          <li className={styles['menu-item']}>
            <Link href={'/models-for-sale'}>Models For Sale</Link>
          </li>
          <li className={styles['menu-item']}>
            <Link href={'/about'}>About Us</Link>
          </li>
          <li className={styles['menu-item']}>
            <Link href={'/contact'}>Contact</Link>
          </li>
        </ul>
      </nav>
    </motion.div>
  )
}

export default HamburgerMenu
