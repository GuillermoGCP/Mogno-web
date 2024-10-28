import { Header } from '../components'
import ScrollToTopButton from '../components/ScrollToTopButton'
import '../styles/globals.css'

export const metadata = {
    title: 'Mogno Woods',
    description: 'El alma de la madera',
}

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body>
                <Header />
                <ScrollToTopButton />
                {children}
            </body>
        </html>
    )
}
