import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources: {
            en: {
                translation: {
                    "Web Developer": "Programmer Analyst",
                    "Home Description": "Developing fantastic experiences",
                    Currently: "Present",
                    Switch: "Cambiar a Español",
                    Experience: "Experience",
                    "Jujuy Public Prosecutor's Office": "Jujuy Public Prosecutor's Office",
                    "MPA Description": "I develop the user interface of the application using ReactTS, leveraging libraries like React Query and Zustand. I collaborate with designers and backend developers to create reusable components and define the architecture of various modules. I prioritize code quality by avoiding technical debt, optimizing performance, and continuously refactoring to improve the project's maintainability.",
                    "Ministry of Health of Jujuy":
                        "Ministry of Health of Jujuy",
                    "Ministry of Health of Jujuy Description":
                        "I worked collaboratively to develop a web application. This application allows you to optimize the research management of researchers located in the province of Jujuy. I implemented the best web practices to make the development team aware of how important it is to have a good level of SEO and web accessibility.",
                    "Fujimi Technos Description":
                        "I developed a static website with the best current practices. The site has good performance, high SEO and accessibility, which allowed the company to obtain a better profile. I also managed the domain and hosting of the site to obtain metrics for the company.",
                    Projects: "Projects",
                    "Maxweather Description":
                        "A simple web application that allows you to get the weather of any city.",
                    "Birabar Description":
                        "Management web application designed specifically for a restobar.",
                    "MoffySports Description":
                        "E-commerce specialized in sports shoes, which offers a wide range of models for all styles and needs.",
                    "Recruiting RH Description":
                        "The main objective is to develop a web application that allows users to view a catalogue of job applicants.",
                    "Plax Description":
                        "PLAX is an online platform that allows you to book your next accommodation quickly and easily. Find the perfect place for your vacation or business trip."
                },
            },
            es: {
                translation: {
                    "Web Developer": "Analista Programador",
                    "Home Description":
                        "Desarrollando experiencias fantásticas",
                    Currently: "Presente",
                    Switch: "Switch to English",
                    Experience: "Experiencia",
                    "Jujuy Public Prosecutor's Office": "Ministerio Público de la Acusación de Jujuy",
                    "MPA Description": "Desarrollo la interfaz de usuario de la aplicación con ReactTS, utilizando librerías como React Query y Zustand. Trabajo en equipo con diseñadores y backend para crear componentes reutilizables y definir la arquitectura de los módulos. Priorizo la calidad del código, evitando deudas técnicas, optimizando el rendimiento y refactorizando constantemente para mejorar la mantenibilidad del proyecto.",
                    "Ministry of Health of Jujuy":
                        "Ministerio de Salud de Jujuy",
                    "Ministry of Health of Jujuy Description":
                        "Trabajé colaborativamente para desarrollar una aplicación web. Esta aplicación permite optimizar la gestión de investigaciones de investigadores ubicados en la provincia de Jujuy. Implementé las mejores prácticas web para concientizar al equipo de desarrollo de lo importante que es tener un buen nivel de SEO y accesibilidad web.",
                    "Fujimi Technos Description":
                        "Desarrollé con las mejores prácticas de la actualidad un sitio web estático. El sitio cuenta con un buen rendimiento, alto nivel de SEO y accesibilidad lo cual le permitió a la empresa obtener un mejor perfil. Además administre el dominio y hosting del sitio para obtener métricas para la empresa.",
                    Projects: "Proyectos",
                    "Maxweather Description":
                        "Una aplicación web sencilla que permite obtener el clima de cualquier ciudad.",
                    "Birabar Description":
                        "Aplicación web de gestión diseñada específicamente para un restobar.",
                    "MoffySports Description":
                        "E-commerce especializado en zapatillas, que ofrece una amplia gama de modelos para todos los estilos y necesidades.",
                    "Recruiting RH Description":
                        "El objetivo principal es desarrollar una aplicación web que permita a los usuarios ver un catálogo de aspirantes para puestos de trabajo.",
                    "Plax Description":
                        "PLAX es una plataforma en línea que te permite reservar tu próximo alojamiento de forma rápida y sencilla. Encuentra el lugar perfecto para tus vacaciones o viaje de negocios."
                },
            },
        },
        lng: localStorage.getItem('language') || 'es', // language to use, more languages can be added later
        fallbackLng: "es", // use en if detected lng is not available
        interpolation: {
            escapeValue: false, // react already safes from xss
        },
    });

export default i18n;
