import { TableRow } from '../../Atoms/TableRow'

import styles from './styles.module.scss'

export const TableHead = () => {
  return (
    <thead className={styles.tableHeadWrapper}>
      <TableRow>
        <th>Foto</th>
        <th>Nome</th>
        <th>Cargo</th>
        <th>Data de Admissão</th>
        <th>Telefone</th>
      </TableRow>
    </thead>
  )
}
