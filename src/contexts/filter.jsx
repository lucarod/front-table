import { createContext, useState, useEffect } from "react";

import { api } from '../services/api'

<<<<<<< HEAD
import { formatEmployees, filterEmployees } from '../utils'
=======
import { formatEmployees, filterEmployees, sortEmployees } from '../utils'
>>>>>>> feature-column-sorting

export const FilterContext = createContext({})

export const FilterProvider = (props) => {
  const [isLoading, setIsLoading] = useState(true)
  const [totalEmployees, setTotalEmployees] = useState([])
  const [employees, setEmployees] = useState([])

  function getFilteredEmployees(filterString) {
    const filteredEmployees = filterEmployees(filterString, totalEmployees)
    setEmployees(filteredEmployees)
<<<<<<< HEAD
=======
  }

  function getSortedEmployees(sortedField, sortDirection) {
    const sortedEmployees = sortEmployees(sortedField, [...employees], sortDirection)
    const sortedTotalEmployees = sortEmployees(sortedField, totalEmployees, sortDirection)
    setEmployees(sortedEmployees)
    setTotalEmployees(sortedTotalEmployees)
>>>>>>> feature-column-sorting
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
<<<<<<< HEAD
    <FilterContext.Provider value={{ employees, getFilteredEmployees, isLoading }}>
=======
    <FilterContext.Provider value={{ employees, getFilteredEmployees, getSortedEmployees, isLoading }}>
>>>>>>> feature-column-sorting
      {props.children}
    </FilterContext.Provider>
  )
}
