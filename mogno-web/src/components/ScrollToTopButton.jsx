'use client'
import React, { useState, useEffect } from 'react'

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 200) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }
        window.addEventListener('scroll', toggleVisibility)
        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        isVisible && (
            <button
                onClick={scrollToTop}
                aria-label='Back to top'
                className='fixed bottom-6 right-6 p-2 rounded-full bg-gray-200 hover:bg-gray-300 shadow-lg transition transform hover:scale-110'
            >
                <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                        d='M12 4L12 20M12 4L7 9M12 4L17 9'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                    />
                </svg>
            </button>
        )
    )
}

export default ScrollToTopButton
