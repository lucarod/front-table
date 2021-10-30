import searchIcon from '../../../assets/search.svg'

import styles from './styles.module.scss'

export const SearchBar = () => {
  return (
    <div className={styles.searchbarWrapper}>
      <input className={styles.searchInput} type="text" placeholder="Pesquisar" />
      <button className={styles.searchButton} type="submit">
        <img src={searchIcon} alt="" />
      </button>
    </div>
  )
}
