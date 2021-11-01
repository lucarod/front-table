import StringMask from 'string-mask'
import dayjs from 'dayjs'

const mask = '+99 (00) 90000-0000'

const formatPhone = (phoneNumber) => {
  if (phoneNumber.length > 13) {
    const result = phoneNumber
    const valid = false
    return { result, valid }
  }

  const formattedPhone = StringMask.process(phoneNumber, mask)
  return formattedPhone
}

export const formatEmployees = (employees) => {
  const formattedEmployees = employees.map(({ phone, admission_date, ...data }) => {
    const { result: formattedPhone, valid: isValid } = formatPhone(phone)
    const formattedDate = dayjs(admission_date).format('DD/MM/YYYY')
    const newPhone = isValid ? formattedPhone : 'Número Inválido'
    return { admission_date: formattedDate, phone: newPhone, ...data }
  })
  return formattedEmployees
}
