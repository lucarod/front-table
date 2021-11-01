import { TableRow } from '../../Atoms/TableRow'

export const TableBody = ({ employees }) => {

  return (
    <tbody>
      {employees.map(({id, image, name, job, admission_date, phone}) => {
        return (
          <TableRow key={id} variant='body'>
            <td>
              <img src={image} alt={name} />
            </td>
            <td>{name}</td>
            <td>{job}</td>
            <td>{admission_date}</td>
            <td>{phone}</td>
          </TableRow>
        )
      })}
    </tbody>
  )
}
