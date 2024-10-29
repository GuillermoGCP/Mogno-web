import Image from 'next/image'
import { logo } from '../../assets/index'

const MainLogo = ({ width, height, responsive }) => {
    return (
        <Image
            src={logo}
            alt='Logo de Mogno Woods'
            width={width}
            height={height}
            layout={responsive}
        />
    )
}

export default MainLogo
