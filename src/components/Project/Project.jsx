import { useEffect, useRef } from 'react';
import './Project.css';

import GitHubIcon from '../../assets/svg/github.svg';

export const Project = ({ type, name, description, repositories, page, techs, image }) => {

    const projectArticle = useRef(null);

    useEffect(() => {
        const triggerAnimation = (entries) => {
            entries.forEach(entry => {
                entry.target.classList.toggle('unset', entry.isIntersecting);
            });
        };

        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.5
        };

        const observer = new IntersectionObserver(triggerAnimation, options);
        observer.observe(projectArticle.current);
    }, []);

    return (
        <article className='project__article' data-animation="up" ref={projectArticle}>
            <section className='project__info'>
                <p className='project__type'>{type}</p>
                <h3 className='project__name'>{name}</h3>
                <p className='project__description'>{description}</p>
                <ul className='project__list'>
                    {
                        repositories.map((repository, index) => {
                            return (
                                <li key={index} className='project__item-repository'>
                                    <a href={repository.url} target="_blank" rel="noopener noreferrer"><img src={GitHubIcon} alt="Github Icon" width={22} height={21} />{repository.name}</a>
                                </li>
                            )
                        }
                        )
                    }
                </ul>
                <ul className='project__list'>
                    {
                        techs.map((tech, index) => {
                            return (
                                <li key={index} className='project__item-tech'><img src={tech} alt={`Icono-${index}`} width={25} height={25} /></li>
                            )
                        }
                        )
                    }
                </ul>
            </section>
            <figure className='project__figure'>
                <a href={page} target="_blank" rel="noopener noreferrer">
                    <img src={image} alt={name} title={name} />
                </a>
            </figure>
        </article>
    )
}
