'use client'

import Image from 'next/image'
import styles from '@styles/header.module.css'
import SearchBar from './SearchBar'
import { useState } from 'react'

const Header = ({ setSearchParams, cities }) => {
  const [params, setParams] = useState({ city: '', guests: 0 })
  setSearchParams(params)
  // ToDo: Actualizar los searchParams
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
      <SearchBar citiesList={cities} setParams={setParams} />
    </header>
  )
}
export default Header
