import { useEffect, useRef } from 'react';
import './Experience.css'

export const Experience = ({ time, job, company, page, description }) => {
    const experienceArticle = useRef(null);

    useEffect(() => {
        const triggerAnimation = (entries) => {
            entries.forEach(entry => {
                entry.target.classList.toggle('unset', entry.isIntersecting);
            });
        };

        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.4
        };

        const observer = new IntersectionObserver(triggerAnimation, options);
        observer.observe(experienceArticle.current);
    }, []);
    return (
        <article className="experience__article" data-animation="up" ref={experienceArticle}>
            <section className='experience__time'>
                <p>{time}</p>
            </section>
            <section className='experience__info'>
                <div className='experience__titles'>
                    <h3>{job}</h3>
                    <a className='experience__company' href={page} target="_blank" rel="noopener noreferrer">{company}</a>
                </div>
                <p>{description}</p>
            </section>
        </article>
    )
}
