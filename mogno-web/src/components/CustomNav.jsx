import Link from 'next/link'
import { barlow } from '../app/fonts/fonts'

const CustomNav = ({ elementsArr }) => {
    const barlowFontClass = `${barlow.className}`
    const tailwindHeaderStyles = {
        navLi: 'hover:text-white text-xl opacity-70 hover:opacity-100 transition duration-300 ease-in-out',
        ul: 'flex space-x-4',
    }

    return (
        <nav className={barlowFontClass}>
            <ul className={tailwindHeaderStyles.ul}>
                {elementsArr.map((element, index) => {
                    return (
                        <li key={index}>
                            <Link
                                href={element.link}
                                className={tailwindHeaderStyles.navLi}
                            >
                                {element.text}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default CustomNav
