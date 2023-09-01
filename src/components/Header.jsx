'use client'

import Image from 'next/image'
import styles from '@styles/header.module.css'
import SearchBar from './SearchBar'
import { useState } from 'react'

const Header = ({ setSearchParams, cities }) => {
  const [params, setParams] = useState({ city: '', guests: 0 })
  setSearchParams(params)
  return (
    <header className={styles.header}>
      <figure className={styles.logo}>
        <Image src='/windbnb.svg' alt='Windbnb Logo' width='200' height='40' priority />
      </figure>
      <SearchBar citiesList={cities} setParams={setParams} />
    </header>
  )
}
export default Header
