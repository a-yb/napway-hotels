import Link from 'next/link'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import React, { useContext } from 'react'

import { AiOutlineInstagram } from 'react-icons/ai'

import { HiMenu } from 'react-icons/hi'

import styles from './Navbar.module.css'
import { MobileNavContext } from '../../context/MobileNavContext'

function Navbar() {
  const router = useRouter()
  const { toggleMenu } = useContext(MobileNavContext)

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
            <li
              className={
                styles['nav-item'] +
                ' ' +
                (router.pathname === '/rental-models' ? 'font-semibold' : '')
              }
            >
              <Link href={'/rental-models'}>
                <a>Rent</a>
              </Link>
            </li>
            <li
              className={
                styles['nav-item'] +
                ' ' +
                (router.pathname === '/models-for-sale' ? 'font-semibold' : '')
              }
            >
              <Link href={'/models-for-sale'}>
                <a>Buy</a>
              </Link>
            </li>
            <li
              className={
                styles['nav-item'] +
                ' ' +
                (router.pathname === '/about' ? 'font-semibold' : '')
              }
            >
              <Link href={'/about'}>
                <a>About Us</a>
              </Link>
            </li>
            <li
              className={
                styles['nav-item'] +
                ' ' +
                (router.pathname === '/contact' ? 'font-semibold' : '')
              }
            >
              <Link href={'/contact'}>
                <a>Contact</a>
              </Link>
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
        <nav className={styles['nav-mobile']}>
          <div className="nav-mobile-icon">
            <button onClick={toggleMenu}>
              <HiMenu size={24} />
            </button>
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
        </nav>
      </div>
    </header>
  )
}

export default Navbar
