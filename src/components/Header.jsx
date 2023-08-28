'use client'

import Image from 'next/image'
import styles from '@styles/header.module.css'
import SearchBar from './SearchBar'
// import { useState } from 'react'

const Header = ({ setSelectedCity, citys }) => {
  // const [selectedCitys, setSelectedCitys] = useState(0)

  // const fff = () => {
  //   setSelectedCitys(selectedCitys + 1)
  //   setSelectedCity(selectedCitys)
  //   console.log(selectedCitys)
  // }
  return (
    <header className={styles.header}>
      <figure className={styles.logo}>
        <Image src='/windbnb.svg' alt='Windbnb Logo' width='200' height='40' priority />
      </figure>
      <SearchBar />
    </header>
  )
}
export default Header
