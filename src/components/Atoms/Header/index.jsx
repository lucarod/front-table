// import logoImg from '../../../assets/logo.svg'
// Inserir logo no caminho

import { headerWrapper, headerContainer, logo } from './styles.module.scss'

export const Header = () => {
  return (
    <header className={headerWrapper}>
      <div className={headerContainer}>
<<<<<<< HEAD
        <img className={logo} src={logoImg} alt="Logo Be Mobile" />
=======
        {/* <img className={logo} src={logoImg} alt="" /> */}
>>>>>>> feature-column-sorting
      </div>
    </header>
  )
}
