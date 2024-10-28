import Image from 'next/image'
import { logo } from '../../assets/index'

const MainLogo = ({ width, height }) => {
    return (
        <Image
            src={logo}
            alt='Logo de Mogno Woods'
            width={width}
            height={height}
            layout='reponsive'
        />
    )
}

export default MainLogo
