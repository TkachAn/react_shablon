
//import s from '../../../structure/s.module.css'
import s from "./s.module.css";
import { Link } from 'react-router-dom'

export function Navbar({ isMobile = false, isMenuOpen = false, closeMenu = () => {} }) {

    // Определяем, какой класс использовать
    const navClass = isMobile ? s.navbar_v : s.navbar;
    
    // Если это мобильное меню и оно закрыто, ничего не рендерим
    if (isMobile && !isMenuOpen) {
        return null;
    }

    return (
        <nav className={navClass}>
            <ul>
                <li>
                    <Link to="/" onClick={isMobile ? closeMenu : undefined}>Home</Link>
                </li>
                <li>
                    <Link to="/contacts" onClick={isMobile ? closeMenu : undefined}>Contacts</Link>
                </li>
                <li>
                    <Link to="/about" onClick={isMobile ? closeMenu : undefined}>About</Link>
                </li>
            </ul>
        </nav>
    );
}
