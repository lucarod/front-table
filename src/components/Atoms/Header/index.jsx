import logoImg from '../../../assets/logo.svg'

import { headerWrapper, headerContainer, logo } from './styles.module.scss'

export const Header = () => {
  return (
    <header className={headerWrapper}>
      <div className={headerContainer}>
        <img className={logo} src={logoImg} alt="Logo Be Mobile" />
      </div>
    </header>
  )
}
