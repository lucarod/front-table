import logoImg from '../../../assets/logo.svg'

import styles from './styles.module.scss'

export const Header = () => {
  return (
    <header className={styles.headerWrapper}>
      <div className={styles.headerContainer}>
        <img src={logoImg} alt="" />
      </div>
    </header>
  )
}
