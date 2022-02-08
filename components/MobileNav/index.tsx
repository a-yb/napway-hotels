import Link from 'next/link'
import { useContext, useState } from 'react'
import { HiX } from 'react-icons/hi'
import { motion } from 'framer-motion'

import styles from './MobileNav.module.css'
import { MobileNavContext } from '../../context/MobileNavContext'

function MobileNav() {
  const { isActive, toggleMenu } = useContext(MobileNavContext)

  return (
    <>
      {isActive && (
        <>
          <div className="relative">
            <HiX
              size={32}
              className={styles.mobileNavCloseBtn}
              onClick={toggleMenu}
            />
          </div>
          <motion.nav
            className={
              isActive ? `${styles.mobileNav} active` : styles.mobileNav
            }
          >
            <ul className={styles.mobileNavItems}>
              <li className={styles.mobileNavItem}>
                <Link href={'/rental-models'}>Rent</Link>
              </li>
              <li className={styles.mobileNavItem}>
                <Link href={'/models-for-sale'}>Buy</Link>
              </li>
              <li className={styles.mobileNavItem}>
                <Link href={'/about'}>About</Link>
              </li>
              <li className={styles.mobileNavItem}>
                <Link href={'/contact'}>Contact</Link>
              </li>
            </ul>
          </motion.nav>
        </>
      )}
    </>
  )
}

export default MobileNav
