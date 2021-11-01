import { createContext, useState, useEffect } from "react";

import { api } from '../services/api'

import { formatEmployees, slugify } from '../utils'

export const FilterContext = createContext({})

export const FilterProvider = (props) => {
  const [isLoading, setIsLoading] = useState(true)
  const [totalEmployees, setTotalEmployees] = useState([])
  const [employees, setEmployees] = useState([])

  function filterEmployees(filterString) {
    const newEmployees = totalEmployees.filter(({ name, job, admission_date, phone }) => {
      const simplifiedPhone = phone.replace(/[^+\d]+/g, "")
      const sluggedName = slugify(name)
      const rawData = [sluggedName, job, admission_date, phone, simplifiedPhone].join(' ').toLowerCase()
      return (
        filterString.split(' ').every(item => rawData.includes(item.toLowerCase()))
      )
    })
    setEmployees(newEmployees)
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
    <FilterContext.Provider value={{ employees, filterEmployees, isLoading }}>
      {props.children}
    </FilterContext.Provider>
  )
}
