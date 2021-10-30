import { createContext, useState, useEffect } from "react";

import { api } from '../services/api'

export const FilterContext = createContext({})

export const FilterProvider = (props) => {
  const [totalEmployees, setTotalEmployees] = useState([])
  const [employees, setEmployees] = useState([])

  function filterEmployees(filterString) {
    const newEmployees = totalEmployees.filter((employee) => {
      return employee.name.toLowerCase().includes(filterString.toLowerCase())
    })
    setEmployees(newEmployees)
  }

  useEffect(() => {
    api.get('employees').then(response => {
      setTotalEmployees(response.data)
      setEmployees(response.data)
    })
  }, [])

  return (
    <FilterContext.Provider value={{ employees, filterEmployees }}>
      {props.children}
    </FilterContext.Provider>
  )
}
