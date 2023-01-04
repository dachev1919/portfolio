import projects from "../data/projects.json";
import Project from "../components/Project";
import Header from "../components/Header";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import styles from './Projects.module.css';

const Projects = ({header, title, limit, customClass=''}) => {
    const pathname = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <>
            {!!header && <Header />}
            <div id="projects" className={`container ${customClass !== '' ? customClass : ''}`}>
                {!!title && (
                    <div className='dpfblock_header wow fadeInUp'>
                        <h2 className='dpfblock_title'>Projects</h2>
                        <div className='dpfblock_line' />
                    </div>
                )}
                <div className={`${styles['portfolio_projects']}`}>
                    {projects.map((project, index) => {
                        if (limit <= index && limit !== false) return false;

                        return (
                            <Project
                                key={index}
                                alt={`img-${index}`}
                                href={project.href}
                                image={project.image}
                                month={project.month}
                                number={project.number}
                                title={project.title}
                            />
                        )
                    })}
                </div>
            </div>
        </>
    );
};

export default Projects;