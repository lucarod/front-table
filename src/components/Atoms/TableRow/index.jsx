import styles from './styles.module.scss'

export const TableRow = ({ variant, children }) => {
  return (
    <tr className={`${variant === "body" && styles.rowBgWhite} ${styles.tableRowWrapper}`}>
      {children}
    </tr>
  )
}
