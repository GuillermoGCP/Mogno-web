import Image from 'next/image'
import { instagramIcon, linkedinIcon, XIcon, logo } from '../../assets/index'
import SocialIcons from '../components/SocialIcons'
import CustomNav from '../components/CustomNav'

const Header = () => {
    const iconsArr = [
        { link: 'https://www.instagram.com', icon: instagramIcon },
        { link: 'https://www.linkedin.com', icon: linkedinIcon },
        { link: 'https://www.twitter.com', icon: XIcon },
    ]
    const elementsArr = [
        { text: 'Inicio', link: '/' },
        { text: 'Quienes somos', link: '/about' },
        { text: 'Contacto', link: '/contact' },
    ]
    return (
        <header className='text-white p-20 flex justify-between items-center h-28 bg-mainColor'>
            <SocialIcons iconsArr={iconsArr} />
            <Image
                src={logo}
                alt='Logo de Mogno Woods'
                width={275}
                height={64}
            />
            <CustomNav elementsArr={elementsArr} />
        </header>
    )
}

export default Header
