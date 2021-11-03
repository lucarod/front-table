import { useState, useEffect, useContext, useRef } from 'react'
import { FilterContext } from '../../../contexts/filter'

import searchIcon from '../../../assets/search.svg'

import { searchbarWrapper, searchLabel, searchInput, searchButton } from './styles.module.scss'

export const SearchBar = () => {
  const notInitialRender = useRef(false)

  const [searchText, setSearchText] = useState('')
  const { filterEmployees } = useContext(FilterContext)

  useEffect(() => {
    if (notInitialRender.current) {
      filterEmployees(searchText)
    } else {
      notInitialRender.current = true
    }

  }, [searchText])

  return (
    <div className={searchbarWrapper}>
      <label className={searchLabel} htmlFor="search"></label>
      <input
        id="search"
        onChange={event => setSearchText(event.target.value)}
        className={searchInput}
        type="text"
        placeholder="Pesquisar"
        value={searchText}
        autoComplete="off"
      />
      <button className={searchButton}>
        <img src={searchIcon} alt="Digite sua busca" />
      </button>
    </div>
  )
}
