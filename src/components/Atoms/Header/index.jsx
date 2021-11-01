import logoImg from '../../../assets/logo.svg'

import styles from './styles.module.scss'

export const Header = () => {
  return (
    <header className={styles.headerWrapper}>
      <div className={styles.headerContainer}>
        <img className={styles.logo} src={logoImg} alt="Logo Be Mobile" />
      </div>
    </header>
  )
}
