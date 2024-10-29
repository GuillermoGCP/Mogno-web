'use client'
import React, { useState } from 'react'
import { barlow, barlowCondensed } from '../../../assets/fonts/fonts'

const Contact = () => {
    const barlowFontClass = `${barlow.className}`
    const barlowCondensedClass = `${barlowCondensed.className}`
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        email: '',
        subject: '',
        comments: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div
            className={`bg-gray-50 max-w-3xl mx-auto rounded-lg ${barlowFontClass} mt-24 p-8 shadow-xl`}
        >
            <h1
                className={`text-5xl font-bold mb-4 ${barlowCondensedClass} text-center `}
            >
                Contáctanos
            </h1>
            <p className='mb-4 italic text-center leading-relaxed'>
                Por favor, completa el siguiente formulario y nos pondremos en
                contacto contigo.
            </p>

            <form id='contact' className='space-y-6' onSubmit={handleSubmit}>
                <div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
                    <div>
                        <label
                            htmlFor='name'
                            className={`text-sm font-medium text-gray-700 ${barlowFontClass}`}
                        >
                            Nombre
                        </label>
                        <input
                            type='text'
                            id='name'
                            name='name'
                            value={formData.name}
                            onChange={handleChange}
                            className='mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2D2D2D] focus:border-transparent'
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor='surname'
                            className='text-sm font-medium text-gray-700'
                        >
                            Apellido
                        </label>
                        <input
                            type='text'
                            id='surname'
                            name='surname'
                            value={formData.surname}
                            onChange={handleChange}
                            className='mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2D2D2D] focus:border-transparent'
                            required
                        />
                    </div>
                </div>
                <div>
                    <label
                        htmlFor='email'
                        className='text-sm font-medium text-gray-700'
                    >
                        Correo electrónico
                    </label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                        className='mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2D2D2D] focus:border-transparent'
                        required
                    />
                </div>
                <div>
                    <label
                        htmlFor='subject'
                        className='text-sm font-medium text-gray-700'
                    >
                        Asunto
                    </label>
                    <input
                        type='text'
                        id='subject'
                        name='subject'
                        value={formData.subject}
                        onChange={handleChange}
                        className='mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2D2D2D] focus:border-transparent'
                        required
                    />
                </div>
                <div>
                    <label
                        htmlFor='comments'
                        className='text-sm font-medium text-gray-700'
                    >
                        Mensaje
                    </label>
                    <textarea
                        id='comments'
                        name='comments'
                        value={formData.comments}
                        onChange={handleChange}
                        className='mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2D2D2D] focus:border-transparent h-32'
                    ></textarea>
                </div>
                <div className='text-center'>
                    <button
                        type='submit'
                        className='w-full sm:w-auto px-8 py-3 bg-mainColor text-white font-semibold rounded-lg shadow-lg hover:bg-[rgb(33,33,33)] transition duration-200'
                    >
                        Enviar Mensaje
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Contact
