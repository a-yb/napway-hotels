import router from 'next/router'
import Link from 'next/link'
import React from 'react'

import { motion } from 'framer-motion'

import { AiOutlineInstagram } from 'react-icons/ai'

import styles from './Navbar.module.css'

function Navbar() {
  return (
    <header className="h-[44px] w-screen bg-gray-900 text-white">
      <div className="global-wrapper h-full">
        <nav className="flex items-center h-full mx-5">
          <Link href="/" passHref>
            <h1 className="font-trajan-pro-bold text-xl cursor-pointer">
              <span className="text-primary-400">NAPWAY</span>HOTELS
            </h1>
          </Link>

          <ul className="flex flex-grow gap-10 justify-center">
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
              className="hover:scale-125"
            />
          </motion.a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
