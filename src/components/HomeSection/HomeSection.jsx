import { useEffect, useRef } from 'react';
import { ButtonIcon } from '../ButtonIcon/ButtonIcon';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n/i18n';

import './HomeSection.css'

import LinkedinIcon from '../../assets/svg/linkedin.svg';
import MailIcon from '../../assets/svg/mail.svg';
import FileIcon from '../../assets/svg/file.svg';
import TranslateIcon from '../../assets/svg/translate.svg';
import Avatar from '../../assets/img/avatar.webp';


export const HomeSection = () => {
    const { t } = useTranslation();
    const homeInfo = useRef(null);
    const homeAvatar = useRef(null);

    useEffect(() => {
        const triggerAnimation = (entries) => {
            entries.forEach(entry => {
                entry.target.classList.toggle('unset', entry.isIntersecting);
            });
        };

        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.2
        };

        const observer = new IntersectionObserver(triggerAnimation, options);
        observer.observe(homeInfo.current);
        observer.observe(homeAvatar.current);
    }, []);

    const handleChangeLanguage = () => {
        if (i18n.language === 'en') {
            i18n.changeLanguage('es');
            localStorage.setItem('language', 'es');
        } else {
            i18n.changeLanguage('en');
            localStorage.setItem('language', 'en');
        }
    }

    return (
        <section className='home__section'>
            <article className='home__article' data-animation='fade-left' ref={homeInfo}>
                <div className='home__icons'>
                    <a href="mailto:maxi11carrillo@gmail.com"><img src={MailIcon} alt='Mail Icon' /></a>
                    <a href="https://www.linkedin.com/in/maximiliano-joaquin-carrillo/" target="_blank" rel="noopener noreferrer"><img src={LinkedinIcon} alt="Linkedin Icon" /></a>
                </div>
                <p className='home__puesto'>{t('Web Developer')}</p>
                <h1 className='home__titulo'>Maximiliano Carrillo</h1>
                <p className='home__description'>{t('Home Description')}</p>
                <div className='home__switch'>
                    <ButtonIcon
                        src={FileIcon}
                        title='CV'
                        href={i18n.language === 'en' ? 'https://drive.google.com/file/d/1oipx3SdYsdFBZpj6wDTYdvKzuJlzOr3l/view?usp=sharing' : 'https://drive.google.com/file/d/1bgLbq2b713fSkMxX5rDBIOEY-rsX00he/view?usp=sharing'}
                    />
                    <button className='home__switch' onClick={handleChangeLanguage}><img src={TranslateIcon} alt="translate icon" />{t('Switch')}</button>
                </div>
            </article>
            <figure className='home__figure' data-animation='fade-right' ref={homeAvatar}>
                <img src={Avatar} alt="Foto personal" title='Maximiliano Carrillo' width={350} height={350} />
            </figure>
        </section>
    )
}
