import StringMask from 'string-mask'

const mask = '+99 (00) 90000-0000'

export const formatPhone = (phoneNumber) => {
  if (phoneNumber.length > 13) {
    const result = phoneNumber
    const valid = false
    return { result, valid }
  }

  const formattedPhone = StringMask.process(phoneNumber, mask)
  return formattedPhone
}
