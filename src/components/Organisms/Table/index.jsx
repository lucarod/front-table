import styles from './styles.module.scss'

import { TableHead } from '../../Molecules/TableHead'
import { TableBody } from '../../Molecules/TableBody'

export const Table = () => {
  return (
    <table className={styles.tableWrapper}>
      <TableHead />
      <TableBody />
    </table>
  )
}
