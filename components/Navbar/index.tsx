import Link from 'next/link'
import React, { useState } from 'react'

import { motion } from 'framer-motion'

import { AiOutlineInstagram } from 'react-icons/ai'

import styles from './Navbar.module.css'

function Navbar() {
  const [MenuIsActive, setMenuIsActive] = useState(false)

  return (
    <header className={styles['navbar']}>
      <div className="global-wrapper h-full">
        <nav className={styles['nav-desktop']}>
          <Link href="/" passHref>
            <h1 className={styles['logo']}>
              <span className="text-primary-300">NAPWAY</span> HOTELS
            </h1>
          </Link>

          <ul className={styles['nav-items']}>
            <li className={styles['nav-item']}>
              <Link href={'/rental-models'}>Rental Models</Link>
            </li>
            <li className={styles['nav-item']}>
              <Link href={'/models-for-sale'}>Models For Sale</Link>
            </li>
            <li className={styles['nav-item']}>
              <Link href={'/about'}>About Us</Link>
            </li>
            <li className={styles['nav-item']}>
              <Link href={'/contact'}>Contact</Link>
            </li>
          </ul>
          <motion.a
            animate={{ scale: [1.75, 1.25, 1.75, 1], rotate: '360deg' }}
            transition={{ duration: 2 }}
            href="https://www.instagram.com/napwayofficial"
            target={'_blank'}
            rel="noreferrer"
          >
            <AiOutlineInstagram
              fill="#fff"
              size={24}
              className="hover:scale-125 hover:rotate-12 transition-transform duration-300"
            />
          </motion.a>
        </nav>
        {/* <nav className={styles['nav-mobile']}>
          <div className="nav-mobile-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 8h16M4 16h16"
              />
            </svg>
          </div>
          <Link href="/" passHref>
            <h1 className={styles['logo']}>
              <span className="text-primary-300">NAPWAY</span> HOTELS
            </h1>
          </Link>
          <motion.a
            animate={{ scale: [1.75, 1.25, 1.75, 1], rotate: '360deg' }}
            transition={{ duration: 2 }}
            href="https://www.instagram.com/napwayofficial"
            target={'_blank'}
            rel="noreferrer"
          >
            <AiOutlineInstagram
              fill="#fff"
              size={24}
              className="hover:scale-125 hover:rotate-12 transition-transform duration-300"
            />
          </motion.a>
        </nav> */}
      </div>
    </header>
  )
}

export default Navbar
