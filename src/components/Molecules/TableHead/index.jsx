import { useContext } from 'react'

import { FilterContext } from '../../../contexts/filter'

import { TableRow } from '../../Atoms/TableRow'

export const TableHead = () => {
  const { getSortedEmployees } = useContext(FilterContext)

  return (
    <thead>
      <TableRow variant='head'>
        <th>Foto</th>
        <th>
          <button type="button" onClick={() => getSortedEmployees('name')}>
            Nome
          </button>
        </th>
        <th>
          <button type="button" onClick={() => getSortedEmployees('job')}>
            Cargo
          </button>
        </th>
        <th>Data de Admissão</th>
        <th>Telefone</th>
      </TableRow>
    </thead>
  )
}
