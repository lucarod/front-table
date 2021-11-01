import { TableRow } from '../../Atoms/TableRow'

export const TableHead = () => {
  return (
    <thead>
      <TableRow variant='head'>
        <th>Foto</th>
        <th>Nome</th>
        <th>Cargo</th>
        <th>Data de Admissão</th>
        <th>Telefone</th>
      </TableRow>
    </thead>
  )
}
