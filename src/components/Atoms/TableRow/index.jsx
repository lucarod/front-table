import { tableRowWrapper, rowHead, rowBody } from './styles.module.scss'

export const TableRow = ({ variant, children }) => {
  return (
    <tr className={`
      ${tableRowWrapper}
      ${variant === "head" && rowHead}
      ${variant === "body" && rowBody}
    `}>
      {children}
    </tr>
  )
}
