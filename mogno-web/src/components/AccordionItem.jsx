'use client'
import { barlow, barlowCondensed } from '../app/fonts/fonts'
import React, { useEffect, useRef, useState } from 'react'
import Arrow from './svg/Arrow'

function AccordionItem({ title, content }) {
    const barlowFontClass = `${barlow.className}`
    const barlowCondensedFontClass = `${barlowCondensed.className}`
    const [isOpen, setIsOpen] = useState(false)
    const contentRef = useRef(null)

    const toggleAccordion = () => {
        setIsOpen((prev) => !prev)
    }

    // Centrar el contenido cuando se abre el acordeón:
    useEffect(() => {
        if (isOpen && contentRef.current) {
            contentRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            })
        }
    }, [isOpen])

    return (
        <div className='flex items-start rounded-lg overflow-hidden shadow-md transition-all duration-300 w-1/3 mx-7 space-x-4'>
            <div className='flex flex-col w-64'>
                <div
                    className={`flex justify-between items-center p-3 bg-[rgb(22,22,22)] hover:bg-[rgb(30,30,30)] cursor-pointer transition-colors duration-200 rounded-lg`}
                    onClick={toggleAccordion}
                >
                    <h3
                        className={`text-lg font-semibold text-gray-50 ${barlowCondensedFontClass}`}
                    >
                        {title}
                    </h3>
                    <span
                        className={`transform transition-transform duration-300 ${
                            isOpen ? 'rotate-180' : ''
                        }`}
                    >
                        <Arrow />
                    </span>
                </div>

                {/* Contenido desplegable */}
                <div
                    ref={contentRef}
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        isOpen ? '' : 'max-h-0'
                    }`}
                >
                    <div className='p-3 text-gray-100 bg-mainColor overflow-hidden'>
                        <p className={`text-lg ${barlowFontClass}`}>
                            {content}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AccordionItem
