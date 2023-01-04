import Header from "../components/Header";
import styles from './Contacts.module.css';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Contacts = () => {
    const pathname = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);


    return (
        <>
            <Header />
            <section id='contacts' className={`dpfblock container ${styles.contacts}`}>
                <div className='dpfblock_header wow fadeInUp'>
                    <h2 className='dpfblock_title'>Contacts</h2>
                    <div className='dpfblock_line' />
                </div>
                <div className={styles['contacts_wrapper']}>
                    <a href="tel:380636219861" target='_blank' rel="noreferrer" className={`${styles['contact']} ${styles['contact_icon-left']}`}>
                        <div className={styles['contact_icon']}>
                            <i className="fa fa-phone" />
                        </div>
                        <div className={styles['contact_info']}>
                            <p>+(380) 63 62 19 861</p>
                        </div>
                    </a>
                    <a href="mailto:dachev1919@gmail.com" target='_blank' rel="noreferrer" className={`${styles['contact']} ${styles['contact_icon-right']}`}>
                        <div className={styles['contact_info']}>
                            <p>dachev1919@gmail.com</p>
                        </div>
                        <div className={styles['contact_icon']}>
                            <i className="fa fa-envelope" />
                        </div>
                    </a>
                    <a href="https://github.com/dachev1919" target='_blank' rel="noreferrer" className={`${styles['contact']} ${styles['contact_icon-left']}`}>
                        <div className={styles['contact_icon']}>
                            <i className="fa fa-github" />
                        </div>
                        <div className={styles['contact_info']}>
                            <p>dachev1919</p>
                        </div>
                    </a>
                    <a href="https://ua.linkedin.com/in/oleh-dachev-b5b6501b7/uk" target='_blank' rel="noreferrer" className={`${styles['contact']} ${styles['contact_icon-right']}`}>
                        <div className={styles['contact_info']}>
                            <p>Oleh Dachev</p>
                        </div>
                        <div className={styles['contact_icon']}>
                            <i className="fa fa-linkedin" />
                        </div>
                    </a>
                </div>
            </section>
        </>

    )
};

export default Contacts;