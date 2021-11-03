import { SearchBar } from '../../Atoms/SearchBar'

import { contentHeaderWrapper, contentHeaderTitle } from './styles.module.scss'

export const ContentHeader = ({ title }) => {
  return (
    <div className={contentHeaderWrapper}>
      <h1 className={contentHeaderTitle}>{title}</h1>
      <SearchBar />
    </div>
  )
}
