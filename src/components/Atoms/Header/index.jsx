// import logoImg from '../../../assets/logo.svg'
// Inserir logo no caminho

import { headerWrapper, headerContainer, logo } from './styles.module.scss'

export const Header = () => {
  return (
    <header className={headerWrapper}>
      <div className={headerContainer}>
        {/* <img className={logo} src={logoImg} alt="" /> */}
      </div>
    </header>
  )
}
