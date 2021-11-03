import { useState, useContext } from 'react'

import { FilterContext } from '../../../contexts/filter'

import { TableRow } from '../../Atoms/TableRow'
import { TableHeadButton } from '../../Atoms/TableHeadButton'

const clickableColumns = [
  {
    id: 1,
    name: "Nome",
    dataType: "name"
  },
  {
    id: 2,
    name: "Cargo",
    dataType: "job"
  },
  {
    id: 3,
    name: "Data de Admissão",
    dataType: "admission_date"
  },
  {
    id: 4,
    name: "Telefone",
    dataType: "phone"
  },
]

export const TableHead = () => {
  const { getSortedEmployees } = useContext(FilterContext)
  const [sortDirection, setSortDirection] = useState(null)
  const [selectedColumn, setSelectedColumn] = useState(null)

  // Poderia transformar o sorting em um hook

  function handleSorting(sortedField) {
    const newSortDirection = changeSortDirection(sortedField)
    getSortedEmployees(sortedField, newSortDirection)
    setSortDirection(newSortDirection)
    setSelectedColumn(sortedField)
  }

  function changeSortDirection(sortedField) {
    if (sortDirection === null || selectedColumn !== sortedField) {
      return 'ascending'
    }
    if (sortDirection === 'ascending') {
      return 'descending'
    }
    return null
  }

  return (
    <thead>
      <TableRow variant='head'>
        <th>Foto</th>
        {
          clickableColumns.map(({ id, name, dataType }) => {
            return (
              <th key={id}>
                <TableHeadButton
                  name={name}
                  dataType={dataType}
                  handleSorting={handleSorting}
                  selectedColumn={selectedColumn}
                  sortDirection={sortDirection}
                />
              </th>
            )
          })
        }
      </TableRow>
    </thead>
  )
}
