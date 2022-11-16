import { Link } from 'react-router-dom'

import logo from '../img/logo.png'

import styles from './Navbar.module.css'

function Navbar() {
  return (
    <div className={styles.container}>
      <Link to ='/'><img src={logo} alt="Logo Imobiliaria" /></Link>
      <ul className={styles.navbar}>
        <li><Link to='/'>Comprar</Link></li>
        <li><Link to='/vender'>Vender</Link></li>
        <li><Link to='/'>Contato</Link></li>
        <li><Link to='/'>Entrar</Link></li>
      </ul>
    </div>
  );
}

export default Navbar;