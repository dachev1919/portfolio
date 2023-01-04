import styles from './MenuOpener.module.css';

const MenuOpener = ({menuShow, menuState}) => {
    return (
        <div className={`${styles['menu-opener']} ${menuState ? styles['menu-opener_shift-left'] : ''}`} onClick={menuShow} data-menu-opener='true'>
            <div className={styles['menu-opener_icon']} data-menu-opener='true'>
                <i className={`${styles['menu-opener_icon__arrow']} ${styles['menu-opener_icon__next']} ${styles['menu-opener_icon__segunda']} fa fa-angle-up`} data-menu-opener='true' />
            </div>
        </div>
    );
};

export default MenuOpener;