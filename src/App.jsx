import { useContext } from 'react'

import { css } from "@emotion/react"; // React-Spinners usa emotion, apesar de eu ter utilizado CSS Modules
import MoonLoader from "react-spinners/MoonLoader";

import { FilterContext } from './contexts/filter'

import { Header } from './components/Atoms/Header'
import { ContentHeader } from './components/Molecules/ContentHeader'
import { Table } from './components/Organisms/Table'

import styles from './App.module.scss'

const spinnerStyle = css`
  display: block;
  margin: 0 auto;
`;

function App() {
  const { employees, isLoading } = useContext(FilterContext)

  return (
    <>
      <Header />
      <main>
        <ContentHeader title="Funcionários" />
        <div className={styles.tableContainer}>
          <Table />
        </div>
        {
          isLoading ?
          <MoonLoader
            color="#5984c0"
            loading={isLoading}
            css={spinnerStyle}
            size={32}
            speedMultiplier={1.5}
          />
          : !employees.length &&
          <p className={styles.emptyMessage}>Não há dados para exibir que sejam compatíveis com a busca</p>
        }
      </main>
    </>
  )
}

export default App
