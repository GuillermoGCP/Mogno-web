import { barlow, barlowCondensed } from '../../assets/fonts/fonts'
import { MainLogo, Accordion } from '../components/index'
import Link from 'next/link'

const Footer = () => {
    const barlowCondensedClass = `${barlowCondensed.className}`
    const barlowClass = `${barlow.className}`
    const content = `Mogno Woods S.L. ha sido beneficiaria del Fondo Europeo de Desarrollo Regional cuyo objetivo es mejorar el uso y la calidad de las tecnologías de la información y de las comunicaciones y el acceso a las mismas y gracias al que ha implantado los siguientes proyectos: Auditoría Página Web y Cumplimiento LSSI-CE, y Seguridad de Correo Electrónico, para la mejora de competitividad y productividad de la empresa. Esta acción ha sido realizada en 2022. Para ello ha contado con el apoyo del programa CIBERSEGURIDAD de la Cámara de Comercio de Pontevedra, Vigo y Vilagarcía de Arousa. Una manera de hacer Europa.`
    const url =
        'https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg'

    return (
        <footer className=' text-white py-8 h-2/3 bg-mainColor'>
            <div
                className={` mx-auto px-4 ${barlowClass}  flex flex-col items-center`}
            >
                <div className='hidden md:flex'>
                    <MainLogo width={275} height={64} />
                </div>
                <div className='md:hidden'>
                    <MainLogo width={200} height={50} />
                </div>

                <div className='mb-8  text-md md:text-lg flex flex-col items-center'>
                    <h3>MOGNO WOODS S.L</h3>
                    <p>Calle Méndez Nuñez, 51</p>
                    <p>Marin · 36900 · Pontevedra</p>
                    <p>Galicia | España</p>
                </div>
                <div className='mb-4 flex flex-col items-center text-md md:text-lg text-gray-400'>
                    <p>© 2024 Mogno Woods S.L. El alma de la madera.</p>
                    <p>Madereros desde 2014.</p>
                </div>

                <Accordion content={content} url={url} />

                <div
                    className={` ${barlowCondensedClass} mt-10 flex justify-around`}
                >
                    <Link
                        href='/cookie-policy'
                        className='text-gray-300 hover:text-gray-400 p-2 md:p-8 text-sm md:text-lg '
                    >
                        POLÍTICA DE COOKIES
                    </Link>

                    <Link
                        href='/terms-and-conditions'
                        className='text-gray-300 hover:text-gray-400 p-2 md:p-8 text-sm md:text-lg '
                    >
                        TÉRMINOS Y CONDICIONES
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer
