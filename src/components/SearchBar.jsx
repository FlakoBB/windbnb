'use client'

import Image from 'next/image'
import styles from '@styles/searchBar.module.css'
import { useRef } from 'react'

const SearchBar = () => {
  const cityRef = useRef()
  const guestsRef = useRef()

  const handleDropdown = () => {
    console.log('click')
  }

  return (
    <aside className={styles.container}>
      <div className={styles.searchBar}>
        <div onClick={handleDropdown} ref={cityRef} className={`${styles.searchBar__city} ${styles.searchBar__gen}`}>
          <span>City</span>
        </div>
        <div onClick={handleDropdown} ref={guestsRef} className={`${styles.searchBar__guests} ${styles.searchBar__gen}`}>
          <span>Guests</span>
        </div>
        <div className={`${styles.searchBar__btn} ${styles.searchBar__gen}`}>
          <button>
            <Image src='/magnifying.svg' alt='Magnifying Glass' width='20' height='20' />
          </button>
        </div>
      </div>
      <div className={styles.drop}>
        {/* // * City Section */}
        <div className={`${styles.dropSection} ${styles.citySection}`}>
          City Section
        </div>
        {/* // * Guests Setion */}
        <div className={`${styles.dropSection} ${styles.guestsSection}`}>
          Guests Section
        </div>
      </div>
    </aside>
  )
}
export default SearchBar
