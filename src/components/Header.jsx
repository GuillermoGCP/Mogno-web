import { instagramIcon, linkedinIcon, XIcon } from '../../assets/index'
import { CustomNav, SocialIcons, MainLogo } from '../components/index'

const Header = () => {
    const iconsArr = [
        { link: 'https://www.instagram.com', icon: instagramIcon },
        { link: 'https://www.linkedin.com', icon: linkedinIcon },
        { link: 'https://www.twitter.com', icon: XIcon },
    ]
    const elementsArr = [
        { text: 'Inicio', link: '/' },
        { text: 'Servicios', link: '/services' },
        { text: 'Producto', link: '/product' },
        { text: 'Quienes somos', link: '/about' },
        { text: 'Contacto', link: '/contact' },
    ]
    return (
        <header className='text-white p-20 flex justify-between items-center h-52 bg-mainColor'>
            <div>
                <SocialIcons iconsArr={iconsArr} />
            </div>
            <div className='hidden md:flex'>
                <MainLogo width={275} height={64} />
            </div>
            <div className='md:hidden'>
                <MainLogo width={200} height={50} />
            </div>
            <div>
                <CustomNav elementsArr={elementsArr} />
            </div>
        </header>
    )
}

export default Header
