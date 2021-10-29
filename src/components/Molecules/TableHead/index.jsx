import { TableRow } from '../../Atoms/TableRow'

import styles from './styles.module.scss'

export const TableHead = () => {
  return (
    <thead>
      <TableRow>
        <td>Foto</td>
        <td>Nome</td>
        <td>Cargo</td>
        <td>Data de Admissão</td>
        <td>Telefone</td>
      </TableRow>
    </thead>
  )
}
