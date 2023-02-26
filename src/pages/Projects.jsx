import projects from "../common/data/projects.json";
import Project from "../components/Project";
import Header from "../components/Header";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from './Projects.module.css';
import arrowUp from '../common/img/arrow-up.svg';
import arrowDown from '../common/img/arrow-down.svg';

const Projects = ({header, title, limit, customClass=''}) => {
    const [projectList, setProjectList] = useState([...projects].reverse());
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
                        <div className={`${styles['projects__filter']}`}>
                            <button className={`${styles['projects__filter-up']}`} onClick={() => setProjectList([...projects].reverse())}>Newest <img src={arrowUp} alt=""/></button>
                            <button className={`${styles['projects__filter-down']}`} onClick={() => setProjectList([...projects])}>Oldest <img src={arrowDown} alt=""/></button>
                        </div>
                    </div>
                )}
                <div className={`${styles['portfolio_projects']}`}>
                    {projectList.map((project, index) => {
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
                                year={project.year}
                            />
                        )
                    })}
                </div>
            </div>
        </>
    );
};

export default Projects;