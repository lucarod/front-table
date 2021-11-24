import { FaSort, FaSortUp, FaSortDown } from 'react-icons/fa'

import { columnName, sortIcon } from './styles.module.scss'

export const TableHeadButton = ({ name, dataType, sortDirection, selectedColumn, handleSorting }) => {
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
