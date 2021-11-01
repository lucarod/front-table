import styles from './styles.module.scss'

export const TableRow = ({ variant, children }) => {
  return (
    <tr className={`
      ${styles.tableRowWrapper}
      ${variant === "head" && styles.rowHead}
      ${variant === "body" && styles.rowBody}
    `}>
      {children}
    </tr>
  )
}
