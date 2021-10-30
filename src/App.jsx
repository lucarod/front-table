import { Header } from './components/Atoms/Header'
import { ContentHeader } from './components/Molecules/ContentHeader'
import { Table } from './components/Organisms/Table'

import styles from './App.module.scss'

function App() {
  return (
    <>
      <Header />
      <main>
        <ContentHeader title="Funcionários" />
        <div className={styles.tableContainer}>
          <Table />
        </div>
      </main>
    </>
  )
}

export default App
