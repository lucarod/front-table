import { useState, useContext } from 'react'

import { FaSort, FaSortUp, FaSortDown } from 'react-icons/fa';

import { FilterContext } from '../../../contexts/filter'

import { TableRow } from '../../Atoms/TableRow'

import { columnName, sortIcon } from './styles.module.scss'

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
        <th>
          <button
            type="button"
            className={columnName}
            onClick={() => handleSorting('name')}
          >
            Nome
            {
              selectedColumn === 'name' && sortDirection
                ? sortDirection === 'ascending'
                  ? <FaSortDown className={sortIcon} />
                  : <FaSortUp className={sortIcon} />
                : <FaSort className={sortIcon} />
            }
          </button>
        </th>
        <th>
          <button
            type="button"
            className={columnName}
            onClick={() => handleSorting('job')}
          >
            Cargo
            {
              selectedColumn === 'job' && sortDirection
                ? sortDirection === 'ascending'
                  ? <FaSortDown className={sortIcon} />
                  : <FaSortUp className={sortIcon} />
                : <FaSort className={sortIcon} />
            }
          </button>
        </th>
        <th>
          <button
            type="button"
            className={columnName}
            onClick={() => handleSorting('admission_date')}
          >
            Data de Admissão
            {
              selectedColumn === 'admission_date' && sortDirection
                ? sortDirection === 'ascending'
                  ? <FaSortDown className={sortIcon} />
                  : <FaSortUp className={sortIcon} />
                : <FaSort className={sortIcon} />
            }
          </button>
        </th>
        <th>
          <button
            type="button"
            className={columnName}
            onClick={() => handleSorting('phone')}
          >
            Telefone
            {
              selectedColumn === 'phone' && sortDirection
                ? sortDirection === 'ascending'
                  ? <FaSortDown className={sortIcon} />
                  : <FaSortUp className={sortIcon} />
                : <FaSort className={sortIcon} />
            }
          </button>
        </th>
      </TableRow>
    </thead>
  )
}
