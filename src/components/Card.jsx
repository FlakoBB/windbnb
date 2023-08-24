import Image from 'next/image'
import styles from '@styles/card.module.css'

// ToDo: Get data from props
const Card = () => {
  return (
    <article className={styles.card}>
      <figure className={styles.image}>
        <Image src='https://cdn.pixabay.com/photo/2016/11/29/03/53/house-1867187_1280.jpg' alt='Generic Propertie' width='400' height='400' priority />
      </figure>
      <div className={styles.header}>
        <div className={styles.type_container}>
          {/* // ToDo: superhost is rendered when the superhost prop is true */}
          <div className={styles.superhost}><span>SUPER HOST</span></div>
          <p className={styles.type}>Propertie type</p>
        </div>
        <div className={styles.rating}>
          <Image src='/star.svg' alt='Star Icon' width='30' height='30' />
          <span>4.5</span>
        </div>
      </div>
      <p className={styles.description}>Description of the propertieD</p>
    </article>
  )
}
export default Card
