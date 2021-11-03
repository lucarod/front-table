import { useContext } from 'react'
import { FilterContext } from '../../../contexts/filter'

import { tableWrapper } from './styles.module.scss'

import { TableHead } from '../../Molecules/TableHead'
import { TableBody } from '../../Molecules/TableBody'

export const Table = () => {
  const { employees } = useContext(FilterContext)

  return (
    <table className={tableWrapper}>
      <TableHead />
      <TableBody employees={employees} />
    </table>
  )
}
