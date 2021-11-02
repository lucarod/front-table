import { createContext, useState, useEffect } from "react";

import { api } from '../services/api'

import { formatEmployees, slugify } from '../utils'

export const FilterContext = createContext({})

export const FilterProvider = (props) => {
  const [isLoading, setIsLoading] = useState(true)
  const [totalEmployees, setTotalEmployees] = useState([])
  const [employees, setEmployees] = useState([])

  function filterEmployees(filterString) {
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
    setEmployees(filteredEmployees)
  }

  function sortEmployees(sortedField) {
    const sortedEmployees = [...employees].sort((a, b) => {
      if (a[sortedField] < b[sortedField]) {
        return -1;
      }
      if (a[sortedField] > b[sortedField]) {
        return 1;
      }
      return 0;
    })
    setEmployees(sortedEmployees)
  }

  useEffect(() => {
    api.get('employees')
      .then(response => {
        const formattedEmployees = formatEmployees(response.data)
        setTotalEmployees(formattedEmployees)
        setEmployees(formattedEmployees)
      })
      .catch(error => {
        console.log(error)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  return (
    <FilterContext.Provider value={{ employees, filterEmployees, sortEmployees, isLoading }}>
      {props.children}
    </FilterContext.Provider>
  )
}
