import styles from './Footer.module.css';

const Footer = () => {
    const date = new Date();
    const currentYear = date.getFullYear();
    return (
        <footer id="footer" className={styles.footer}>
            <div className={styles['footer_wrapper']}>
                <ul className={styles['footer_social']}>
                    <li><a href="https://www.facebook.com/profile.php?id=100006843678031" target='_blank' rel="noreferrer" className="wow fadeInUp"><i className="fa fa-facebook" /></a></li>
                    <li><a href="https://github.com/dachev1919" target='_blank' rel="noreferrer" className="wow fadeInUp" data-wow-delay=".1s"><i className="fa fa-github" /></a></li>
                    <li><a href="https://ua.linkedin.com/in/oleh-dachev-b5b6501b7/uk" target='_blank' rel="noreferrer" className="wow fadeInUp" data-wow-delay=".2s"><i className="fa fa-linkedin" /></a></li>
                </ul>
                <p className="copyright">
                    © { currentYear } Dachev
                </p>
            </div>
        </footer>
    );
};

export default Footer;