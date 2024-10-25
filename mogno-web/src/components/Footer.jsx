import { barlow, barlowCondensed } from '@/app/fonts/fonts'

const Footer = () => {
    const barlowCondensedClass = `${barlowCondensed.className}`
    const barlowClass = `${barlow.className}`
    return (
        <footer
            className=' text-white py-8 h-96'
            style={{ backgroundColor: 'rgb(22, 22, 22)' }}
        >
            <div className={`container mx-auto px-4 ${barlowClass}`}>
                <div className='mb-4'>
                    <h3 className='text-xl font-semibold'>MOGNO WOODS S.L</h3>
                    <p>Calle Méndez Nuñez, 51</p>
                    <p>Marin · 36900 · Pontevedra</p>
                    <p>Galicia | España</p>
                </div>
                <div className='mb-4'>
                    <p>
                        © 2024 Mogno Woods S.L. El alma de la madera. Todos los
                        derechos reservados.
                    </p>
                    <p>Madereros desde 2014.</p>
                </div>
                <div className='flex flex-wrap justify-between'>
                    <div className='mb-2'>
                        <p>Programa Ciberseguridad</p>
                        <p>Programa Xpande Digital</p>
                    </div>
                    <div className={`flex flex-col ${barlowCondensedClass}`}>
                        <a
                            href='/politica-de-cookies'
                            className='text-gray-400 hover:text-gray-200'
                        >
                            Política de Cookies
                        </a>
                        <a
                            href='/terminos-y-condiciones'
                            className='text-gray-400 hover:text-gray-200'
                        >
                            Términos y condiciones
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
