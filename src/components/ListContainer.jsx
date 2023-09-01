import Card from './Card'
import styles from '@styles/listContainer.module.css'

const EmptyList = () => {
  return (
    <article className={styles.errorCard}>
      <h4 className={styles.mainError}>There are no stays with the parameters you are looking for</h4>
      <p className={styles.paragraphError}>Try searching in another city or changing the number of guests</p>
    </article>
  )
}

const ListContainer = ({ list }) => {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h2>Stays in Finland</h2>
        <p>{list.length} stays</p>
      </header>
      <section className={styles.list}>
        {
          list.length !== 0
            ? list.map((stay, index) => <Card key={index} data={stay} />)
            : <EmptyList />
        }
      </section>
    </main>
  )
}
export default ListContainer
