import Card from './Card'
import styles from '@styles/listContainer.module.css'

const ListContainer = ({ list }) => {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h2>Stays in Finland</h2>
        <p>{list.length} stays</p>
      </header>
      <section className={styles.list}>
        {
          list.map((stay, index) => <Card key={index} data={stay} />)
        }
      </section>
    </main>
  )
}
export default ListContainer
