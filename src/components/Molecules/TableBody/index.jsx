import { TableRow } from '../../Atoms/TableRow'

export const TableBody = ({ employees }) => {

  return (
    <tbody>
      {employees.map((employee) => {
        return (
          <TableRow key={employee.id} variant='body'>
            <td>
              <img src={employee.image} alt={employee.name} />
            </td>
            <td>{employee.name}</td>
            <td>{employee.job}</td>
            <td>{employee.admission_date}</td>
            <td>{employee.phone}</td>
          </TableRow>
        )
      })}
    </tbody>
  )
}
