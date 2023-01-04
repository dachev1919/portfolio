import { NavLink } from "react-router-dom";
import BackgroundSwitcher from "./BackgroundSwitcher";
import styles from './Menu.module.css';

const Menu = ({menuShow, menuHide}) => {
    return (
        <div className={`${styles.menu} ${menuShow ? styles['menu_active'] : ''}`} data-menu-opener='true'>
            <div data-menu-opener='true' />
            <div className={styles['menu_list']} data-menu-opener='true'>
                <NavLink className={styles['menu_item']} to={'/portfolio/'} onClick={menuHide}>Main</NavLink>
                <NavLink className={styles['menu_item']} to={'/portfolio/projects'} onClick={menuHide}>Projects</NavLink>
                <NavLink className={styles['menu_item']} to={'/portfolio/contacts'} onClick={menuHide}>Contacts</NavLink>
            </div>
            <BackgroundSwitcher />
        </div>
    );
};

export default Menu;