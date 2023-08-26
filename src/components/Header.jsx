'use client'

import Image from 'next/image'
import styles from '@styles/header.module.css'
import { useState } from 'react'

const Header = ({ setSelectedCity }) => {
  const [selectedCitys, setSelectedCitys] = useState(0)

  const fff = () => {
    setSelectedCitys(selectedCitys + 1)
    setSelectedCity(selectedCitys)
    console.log(selectedCitys)
  }
  return (
    <header className={styles.header}>
      <figure className={styles.logo}>
        <Image src='/windbnb.svg' alt='Windbnb Logo' width='200' height='40' priority />
      </figure>
      <div className={styles.searchbar}>
        <div onClick={fff}>
          City
        </div>
        <div>
          Guests
        </div>
        <div>
          <Image src='/magnifying.svg' alt='Magnifying Glass' width='20' height='20' />
        </div>
      </div>
    </header>
  )
}
export default Header
