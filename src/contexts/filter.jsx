import { createContext, useState, useEffect } from "react";

import { api } from '../services/api'

import { formatEmployees } from '../utils'

export const FilterContext = createContext({})

export const FilterProvider = (props) => {
  const [totalEmployees, setTotalEmployees] = useState([])
  const [employees, setEmployees] = useState([])

  function filterEmployees(filterString) {
    const newEmployees = totalEmployees.filter(({ name, job, admission_date, phone }) => {
      return (
        name.toLowerCase().includes(filterString.toLowerCase()) ||
        job.toLowerCase().includes(filterString.toLowerCase()) ||
        admission_date.toLowerCase().includes(filterString.toLowerCase()) ||
        phone.toLowerCase().includes(filterString.toLowerCase())
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
