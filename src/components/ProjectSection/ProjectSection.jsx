import { useTranslation } from 'react-i18next';
import { Project } from '../Project/Project';
import './ProjectSection.css';
import { projects } from './ProjectsData';

export const ProjectSection = () => {

    const { t } = useTranslation();

    return (
        <section className='project__section'>
            <h2 className="project__titulo">{t('Projects')}</h2>
            {
                projects.map((project, index) => {
                    return (
                        <Project
                            key={index}
                            type={project.type}
                            name={project.name}
                            description={t(project.description)}
                            repositories={project.repositories}
                            page={project.page}
                            techs={project.techs}
                            image={project.image}
                        />
                    )
                })
            }


        </section>
    )
}
