'use client'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { barlow } from '../../assets/fonts/fonts'
import { BurguerMenu } from './index'

const CustomNav = ({ elementsArr }) => {
    const barlowFontClass = `${barlow.className}`
    const tailwindHeaderStyles = {
        navLi: 'hover:text-white text-lg lg:text-xl opacity-70 hover:opacity-100 transition duration-300 ease-in-out',
        ul: 'flex space-x-3 lg:space-x-8',
        dropdown: `absolute bg-gray-300 text-[rgb(22,22,22)] shadow-lg rounded-lg mt-2  z-10 ${barlowFontClass}`,
        dropdownLi: 'px-4 py-2 hover:bg-gray-200 transition duration-200',
    }

    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const menuRef = useRef(null)
    const handleLinkClick = () => {
        setIsOpen(false)
    }
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])
    return (
        <nav className={barlowFontClass}>
            <div className='relative'>
                {/* Contenedor relativo para el menú desplegable */}
                <button onClick={toggleMenu} className='md:hidden text-xl'>
                    <BurguerMenu />
                </button>
                {isOpen && (
                    <ul ref={menuRef} className={tailwindHeaderStyles.dropdown}>
                        {elementsArr.map((element, index) => (
                            <li
                                key={index}
                                className={tailwindHeaderStyles.dropdownLi}
                            >
                                <Link
                                    href={element.link}
                                    onClick={handleLinkClick}
                                >
                                    {element.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {/* Menú de navegación en pantallas grandes */}
            <ul className={`${tailwindHeaderStyles.ul} hidden md:flex`}>
                {elementsArr.map((element, index) => (
                    <li key={index}>
                        <Link
                            href={element.link}
                            className={tailwindHeaderStyles.navLi}
                        >
                            {element.text}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default CustomNav
