import { useTranslation } from 'react-i18next';
import { Project } from '../Project/Project';

import './ProjectSection.css'

import CSSIcon from '../../assets/svg/css.svg';
import React from '../../assets/svg/react.svg';
import HTMLIcon from '../../assets/svg/html5.svg';
import JavaScriptIcon from '../../assets/svg/javascript.svg';
import AngularIcon from '../../assets/svg/angular.svg';
import BootstrapIcon from '../../assets/svg/bootstrap.svg';
import NodeJsIcon from '../../assets/svg/nodejs.svg';
import SequelizeIcon from '../../assets/svg/sequelize.svg';
import ExpressIcon from '../../assets/svg/expressjs_dark.svg';
import MongoDbIcon from '../../assets/svg/mongodb.svg';
import ChartjsIcon from '../../assets/svg/chartjs.svg';
import MySQLIcon from '../../assets/svg/mysql.svg';
import SpringIcon from '../../assets/svg/spring.svg'
import AntDesignIcon from '../../assets/svg/ant-design.svg';
import FigmaIcon from '../../assets/svg/figma.svg';
import JavaIcon from '../../assets/svg/java.svg'

import BirabarImage from '../../assets/img/birabar.webp';
import MaxweatherImage from '../../assets/img/maxweather.webp';
import MoffySportsImage from '../../assets/img/moffysports.webp';
import RecruitingImage from '../../assets/img/recruiting.webp';
import PlaxImage from '../../assets/img/plax.webp';

export const ProjectSection = () => {
    const { t } = useTranslation();

    const projects = [
        {
            type: 'Fullstack',
            name: 'Plax',
            description: t('Plax Description'),
            repositories: [{
                name: 'Code',
                url: 'https://github.com/MaxiCarrillo/plax-professional-developer'
            }],
            page: 'https://github.com/MaxiCarrillo/plax-professional-developer',
            techs: [React, AntDesignIcon, CSSIcon, FigmaIcon, SpringIcon, JavaIcon, MySQLIcon],
            image: PlaxImage
        },
        {
            type: 'Fullstack',
            name: 'Recruiting RH',
            description: t('Recruiting RH Description'),
            repositories: [{
                name: 'Code',
                url: 'https://github.com/nachopad/challenge_dh'
            }],
            page: 'https://github.com/nachopad/challenge_dh',
            techs: [React, NodeJsIcon, SequelizeIcon, ExpressIcon],
            image: RecruitingImage
        },
        {
            type: 'Fullstack',
            name: 'Moffy Sports',
            description: t('MoffySports Description'),
            repositories: [{
                name: 'Code',
                url: 'https://github.com/Sofi231098/grupo_13_moffy/'
            }],
            page: 'https://github.com/Sofi231098/grupo_13_moffy/',
            techs: [HTMLIcon, CSSIcon, JavaScriptIcon, NodeJsIcon, SequelizeIcon, ExpressIcon],
            image: MoffySportsImage
        },
        {
            type: 'Frontend',
            name: 'Maxweather',
            description: t('Maxweather Description'),
            repositories: [{
                name: 'Code',
                url: 'https://github.com/MaxiCarrillo'
            }],
            page: 'https://maxweather-maxdev.netlify.app/',
            techs: [HTMLIcon, CSSIcon, JavaScriptIcon],
            image: MaxweatherImage
        },
        {
            type: 'Fullstack',
            name: 'Birabar',
            description: t('Birabar Description'),
            repositories: [{
                name: 'Code',
                url: 'https://github.com/nachopad/angular-birabar-restobar'
            }],
            page: 'https://birabar-frontend.onrender.com/principal',
            techs: [AngularIcon, ChartjsIcon, NodeJsIcon, MongoDbIcon, BootstrapIcon],
            image: BirabarImage
        }];

    return (
        <section className='project__section'>
            <h2 className="project__titulo">{t('Projects')}</h2>
            {
                projects.map((project, index) => {
                    return (
                        <Project key={index} type={project.type} name={project.name} description={project.description} repositories={project.repositories} page={project.page} techs={project.techs} image={project.image} />
                    )
                })
            }


        </section>
    )
}
