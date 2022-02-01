import React from 'react'
import Link from 'next/link'

import styles from './HamburgerMenu.module.css'

function HamburgerMenu() {
  return (
    <div className={styles['hamburger-menu']}>
      <nav className={styles['menu']}>
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
    </div>
  )
}

export default HamburgerMenu
