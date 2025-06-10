import AngularIcon from '../../assets/svg/angular.svg';
import AntDesignIcon from '../../assets/svg/ant-design.svg';
import BootstrapIcon from '../../assets/svg/bootstrap.svg';
import CSSIcon from '../../assets/svg/css.svg';
import ExpressIcon from '../../assets/svg/expressjs_dark.svg';
import FigmaIcon from '../../assets/svg/figma.svg';
import JavaIcon from '../../assets/svg/java.svg';
import JavaScriptIcon from '../../assets/svg/javascript.svg';
import JWTIcon from '../../assets/svg/jwt.svg';
import MongoDbIcon from '../../assets/svg/mongodb.svg';
import MySQLIcon from '../../assets/svg/mysql.svg';
import NextJSIcon from '../../assets/svg/nextjs.svg';
import NodeJsIcon from '../../assets/svg/nodejs.svg';
import React from '../../assets/svg/react.svg';
import ReactQueryIcon from '../../assets/svg/reactquery.svg';
import ReactRouterIcon from '../../assets/svg/reactrouter.svg';
import SequelizeIcon from '../../assets/svg/sequelize.svg';
import SpringIcon from '../../assets/svg/spring.svg';
import TanstackIcon from '../../assets/svg/tanstack.svg';
import TypescriptIcon from '../../assets/svg/typescript.svg';
import ZodIcon from '../../assets/svg/zod.svg';
import TailwindIcon from '../../assets/svg/tailwindcss.svg';
import StoryBookIcon from '../../assets/svg/storybook.svg';
import RedisIcon from '../../assets/svg/redis.svg';

import BirabarImage from '../../assets/img/birabar.webp';
import MoffySportsImage from '../../assets/img/moffysports.webp';
import PlaxImage from '../../assets/img/plax.webp';
import PreventsImage from '../../assets/img/prevents.webp';
import SocialDeathStarImage from '../../assets/img/socialdeathstar.webp';

export const projects = [
    {
        type: 'Frontend',
        name: 'Prevents',
        description: 'Prevents Description',
        repositories: [{
            name: 'Code',
            url: 'https://github.com/Sofi231098/prevents'
        }],
        page: 'https://sofi231098.github.io/prevents/',
        techs: [
            {
                name: 'React',
                icon: React
            },
            {
                name: 'Typescript',
                icon: TypescriptIcon
            },
            {
                name: 'React Query',
                icon: ReactQueryIcon
            },
            {
                name: 'Tanstack',
                icon: TanstackIcon
            },
            {
                name: 'React Router',
                icon: ReactRouterIcon
            },
            {
                name: 'Zod',
                icon: ZodIcon
            },
            {
                name: 'CSS',
                icon: CSSIcon
            },
            {
                name: 'Figma',
                icon: FigmaIcon
            }],
        image: PreventsImage
    },
    {
        type: 'Fullstack',
        name: 'Plax',
        description: 'Plax Description',
        repositories: [{
            name: 'Code',
            url: 'https://github.com/MaxiCarrillo/plax-professional-developer'
        }],
        page: 'https://github.com/MaxiCarrillo/plax-professional-developer',
        techs: [
            {
                name: 'React',
                icon: React
            },
            {
                name: 'Ant Design',
                icon: AntDesignIcon
            },
            {
                name: 'CSS',
                icon: CSSIcon
            },
            {
                name: 'Figma',
                icon: FigmaIcon
            },
            {
                name: 'Spring',
                icon: SpringIcon
            },
            {
                name: 'Java',
                icon: JavaIcon
            },
            {
                name: 'MySQL',
                icon: MySQLIcon
            },
            {
                name: 'JWT',
                icon: JWTIcon
            }
        ],
        image: PlaxImage
    },
    {
        type: 'Fullstack',
        name: 'Social Death Star',
        description: 'Social Death Star Description',
        repositories: [{
            name: 'Code',
            url: 'https://github.com/MaxiCarrillo/social-death-star'
        }],
        page: 'https://github.com/MaxiCarrillo/social-death-star',
        techs: [
            {
                name: 'NextJS',
                icon: NextJSIcon
            },
            {
                name: 'React',
                icon: React
            },
            {
                name: 'Tailwind',
                icon: TailwindIcon
            },
            {
                name: 'Typescript',
                icon: TypescriptIcon
            },
            {
                name: 'Redis',
                icon: RedisIcon
            },
            {
                name: 'Storybook',
                icon: StoryBookIcon
            }
        ],
        image: SocialDeathStarImage
    },
    {
        type: 'Fullstack',
        name: 'Moffy Sports',
        description: 'MoffySports Description',
        repositories: [{
            name: 'Code',
            url: 'https://github.com/Sofi231098/grupo_13_moffy/'
        }],
        page: 'https://github.com/Sofi231098/grupo_13_moffy/',
        techs: [
            {
                name: 'React',
                icon: React
            },
            {
                name: 'CSS',
                icon: CSSIcon
            },
            {
                name: 'Node.js',
                icon: NodeJsIcon
            },
            {
                name: 'JavaScript',
                icon: JavaScriptIcon
            },
            {
                name: 'Sequelize',
                icon: SequelizeIcon
            },
            {
                name: 'Express.js',
                icon: ExpressIcon
            },
            {
                name: 'MySQL',
                icon: MySQLIcon
            }
        ],
        image: MoffySportsImage
    },
    {
        type: 'Fullstack',
        name: 'Birabar',
        description: 'Birabar Description',
        repositories: [{
            name: 'Code',
            url: 'https://github.com/nachopad/angular-birabar-restobar'
        }],
        page: 'https://birabar-frontend.onrender.com/principal',
        techs: [
            {
                name: 'Angular',
                icon: AngularIcon
            },
            {
                name: 'CSS',
                icon: CSSIcon
            },
            {
                name: 'Bootstrap',
                icon: BootstrapIcon
            },
            {
                name: 'JavaScript',
                icon: JavaScriptIcon
            },
            {
                name: 'Node.js',
                icon: NodeJsIcon
            },
            {
                name: 'Express.js',
                icon: ExpressIcon
            },
            {
                name: 'MongoDB',
                icon: MongoDbIcon
            }
        ],
        image: BirabarImage
    }];