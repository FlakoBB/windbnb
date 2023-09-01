import Image from 'next/image'
import styles from '@styles/card.module.css'

const Card = ({ data }) => {
  const { title, superHost, rating, type, photo } = data

  return (
    <article className={styles.card}>
      <figure className={styles.image}>
        <Image src={photo} alt='Generic Propertie' width='400' height='400' priority />
      </figure>
      <div className={styles.header}>
        <div className={styles.type_container}>
          {
            superHost && <div className={styles.superhost}><span>SUPER HOST</span></div>
          }
          <p className={styles.type}>{type}</p>
        </div>
        <div className={styles.rating}>
          <Image src='/star.svg' alt='Star Icon' width='30' height='30' />
          <span>{rating}</span>
        </div>
      </div>
      <p className={styles.description}>{title}</p>
    </article>
  )
}
export default Card
