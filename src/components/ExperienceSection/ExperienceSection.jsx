import { useTranslation } from 'react-i18next';
import { Experience } from "../Experience/Experience"

import './ExperienceSection.css'

export const ExperienceSection = () => {
    const { t } = useTranslation();
    
    const experiences = [
        {
            time: '2024',
            job: 'Frontend Developer',
            company: 'Fujimi Technos',
            page: 'https://www.fujimitechnos.group/',
            description: t('Fujimi Technos Description')
        },
        {
            time: '2023 - 2024',
            job: 'Fullstack Developer',
            company: t('Ministry of Health of Jujuy'),
            page: 'https://salud.jujuy.gob.ar/',
            description: t('Ministry of Health of Jujuy Description')
        }
    ]

    return (
        <section className="experience__section">
            <h2 className="experience__titulo">{t('Experience')}</h2>
            {
                experiences.map((experience, index) => {
                    return (
                        <Experience key={index} time={experience.time} job={experience.job} company={experience.company} page={experience.page} description={experience.description} />
                    )
                })
            }
        </section>
    )
}
