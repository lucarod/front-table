import { TableRow } from '../../Atoms/TableRow'

import styles from './styles.module.scss'

export const TableBody = () => {
  return (
    <tbody>
      <TableRow>
        <td>
          <img width='40' src="https://img.favpng.com/25/7/23/computer-icons-user-profile-avatar-image-png-favpng-LFqDyLRhe3PBXM0sx2LufsGFU.jpg" alt="" />
        </td>
        <td>João</td>
        <td>Back-end</td>
        <td>00/00/0000</td>
        <td>+55 (51) 23456-7890</td>
      </TableRow>
    </tbody>
  )
}
