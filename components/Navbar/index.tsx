import Link from 'next/link'
import { motion } from 'framer-motion'
import React, { useState, useEffect, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'

import { AiOutlineInstagram, AiOutlineClose } from 'react-icons/ai'
import { BiMenuAltRight } from 'react-icons/bi'

import styles from './Navbar.module.css'
import { useRouter } from 'next/router'

type NumberOrUndefined = number | undefined

type widthAndHeight = {
  width: NumberOrUndefined
  height: NumberOrUndefined
}

function Navbar() {
  const router = useRouter()
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  const [size, setSize] = useState<widthAndHeight>({
    width: undefined,
    height: undefined,
  })

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (size.width! > 768 && isOpen) {
      setIsOpen(false)
    }
  }, [size.width, isOpen])

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto "
          onClose={closeModal}
        >
          <div className="min-h-screen">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="h-screen overflow-hidden transition-all transform bg-black text-white">
                <nav className={styles.mobile_nav}>
                  <div className={styles.close_button} onClick={closeModal}>
                    <AiOutlineClose size={24} />
                  </div>
                  <ul className={styles.mobile_nav_items}>
                    <li className={styles.mobile_nav_item}>
                      <a
                        className={styles.mobile_nav_item__link}
                        href={'/rental-models'}
                        onClick={closeModal}
                      >
                        Rent
                      </a>
                    </li>
                    <li className={styles.mobile_nav_item}>
                      <a
                        className={styles.mobile_nav_item__link}
                        href={'/models-for-sale'}
                        onClick={closeModal}
                      >
                        Buy
                      </a>
                    </li>
                    <li className={styles.mobile_nav_item}>
                      <a
                        className={styles.mobile_nav_item__link}
                        href={'/about'}
                        onClick={closeModal}
                      >
                        About Us
                      </a>
                    </li>
                    <li className={styles.mobile_nav_item}>
                      <a
                        className={styles.mobile_nav_item__link}
                        href={'/contact'}
                        onClick={closeModal}
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
      <header className={styles.header}>
        <div className={`global-wrapper h-full`}>
          <nav className={styles.nav}>
            <div className={styles.toggle_button} onClick={openModal}>
              <BiMenuAltRight size={24} />
            </div>
            <Link href="/" passHref>
              <h1 className={styles.logo}>
                <span className="text-primary-300">NAPWAY</span> HOTELS
              </h1>
            </Link>

            <ul className={styles.nav_items}>
              <li className={styles.nav_item}>
                <a
                  className={`${styles.nav_item__link} ${
                    router.pathname === '/rental-models' ? styles.active : ''
                  }`}
                  href={'/rental-models'}
                >
                  Rent
                </a>
              </li>
              <li className={styles.nav_item}>
                <a
                  className={`${styles.nav_item__link} ${
                    router.pathname === '/models-for-sale' ? styles.active : ''
                  }`}
                  href={'/models-for-sale'}
                >
                  Buy
                </a>
              </li>
              <li className={styles.nav_item}>
                <a
                  className={`${styles.nav_item__link} ${
                    router.pathname === '/about' ? styles.active : ''
                  }`}
                  href={'/about'}
                >
                  About Us
                </a>
              </li>
              <li className={styles.nav_item}>
                <a
                  className={`${styles.nav_item__link} ${
                    router.pathname === '/contact' ? styles.active : ''
                  }`}
                  href={'/contact'}
                >
                  Contact
                </a>
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
        </div>
      </header>
    </>
  )
}

export default Navbar
