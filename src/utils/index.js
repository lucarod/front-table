import StringMask from 'string-mask'
import dayjs from 'dayjs'

const mask = '+99 (00) 90000-0000'

const formatPhone = (phoneNumber) => {
  if (phoneNumber.length > 13) {
    return {
      result: phoneNumber,
      valid: false
    }
  }
  return StringMask.process(phoneNumber, mask)
}

const slugify = (value) => {
  return value
    .toString()
    .normalize('NFD') // split an accented letter in the base letter and the acent
    .replace(/[\u0300-\u036f]/g, '') // remove all previously split accents
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9 ]/g, '') // remove all chars not letters, numbers and spaces (to be replaced)
    .replace(/\s+/g, ' ') // separator
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

export const filterEmployees = (filterString, totalEmployees) => {
  const filteredEmployees = totalEmployees.filter(({ name, job, admission_date, phone }) => {
    const simplifiedPhone = phone.replace(/[^+\d]+/g, "")  // Removing ( ) and trimming the phone number
    const sluggedName = slugify(name)                      // Removing accents to make search more flexible
    const rawData = [
      name,
      sluggedName,
      job,
      admission_date,
      phone,
      simplifiedPhone
    ].join(' ').toLowerCase()
    return (
      filterString.split(' ').every(item => rawData.includes(item.toLowerCase()))
    )
  })
  return filteredEmployees
}

export const sortEmployees = (sortedField, employees, sortDirection) => {
  if (sortDirection === null) {
    return employees.sort((a, b) => a.id - b.id);
  }
  const sortedEmployees = employees.sort((a, b) => {
    if (a[sortedField] < b[sortedField]) {
      return sortDirection === 'ascending' ? -1 : 1;
    }
    if (a[sortedField] > b[sortedField]) {
      return sortDirection === 'ascending' ? 1 : -1;
    }
    return 0;
  })
  return sortedEmployees
}
