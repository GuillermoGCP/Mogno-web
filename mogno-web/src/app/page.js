import { Footer, Header } from '../components/index'

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <video
                    src='https://www.mogno.es/wp-content/uploads/2024/05/MOGNO_FERIA.mp4'
                    controls
                    loop
                    muted
                    playsInline
                    preload='none'
                    autoPlay
                    className='el-image'
                    style={{ aspectRatio: '2560 / auto' }}
                    width='2560'
                    height='auto'
                ></video>
            </main>
            <Footer />
        </>
    )
}
