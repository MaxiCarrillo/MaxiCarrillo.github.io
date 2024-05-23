import './ButtonIcon.css';

export const ButtonIcon = ({ src, title, href }) => {
    return (
        <a className='button-icon' href={href} target="_blank" rel="noopener noreferrer">
            <img src={src} alt="FileIcon" />
            {title}
        </a>
    )
}
