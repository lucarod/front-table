import dayjs from 'dayjs'
import { formatPhone } from '../../../utils'

import { TableRow } from '../../Atoms/TableRow'

export const TableBody = ({ employees }) => {

  return (
    <tbody>
      {employees.map((employee) => {
        const formattedDate = dayjs(employee.admission_date).format('DD/MM/YYYY')
        const { result: formattedPhone, valid: isValid } = formatPhone(employee.phone)

        return (
          <TableRow key={employee.id} variant='body'>
            <td>
              <img src={employee.image} alt={employee.name} />
            </td>
            <td>{employee.name}</td>
            <td>{employee.job}</td>
            <td>{formattedDate}</td>
            <td>{isValid ? formattedPhone : "Número Inválido"}</td>
          </TableRow>
        )
      })}
    </tbody>
  )
}
