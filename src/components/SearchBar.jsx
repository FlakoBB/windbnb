'use client'

import Image from 'next/image'
import styles from '@styles/searchBar.module.css'
import { useEffect, useRef, useState } from 'react'

const SearchBar = () => {
  const cityRef = useRef(null)
  const guestsRef = useRef(null)
  const dropRef = useRef(null)
  const citySectionRef = useRef(null)
  const guestsSectionRef = useRef(null)

  const [adultsGuests, setAdultsGuests] = useState(0)
  const [childrenGuests, setChildrenGuests] = useState(0)
  const [totalGuests, setTotalGuests] = useState(0)

  useEffect(() => {
    console.log(`Adults: ${adultsGuests}`)
    console.log(`Children: ${childrenGuests}`)
    console.log(`Total: ${totalGuests}`)
  }, [totalGuests])

  const handleDropdown = (button) => {
    const city = cityRef.current
    const guests = guestsRef.current
    const drop = dropRef.current
    const citySection = citySectionRef.current
    const guestsSection = guestsSectionRef.current

    switch (button) {
      case cityRef:
        if (!city.classList.contains(styles.open) && !guests.classList.contains(styles.open)) {
          city.classList.add(styles.open)
          drop.style.display = 'block'
          citySection.style.display = 'flex'
        } else if (guests.classList.contains(styles.open) && !city.classList.contains(styles.open)) {
          guests.classList.remove(styles.open)
          city.classList.add(styles.open)
          guestsSection.style.display = 'none'
          citySection.style.display = 'flex'
        } else {
          city.classList.remove(styles.open)
          drop.style.display = 'none'
          citySection.style.display = 'none'
        }
        break
      case guestsRef:
        if (!guests.classList.contains(styles.open) && !city.classList.contains(styles.open)) {
          guests.classList.add(styles.open)
          drop.style.display = 'block'
          guestsSection.style.display = 'flex'
        } else if (city.classList.contains(styles.open) && !guests.classList.contains(styles.open)) {
          city.classList.remove(styles.open)
          guests.classList.add(styles.open)
          citySection.style.display = 'none'
          guestsSection.style.display = 'flex'
        } else {
          guests.classList.remove(styles.open)
          drop.style.display = 'none'
          guestsSection.style.display = 'none'
        }
        break
    }
  }

  const [selectedCity, setSelectedCity] = useState(null)

  const cities = ['citii1', 'cdmx', 'juarez', 'leon', 'Helsinki', 'NArnia', 'sopas', 'azucar', 'Azul', 'Aanarranja']

  return (
    <aside className={styles.container}>
      <div className={styles.searchBar}>
        <div onClick={() => handleDropdown(cityRef)} ref={cityRef} className={`${styles.searchBar__city} ${styles.searchBar__gen}`}>
          <span>City</span>
        </div>
        <div onClick={() => handleDropdown(guestsRef)} ref={guestsRef} className={`${styles.searchBar__guests} ${styles.searchBar__gen}`}>
          <span>Guests</span>
        </div>
        <div className={`${styles.searchBar__btn} ${styles.searchBar__gen}`}>
          <button onClick={() => setTotalGuests(adultsGuests + childrenGuests)}>
            <Image src='/magnifying.svg' alt='Magnifying Glass' width='20' height='20' />
          </button>
        </div>
      </div>
      <div ref={dropRef} className={styles.drop}>
        {/* // * City Section */}
        <div ref={citySectionRef} className={`${styles.dropSection} ${styles.citySection}`}>
          <span className={styles.sectionTitle}>Select City</span>
          <ul>
            {
              cities.map((city, index) => (
                <li onClick={() => setSelectedCity(city)} className={selectedCity === city ? styles.selectedCity : ''} key={index}>
                  <Image src='/locationDot.svg' alt='Location Dot Icon' width='20' height='20' />
                  {city}
                </li>
              ))
            }
          </ul>
        </div>
        {/* // * Guests Setion */}
        <div ref={guestsSectionRef} className={`${styles.dropSection} ${styles.guestsSection}`}>
          <span className={styles.sectionTitle}>Guests</span>
          <div className={styles.content}>
            <div className={styles.counterContainer}>
              <span className={styles.counterType}>Adults</span>
              <div className={styles.counter}>
                <button onClick={() => setAdultsGuests(adultsGuests > 0 ? adultsGuests - 1 : 0)}>
                  <Image src='/minus.svg' alt='Plus Icon' width='20' height='20' />
                </button>
                <span>{adultsGuests}</span>
                <button onClick={() => setAdultsGuests(adultsGuests < 10 ? adultsGuests + 1 : 10)}>
                  <Image src='/plus.svg' alt='Plus Icon' width='20' height='20' />
                </button>
              </div>
            </div>
            <div className={styles.counterContainer}>
              <span className={styles.counterType}>Children</span>
              <div className={styles.counter}>
                <button onClick={() => setChildrenGuests(childrenGuests > 0 ? childrenGuests - 1 : 0)}>
                  <Image src='/minus.svg' alt='Plus Icon' width='20' height='20' />
                </button>
                <span>{childrenGuests}</span>
                <button onClick={() => setChildrenGuests(childrenGuests < 10 ? childrenGuests + 1 : 10)}>
                  <Image src='/plus.svg' alt='Plus Icon' width='20' height='20' />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}
export default SearchBar
