import Image from 'next/image'

const SocialIcon = ({ link, icon }) => {
    const aria = link.split('.')[1]
    const socialName = aria.charAt().toUpperCase() + aria.slice(1)
    return (
        <a
            href={link}
            target='_blank'
            rel='noopener noreferrer'
            aria-label={socialName}
            className='transition duration-300 ease-in-out hover:opacity-100 opacity-70'
        >
            <Image
                src={icon}
                alt={`Icono de ${socialName}`}
                width={28}
                height={28}
            />
        </a>
    )
}

export default SocialIcon
