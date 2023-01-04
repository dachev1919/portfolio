import styles from './Project.module.css';

const Project = (props) => {
    const {href, image, month, number, title, alt} = props;
    const domain = 'https://dachev1919.github.io/portfolio/';

    return (
        <div className={styles.project}>
            <div className={`${styles['project_wrapper']} wow zoomIn`}>
                <a href={href} target='_blank' rel="noreferrer">
                    <figure>
                        <img src={`${domain}${image}`} alt={alt}/>
                        <figcaption>
                            <h2><span>{month} </span>{number}</h2>
                            <p>{title}</p>
                        </figcaption>
                    </figure>
                </a>
            </div>
        </div>
    );
};

export default Project;