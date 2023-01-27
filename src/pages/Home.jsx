import { useEffect } from "react";
import {NavLink, useLocation} from "react-router-dom";
import styles from './Home.module.css';
import Header from "../components/Header";
import Projects from "./Projects";

const WOW = require('wowjs');

const SECTION_IDS = ['home', 'services', 'portfolio', 'skills'];

const Home = ({scrollLink, smoothScroll}) => {
    const pathname = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    useEffect(() => {
        window.wow = new WOW.WOW({
            live: false,
            mobile: false
        });

        window.wow.init();
    }, []);

    return (
        <>
            <section id='home' className={styles['dpf_intro']}>
                <div className={styles['dpf_intro__overlay']} />
                <div className={styles['dpf_intro__content']}>
                    <div className={styles['dpf_intro__text']}>Hello, my name is Oleh Dachev and I am</div>
                    <h1 className={styles['dpf_intro__h1']}>Front-end Developer</h1>
                    <div className={styles['dpf_intro__text']}>development of websites and add-ons using popular tools</div>
                </div>
                <a href={`#${scrollLink}`} onClick={(event) => smoothScroll(event, scrollLink)}>
                    <div className={styles['dpf_intro__scroll-down']}>
            <span>
                <i className="fa fa-angle-down fa-2x" />
            </span>
                    </div>
                </a>
            </section>

            <Header sectionIds={SECTION_IDS} smoothScroll={smoothScroll} />

            <section id="services" className='dpfblock dpfblock_gray'>
                <div className="container">
                    <div>
                        <div>
                            <div className='dpfblock_header wow fadeInUp'>
                                <h2 className='dpfblock_title'>This is what I do</h2>
                                <div className='dpfblock_line' />
                                <div className='dpfblock_subtitle'>
                                    “Don’t let the noise of others opinions drown out your own inner voice.”
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles['services_blocks']}>
                        <div className={styles['services_block']}>
                            <div className={`${styles['services_block__container']} wow slideInLeft`}>
                                <div className={styles['services_block__icon']}>
                                    <span className="icon-magic-wand" />
                                </div>
                                <div>
                                    <h3 className={styles['services_block__title']}>Web Design</h3>
                                    <div className={styles['services_block__text']}>
                                        Experience developing website templates. I've been creating
                                        webpages in Photoshop(version 2018 and up) from scratch to
                                        expand my personal skills. In addition to the above, working
                                        with Figma since 2020. Experience has shown that I can easily
                                        adapt to the required tool.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles['services_block']}>
                            <div className={`${styles['services_block__container']} wow slideInLeft`}>
                                <div className={styles['services_block__icon']}>
                                    <span className="icon-puzzle" />
                                </div>
                                <div>
                                    <h3 className={styles['services_block__title']}>Web Programming</h3>
                                    <div className={styles['services_block__text']}>
                                        More than three years of website layout experience,
                                        two years of commercial experience. Developed a lot
                                        of websites, landings, etc. using: html5/css3/JavaScript(React.js/Typescript);
                                        libraries such as jQuery, Bootstrap 4-5; Sass/Scss preprocessors;
                                        gulp task manager and various add-ons.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles['services_block']}>
                            <div className={`${styles['services_block__container']} wow slideInRight`}>
                                <div className={styles['services_block__icon']}>
                                    <span className="icon-settings" />
                                </div>
                                <div>
                                    <h3 className={styles['services_block__title']}>Programming</h3>
                                    <div className={styles['services_block__text']}>
                                        Independent, as well as by the requirements of educational institutions,
                                        studied different programming languages(Php7, Liquid, Python3, C++, java, C)
                                        and programming paradigms(OOP, functional programming). The source code of
                                        many developed programs can be found on githab.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles['services_block']}>
                            <div className={`${styles['services_block__container']} wow slideInRight`}>
                                <div className={styles['services_block__icon']}>
                                    <span className="icon-users" />
                                </div>
                                <div>
                                    <h3 className={styles['services_block__title']}>Work in a team</h3>
                                    <div className={styles['services_block__text']}>
                                        I'm sociable and friendly, easily find common language and adapt to different people.
                                        "Working in a team, don't be afraid to take the initiative to improve the
                                        product, if necessary" is my motto. Significantly improved my communication skills by working with
                                        and supporting customers.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="portfolio" className='dpfblock'>
                <div className="container" style={{textAlign: "center"}}>
                    <div>
                        <div>
                            <div className='dpfblock_header wow fadeInUp'>
                                <h2 className='dpfblock_title'>My works</h2>
                                <div className='dpfblock_line' />
                                <div className='dpfblock_subtitle'>"It is easier to invent the future than to predict it."</div>
                            </div>
                        </div>
                    </div>
                    <Projects header={false} title={false} limit={6} />
                    <NavLink className={styles['dpfblock_show-more']} to={'/portfolio/projects'}>Show More</NavLink>
                </div>
            </section>

            <section id="skills" className='dpfblock dpfblock_gray'>
                <div className="container">
                    <div>
                        <div className='dpfblock_header wow fadeInUp'>
                            <h2 className='dpfblock_title'>About me</h2>
                            <div className='dpfblock_line' />
                            <div className='dpfblock_subtitle dpfblock_paragraph wow slideInRight text-left'>
                                My name is Oleg, I am 23 years old. This year I graduated from Admiral Makarov
                                National University of Shipbuilding with bachelor's degree and continued my studies
                                to get master's degree in "software engineering". Began studies at Nikolaev Construction
                                College of Kyiv National University of Civil Engineering and Architecture, received an associate degree in software engineering.
                            </div>
                            <div className='dpfblock_subtitle dpfblock_paragraph wow slideInRight text-left'>

                                From November 2020 till December 2022 I worked as full-stack developer. My duties included:
                                development of themes, modules and add-ons for PrestaShop(using HTML, CSS, JS, PHP/Smarty),
                                followed by support(work with clients) and since December 2021 implementing themes, add-ons for Shopify.
                            </div>
                            <div className='dpfblock_subtitle dpfblock_paragraph wow slideInRight text-left'>
                                The result of my work from November 1, 2020 to December 1, 2022:
                                <span className="dpfblock_enum">- I mastered cms Prestashop and Shopify from scratch in a short period of time;</span>
                                <span className="dpfblock_enum">- Developed over 30 themes for Prestashop and 10 Shopify themes;</span>
                                <span className="dpfblock_enum">- Created more than 20 modules and add-ons for Prestashop;</span>
                                <span className="dpfblock_enum">- Answered and solved the problems of more than 1,000 customers;</span>
                                <span className="dpfblock_enum">- Created documentation for Prestashop and Shopify themes/modules;</span>
                                <span className="dpfblock_enum">- Acted as a mentor for a new employee.</span>
                            </div>

                            <h2 className='dpfblock_title' style={{marginTop: '30px'}}>Professional skills</h2>
                            <div className='dpfblock_line' />
                            <p className='dpfblock_subtitle wow slideInLeft text-left'>
                                Programming languages: JavaScript, PHP;
                            </p>
                            <p className='dpfblock_subtitle wow slideInLeft text-left'>
                                Additional languages and libraries: HTML, CSS(SCSS/SASS), React, Smarty, Liquid, jQuery, Bootstrap 4/5;
                            </p>
                            <p className='dpfblock_subtitle wow slideInLeft text-left'>
                                Operating systems: Windows;
                            </p>
                            <p className='dpfblock_subtitle wow slideInLeft text-left'>
                                Additional skills: Npm, Gulp, Git, OOP;
                            </p>
                            <p className='dpfblock_subtitle wow slideInLeft text-left'>
                                Databases: MySQL;
                            </p>
                            <p className='dpfblock_subtitle wow slideInLeft text-left'>
                                Development tools: PhpStorm, VS Code, Sublime Text;
                            </p>
                            <p className='dpfblock_subtitle wow slideInLeft text-left'>
                                Algorithms: Understanding of basic algorithms;
                            </p>
                            <p className='dpfblock_subtitle wow slideInLeft text-left'>
                                Graphic editors: Figma, Adobe Photoshop(2018 and higher);
                            </p>
                            <p className='dpfblock_subtitle wow slideInLeft text-left'>
                                Also studied: Python(language version 3 and higher), C/C++/Java(basic syntax, writing laboratory works).
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;