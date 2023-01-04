import styles from './Header.module.css';
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

function activeLink() {
    const sections = document.querySelectorAll('section');
    const navLi = document.querySelectorAll(`.${styles['header__navbar-nav']} li a`);

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;

            if (window.pageYOffset >= sectionTop - 60) {
                current = section.getAttribute('id');

            }
        });

        navLi.forEach((li) => {
            li.classList.remove(styles.active);
            if (li.classList.contains(current)) {
                li.classList.add(styles.active);
            }
        })
    });
}

function stickyHeader() {
    const header = document.querySelector(`.${styles.header}`);
    const sticky = header.offsetTop;
    window.addEventListener('scroll', function () {
        if (window.pageYOffset > sticky) {
            header.classList.add(styles.sticky);
        } else {
            header.classList.remove(styles.sticky);
        }
    });
}

const Header = ({sectionIds, smoothScroll}) => {
    useEffect(() => {
        activeLink();
        stickyHeader();
        window.addEventListener('resize', stickyHeader);
    }, []);

    const toggleClick = () => {
        const buttonSelector = document.getElementsByClassName(styles['header__navbar-toggle'])[0];
        const menuSelector = document.getElementsByClassName(buttonSelector.getAttribute('data-target'))[0];

        buttonSelector.classList.toggle(styles['header__navbar-toggle__active']);
        menuSelector.classList.toggle(styles['header__navbar-collapse__active']);

        const menuSelectorValidation = document.getElementsByClassName(styles['header__navbar-collapse__active'])[0];

        if (menuSelectorValidation) {
            menuSelector.style.height = `${menuSelector.children[0].offsetHeight}px`;
        } else {
            menuSelector.style.height = `0`;
        }
    }

    return (
        <div className={styles['header__wrapper']}>
            <header className={styles.header}>
                <nav className={styles['header__navbar']} role="navigation">
                    <div className={`container ${styles['header__navbar-container']}`}>
                        <div className={styles['header__navbar-header']}>
                            <NavLink className={styles['header__navbar-logotype']} to={'/portfolio/'}>Dachev</NavLink>
                            <div className={styles['header__navbar-toggle']} data-target={`${styles['header__navbar-collapse']}`} onClick={toggleClick}>
                                <span />
                                <span />
                                <span />
                                <span />
                            </div>
                        </div>
                        <div className={`${styles['header__navbar-collapse']}`}>
                            <ul className={styles['header__navbar-nav']}>
                                {sectionIds && sectionIds.map((li, index) => <li key={index}><a href={`#${li}`} className={li} onClick={(event) => smoothScroll(event, li)}>{li.toUpperCase()}</a></li>)}
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </div>

    );
};

export default Header;