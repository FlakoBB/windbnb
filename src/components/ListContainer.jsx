import Card from './Card'
import styles from '@styles/listContainer.module.css'

const ListContainer = ({ list }) => {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h2>Stays in Finland</h2>
        {/* // ToDo: get num from props */}
        <p>12 stays</p>
      </header>
      <section className={styles.list}>
        {/* // ToDo: map() array from props with all stays */}
        {
          list.map((stay, index) => <Card key={index} data={stay} />)
        }
      </section>
    </main>
  )
}
export default ListContainer
