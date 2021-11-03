import { useState, useContext } from 'react'

import { FilterContext } from '../../../contexts/filter'

import { FaSort, FaSortUp, FaSortDown } from 'react-icons/fa'

import { columnName, sortIcon } from './styles.module.scss'

export const TableHeadButton = ({ name, dataType }) => {
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
    <button
      type="button"
      className={columnName}
      onClick={() => handleSorting(dataType)}
    >
      <span>{name}</span>
      {
        selectedColumn === dataType && sortDirection
          ? sortDirection === 'ascending'
            ? <FaSortDown className={sortIcon} />
            : <FaSortUp className={sortIcon} />
          : <FaSort className={sortIcon} />
      }
    </button>
  )
}
