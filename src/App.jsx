import { Header } from './components/Atoms/Header'
import { ContentHeader } from './components/Molecules/ContentHeader'
import { Table } from './components/Organisms/Table'

function App() {
  return (
    <>
      <Header />
      <main>
        <ContentHeader title="Funcionários" />
        <Table />
      </main>
    </>
  )
}

export default App
