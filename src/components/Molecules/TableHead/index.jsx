import { useState, useEffect, useContext } from 'react'

import { FilterContext } from '../../../contexts/filter'

import { TableRow } from '../../Atoms/TableRow'

export const TableHead = () => {
  const { sortEmployees } = useContext(FilterContext)

  return (
    <thead>
      <TableRow variant='head'>
        <th>Foto</th>
        <th>
          <button type="button" onClick={() => sortEmployees('name')}>
            Nome
          </button>
        </th>
        <th>
          <button type="button" onClick={() => sortEmployees('job')}>
            Cargo
          </button>
        </th>
        <th>Data de Admissão</th>
        <th>Telefone</th>
      </TableRow>
    </thead>
  )
}
