import styles from './ScrollUp.module.css';
import { useEffect, useState } from "react";


function smoothScroll(e) {
    e.preventDefault();

    document.querySelector(`#root`).scrollIntoView({
        behavior: "smooth",
    });
}

const ScrollUp = ({scrollLink, menuState}) => {
    const [buttonActiveClass, setButtonActiveClass] = useState('');

    const showHideButton = () => {
        window.addEventListener('scroll', function () {
            if (document.documentElement.scrollTop > 300) {
                setButtonActiveClass(styles['scroll-up__active']);
            } else {
                setButtonActiveClass('');
            }
        });
    };

    useEffect(() => showHideButton(), []);

    return (
        <div className={`${styles['scroll-up']} ${buttonActiveClass} ${menuState ? styles['scroll-up_shift-left'] : ''}`} onClick={(e) => smoothScroll(e)}>
            <a href={scrollLink}><i className="fa fa-angle-up" /></a>
        </div>
    );
};

export default ScrollUp;