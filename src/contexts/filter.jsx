import { createContext, useState, useEffect } from "react";

import { api } from '../services/api'

import { formatEmployees } from '../utils'

export const FilterContext = createContext({})

export const FilterProvider = (props) => {
  const [totalEmployees, setTotalEmployees] = useState([])
  const [employees, setEmployees] = useState([])

  function filterEmployees(filterString) {
    const newEmployees = totalEmployees.filter(({ name, job, admission_date, phone }) => {
      const simplifiedPhone = phone.replace(/[^+\d]+/g, "")
      const rawData = [name, job, admission_date, phone, simplifiedPhone].join(' ').toLowerCase()
      return (
        filterString.split(' ').every(item => rawData.includes(item.toLowerCase()))
      )
    })
    setEmployees(newEmployees)
  }

  useEffect(() => {
    api.get('employees').then(response => {
      const formattedEmployees = formatEmployees(response.data)
      setTotalEmployees(formattedEmployees)
      setEmployees(formattedEmployees)
    })
  }, [])

  return (
    <FilterContext.Provider value={{ employees, filterEmployees }}>
      {props.children}
    </FilterContext.Provider>
  )
}
