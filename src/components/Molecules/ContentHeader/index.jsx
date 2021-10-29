import { SearchBar } from '../../Atoms/SearchBar'

import styles from './styles.module.scss'

export const ContentHeader = ({ title }) => {
  return (
    <div className={styles.contentHeaderWrapper}>
      <h1 className={styles.title}>{title}</h1>
      <SearchBar />
    </div>
  )
}
