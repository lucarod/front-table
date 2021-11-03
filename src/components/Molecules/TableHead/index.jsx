import { TableRow } from '../../Atoms/TableRow'
import { TableHeadButton } from '../../Atoms/TableHeadButton'

export const TableHead = () => {
  return (
    <thead>
      <TableRow variant='head'>
        <th>Foto</th>
        <th>
          <TableHeadButton name="Nome" dataType="name" />
        </th>
        <th>
          <TableHeadButton name="Cargo" dataType="job" />
        </th>
        <th>
          <TableHeadButton name="Data de Admissão" dataType="admission_date" />
        </th>
        <th>
          <TableHeadButton name="Telefone" dataType="phone" />
        </th>
      </TableRow>
    </thead>
  )
}
