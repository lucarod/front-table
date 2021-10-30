import { useContext } from 'react'
import { FilterContext } from '../../../contexts/filter'

import styles from './styles.module.scss'

import { TableHead } from '../../Molecules/TableHead'
import { TableBody } from '../../Molecules/TableBody'

export const Table = () => {
  const { employees } = useContext(FilterContext)

  return (
    <table className={styles.tableWrapper}>
      <TableHead />
      <TableBody employees={employees} />
    </table>
  )
}
