import Image from 'next/image'
import styles from '@styles/card.module.css'

const Card = () => {
  return (
    <article className={styles.card}>
      <figure className={styles.image}>
        <Image src='https://cdn.pixabay.com/photo/2016/11/29/03/53/house-1867187_1280.jpg' alt='Generic Propertie' width='400' height='400' priority />
      </figure>
      <div className={styles.header}>
        <div className={styles.type_container}>
          <div className={styles.superhost}><span>SUPER HOST</span></div>
          <p className={styles.type}>Propertie type</p>
        </div>
        <div className={styles.rating}>
          <Image src='/star.svg' alt='Star Icon' width='30' height='30' />
          <span>4.5</span>
        </div>
      </div>
      <p className={styles.description}>Description of the propertie; Descripcion larga para ajustar el texto en una sola linea bla bla bla. No mero en dos lineas; así que debo escribir más xDxDxD</p>
    </article>
  )
}
export default Card
