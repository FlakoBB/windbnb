import Image from 'next/image'
import styles from '@styles/header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <figure className={styles.logo}>
        <Image src='/windbnb.svg' alt='Windbnb Logo' width='200' height='40' priority />
      </figure>
      <div className={styles.searchbar}>
        <div>
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
