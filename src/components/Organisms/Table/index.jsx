import { useState, useEffect } from 'react'

import { api } from '../../../services/api'

import styles from './styles.module.scss'

import { TableHead } from '../../Molecules/TableHead'
import { TableBody } from '../../Molecules/TableBody'

export const Table = () => {
  const [employees, setEmployees] = useState([])

  useEffect(() => {
    api.get('employees').then(response => {
      setEmployees(response.data)
    })
  }, [])

  return (
    <table className={styles.tableWrapper}>
      <TableHead />
      <TableBody employees={employees} />
    </table>
  )
}
