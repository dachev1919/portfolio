import { useEffect, useRef } from 'react';
import { useLocalStorage } from "../utils/useLocalStorage";
import styles from './BackgroundSwitcher.module.css';

const BackgroundSwitcher = () => {
    const [darkMode, setDarkMode] = useLocalStorage('darkMode', 'light')
    const buttonRef = useRef(null);

    const toggleDarkMode = () => {
        setDarkMode((currentValue) => currentValue === 'light' ? 'dark' : 'light');
    };

    useEffect(() => {
        if (darkMode === 'dark') {
            buttonRef.current.classList.add(styles['switcher_dark']);
        } else {
            buttonRef.current.classList.remove(styles['switcher_dark']);
        }
        document.documentElement.setAttribute('data-theme', darkMode)
    }, [darkMode]);

    useEffect(() => {
        // if change system setting dark mode
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
            const newColorScheme = event.matches ? 'dark' : 'light';
            setDarkMode(newColorScheme);
        });
    }, [setDarkMode]);


    return (
        <label ref={buttonRef} className={styles.switcher} onClick={toggleDarkMode} data-menu-opener='true'>
            <div className={styles['switcher_wrapper']} data-menu-opener='true'>
                <div className={styles['switcher_icon']} data-menu-opener='true'>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" data-menu-opener='true'>
                        <path data-menu-opener='true' d="M8 11C7.20435 11 6.44129 10.6839 5.87868 10.1213C5.31607 9.55871 5 8.79565 5 8C5 7.20435 5.31607 6.44129 5.87868 5.87868C6.44129 5.31607 7.20435 5 8 5C8.79565 5 9.55871 5.31607 10.1213 5.87868C10.6839 6.44129 11 7.20435 11 8C11 8.79565 10.6839 9.55871 10.1213 10.1213C9.55871 10.6839 8.79565 11 8 11ZM8 12C9.06087 12 10.0783 11.5786 10.8284 10.8284C11.5786 10.0783 12 9.06087 12 8C12 6.93913 11.5786 5.92172 10.8284 5.17157C10.0783 4.42143 9.06087 4 8 4C6.93913 4 5.92172 4.42143 5.17157 5.17157C4.42143 5.92172 4 6.93913 4 8C4 9.06087 4.42143 10.0783 5.17157 10.8284C5.92172 11.5786 6.93913 12 8 12ZM8 0C8.13261 0 8.25979 0.0526784 8.35355 0.146447C8.44732 0.240215 8.5 0.367392 8.5 0.5V2.5C8.5 2.63261 8.44732 2.75979 8.35355 2.85355C8.25979 2.94732 8.13261 3 8 3C7.86739 3 7.74021 2.94732 7.64645 2.85355C7.55268 2.75979 7.5 2.63261 7.5 2.5V0.5C7.5 0.367392 7.55268 0.240215 7.64645 0.146447C7.74021 0.0526784 7.86739 0 8 0V0ZM8 13C8.13261 13 8.25979 13.0527 8.35355 13.1464C8.44732 13.2402 8.5 13.3674 8.5 13.5V15.5C8.5 15.6326 8.44732 15.7598 8.35355 15.8536C8.25979 15.9473 8.13261 16 8 16C7.86739 16 7.74021 15.9473 7.64645 15.8536C7.55268 15.7598 7.5 15.6326 7.5 15.5V13.5C7.5 13.3674 7.55268 13.2402 7.64645 13.1464C7.74021 13.0527 7.86739 13 8 13ZM16 8C16 8.13261 15.9473 8.25979 15.8536 8.35355C15.7598 8.44732 15.6326 8.5 15.5 8.5H13.5C13.3674 8.5 13.2402 8.44732 13.1464 8.35355C13.0527 8.25979 13 8.13261 13 8C13 7.86739 13.0527 7.74021 13.1464 7.64645C13.2402 7.55268 13.3674 7.5 13.5 7.5H15.5C15.6326 7.5 15.7598 7.55268 15.8536 7.64645C15.9473 7.74021 16 7.86739 16 8ZM3 8C3 8.13261 2.94732 8.25979 2.85355 8.35355C2.75979 8.44732 2.63261 8.5 2.5 8.5H0.5C0.367392 8.5 0.240215 8.44732 0.146447 8.35355C0.0526784 8.25979 0 8.13261 0 8C0 7.86739 0.0526784 7.74021 0.146447 7.64645C0.240215 7.55268 0.367392 7.5 0.5 7.5H2.5C2.63261 7.5 2.75979 7.55268 2.85355 7.64645C2.94732 7.74021 3 7.86739 3 8ZM13.657 2.343C13.7507 2.43676 13.8034 2.56392 13.8034 2.6965C13.8034 2.82908 13.7507 2.95624 13.657 3.05L12.243 4.465C12.1965 4.51142 12.1413 4.54823 12.0806 4.57333C12.0199 4.59843 11.9548 4.61132 11.8891 4.61128C11.7565 4.61118 11.6293 4.55839 11.5355 4.4645C11.4891 4.41801 11.4523 4.36284 11.4272 4.30212C11.4021 4.24141 11.3892 4.17634 11.3892 4.11065C11.3893 3.97796 11.4421 3.85075 11.536 3.757L12.95 2.343C13.0438 2.24926 13.1709 2.19661 13.3035 2.19661C13.4361 2.19661 13.5632 2.24926 13.657 2.343ZM4.464 11.536C4.55774 11.6298 4.61039 11.7569 4.61039 11.8895C4.61039 12.0221 4.55774 12.1492 4.464 12.243L3.05 13.657C2.9557 13.7481 2.8294 13.7985 2.6983 13.7973C2.5672 13.7962 2.44179 13.7436 2.34909 13.6509C2.25639 13.5582 2.2038 13.4328 2.20266 13.3017C2.20152 13.1706 2.25192 13.0443 2.343 12.95L3.757 11.536C3.85076 11.4423 3.97792 11.3896 4.1105 11.3896C4.24308 11.3896 4.37024 11.4423 4.464 11.536ZM13.657 13.657C13.5632 13.7507 13.4361 13.8034 13.3035 13.8034C13.1709 13.8034 13.0438 13.7507 12.95 13.657L11.536 12.243C11.4449 12.1487 11.3945 12.0224 11.3957 11.8913C11.3968 11.7602 11.4494 11.6348 11.5421 11.5421C11.6348 11.4494 11.7602 11.3968 11.8913 11.3957C12.0224 11.3945 12.1487 11.4449 12.243 11.536L13.657 12.95C13.7507 13.0438 13.8034 13.1709 13.8034 13.3035C13.8034 13.4361 13.7507 13.5632 13.657 13.657ZM4.464 4.465C4.37024 4.55874 4.24308 4.61139 4.1105 4.61139C3.97792 4.61139 3.85076 4.55874 3.757 4.465L2.343 3.05C2.29524 3.00388 2.25715 2.9487 2.23095 2.8877C2.20474 2.8267 2.19095 2.76109 2.19037 2.6947C2.1898 2.62831 2.20245 2.56247 2.22759 2.50102C2.25273 2.43957 2.28986 2.38375 2.3368 2.3368C2.38375 2.28986 2.43957 2.25273 2.50102 2.22759C2.56247 2.20245 2.62831 2.1898 2.6947 2.19037C2.76109 2.19095 2.8267 2.20474 2.8877 2.23095C2.9487 2.25715 3.00388 2.29524 3.05 2.343L4.464 3.757C4.51056 3.80345 4.54751 3.85862 4.57271 3.91937C4.59792 3.98011 4.61089 4.04523 4.61089 4.111C4.61089 4.17677 4.59792 4.24189 4.57271 4.30263C4.54751 4.36338 4.51056 4.41855 4.464 4.465Z" fill="black"/>
                    </svg>
                </div>
                <div className={styles['switcher_button']} data-menu-opener='true' />
                <div className={styles['switcher_icon']} data-menu-opener='true'>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" data-menu-opener='true'>
                        <path data-menu-opener='true' d="M6.00025 0.277333C6.09787 0.395951 6.15767 0.541116 6.17193 0.694073C6.18619 0.84703 6.15426 1.00075 6.08025 1.13537C5.50209 2.19689 5.20015 3.38676 5.20222 4.59551C5.20222 8.61668 8.48035 11.8728 12.5205 11.8728C13.0475 11.8728 13.5606 11.8178 14.0536 11.7128C14.2047 11.6801 14.3621 11.6926 14.5062 11.7488C14.6503 11.805 14.7746 11.9024 14.8636 12.0288C14.9576 12.1603 15.0055 12.3191 14.9999 12.4806C14.9943 12.6421 14.9355 12.7972 14.8326 12.9219C14.0483 13.8853 13.0588 14.6616 11.9363 15.1941C10.8139 15.7267 9.58672 16.002 8.34435 16C3.73416 16 0 12.2858 0 7.70964C0 4.2655 2.11409 1.31138 5.12421 0.0593244C5.27416 -0.00404638 5.44062 -0.0170529 5.59858 0.0222585C5.75655 0.06157 5.8975 0.151077 6.00025 0.277333Z" fill="black"/>
                        <path data-menu-opener='true' d="M10.7939 3.14746C10.8083 3.10415 10.8359 3.06646 10.8729 3.03975C10.9099 3.01304 10.9543 2.99866 10.9999 2.99866C11.0456 2.99866 11.09 3.01304 11.127 3.03975C11.164 3.06646 11.1916 3.10415 11.2059 3.14746L11.593 4.30951C11.766 4.82753 12.172 5.23355 12.69 5.40655L13.8521 5.79357C13.8954 5.80791 13.933 5.83553 13.9598 5.87252C13.9865 5.9095 14.0008 5.95396 14.0008 5.99958C14.0008 6.0452 13.9865 6.08966 13.9598 6.12664C13.933 6.16362 13.8954 6.19125 13.8521 6.20559L12.69 6.5926C12.4345 6.67772 12.2024 6.82118 12.012 7.01159C11.8215 7.20201 11.6781 7.43416 11.593 7.68965L11.2059 8.8517C11.1916 8.895 11.164 8.93269 11.127 8.9594C11.09 8.98611 11.0456 9.00049 10.9999 9.00049C10.9543 9.00049 10.9099 8.98611 10.8729 8.9594C10.8359 8.93269 10.8083 8.895 10.7939 8.8517L10.4069 7.68965C10.3218 7.43416 10.1783 7.20201 9.98792 7.01159C9.7975 6.82118 9.56535 6.67772 9.30987 6.5926L8.14782 6.20559C8.10451 6.19125 8.06682 6.16362 8.04011 6.12664C8.0134 6.08966 7.99902 6.0452 7.99902 5.99958C7.99902 5.95396 8.0134 5.9095 8.04011 5.87252C8.06682 5.83553 8.10451 5.80791 8.14782 5.79357L9.30987 5.40655C9.56535 5.32143 9.7975 5.17798 9.98792 4.98756C10.1783 4.79714 10.3218 4.56499 10.4069 4.30951L10.7939 3.14746ZM13.8631 0.0983307C13.8729 0.0698558 13.8914 0.0451644 13.916 0.0276893C13.9405 0.0102143 13.9699 0.000823975 14.0001 0.000823975C14.0302 0.000823975 14.0596 0.0102143 14.0841 0.0276893C14.1087 0.0451644 14.1272 0.0698558 14.1371 0.0983307L14.3951 0.872363C14.5101 1.21838 14.7811 1.48939 15.1271 1.60439L15.9011 1.8624C15.9296 1.87228 15.9543 1.89078 15.9718 1.91533C15.9893 1.93988 15.9986 1.96927 15.9986 1.99941C15.9986 2.02955 15.9893 2.05894 15.9718 2.08349C15.9543 2.10804 15.9296 2.12654 15.9011 2.13642L15.1271 2.39443C14.9566 2.45115 14.8016 2.54685 14.6746 2.67392C14.5475 2.80099 14.4518 2.95594 14.3951 3.12646L14.1371 3.90049C14.1272 3.92896 14.1087 3.95366 14.0841 3.97113C14.0596 3.98861 14.0302 3.998 14.0001 3.998C13.9699 3.998 13.9405 3.98861 13.916 3.97113C13.8914 3.95366 13.8729 3.92896 13.8631 3.90049L13.605 3.12646C13.5483 2.95594 13.4526 2.80099 13.3256 2.67392C13.1985 2.54685 13.0435 2.45115 12.873 2.39443L12.099 2.13642C12.0705 2.12654 12.0458 2.10804 12.0283 2.08349C12.0109 2.05894 12.0015 2.02955 12.0015 1.99941C12.0015 1.96927 12.0109 1.93988 12.0283 1.91533C12.0458 1.89078 12.0705 1.87228 12.099 1.8624L12.873 1.60439C13.219 1.48939 13.49 1.21838 13.605 0.872363L13.8631 0.0993307V0.0983307Z" fill="black"/>
                    </svg>
                </div>
            </div>
        </label>
    );
};

export default BackgroundSwitcher;