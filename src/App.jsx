import { useContext } from 'react'

import { FilterContext } from './contexts/filter'

import { Header } from './components/Atoms/Header'
import { ContentHeader } from './components/Molecules/ContentHeader'
import { Table } from './components/Organisms/Table'

import styles from './App.module.scss'

function App() {
  const { employees } = useContext(FilterContext)

  return (
    <>
      <Header />
      <main>
        <ContentHeader title="Funcionários" />
        <div className={styles.tableContainer}>
          <Table />
        </div>
        {!employees.length &&
          <p className={styles.emptyMessage}>Não há dados para exibir que sejam compatíveis com a busca</p>
        }
      </main>
    </>
  )
}

export default App
