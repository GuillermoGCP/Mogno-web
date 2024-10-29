import { barlow, barlowCondensed } from '../../../assets/fonts/fonts'
import Link from 'next/link'

const TermsAndConditions = () => {
    const barlowCondensedClass = `${barlowCondensed.className}`
    const barlowClass = `${barlow.className}`

    return (
        <div
            className={`p-8 text-[rgb(30,30,30)] bg-gray-50 max-w-5xl mx-auto rounded-lg ${barlowClass} mt-10 border shadow-xl`}
        >
            <h1
                className={`text-5xl font-bold mb-4 ${barlowCondensedClass} text-center`}
            >
                TÉRMINOS Y CONDICIONES
            </h1>
            <p className='mb-4 italic text-center leading-relaxed'>
                Los términos y condiciones se actualizaron por última vez el 2
                de mayo de 2023.
            </p>

            <h2
                className={`text-xl font-semibold mb-2 ${barlowCondensedClass}`}
            >
                1. Introducción
            </h2>
            <p className='mb-4 leading-relaxed text-justify'>
                Estos Términos y condiciones se aplican a este sitio web y a las
                transacciones relacionadas con nuestros productos y servicios.
                Usted puede estar obligado por contratos adicionales
                relacionados con su relación con nosotros o con cualquier
                producto o servicio que reciba de nosotros. Si alguna de las
                disposiciones de los contratos adicionales entra en conflicto
                con alguna de las disposiciones de estas Condiciones, las
                disposiciones de estos contratos adicionales prevalecerán.
            </p>

            <h2
                className={`text-xl font-semibold mb-2 ${barlowCondensedClass}`}
            >
                2. Vinculación
            </h2>
            <p className='mb-4 leading-relaxed text-justify'>
                Al registrarse en este sitio web, acceder a él o utilizarlo de
                cualquier otro modo, usted acepta someterse a las condiciones
                que se exponen a continuación. El mero uso de este sitio web
                implica el conocimiento y la aceptación de estos Términos y
                condiciones. En algunos casos particulares, también podemos
                pedirle que lo acepte explícitamente.
            </p>

            <h2
                className={`text-xl font-semibold mb-2 ${barlowCondensedClass}`}
            >
                3. Comunicación electrónica
            </h2>
            <p className='mb-4 leading-relaxed text-justify'>
                Al utilizar este sitio web o comunicarse con nosotros por medios
                electrónicos, usted acepta y reconoce que podemos comunicarnos
                con usted electrónicamente en nuestro sitio web o enviarle un
                correo electrónico, y acepta que todos los acuerdos, avisos,
                divulgaciones y otras comunicaciones que le proporcionemos
                electrónicamente satisfacen cualquier requisito legal, incluido,
                entre otros, el requisito de que dichas comunicaciones sean por
                escrito.
            </p>

            <h2
                className={`text-xl font-semibold mb-2 ${barlowCondensedClass}`}
            >
                4. Propiedad intelectual
            </h2>
            <p className='mb-4 leading-relaxed text-justify'>
                Nosotros o nuestros licenciantes poseemos y controlamos todos
                los derechos de autor y otros derechos de propiedad intelectual
                en el sitio web, y los datos, la información y otros recursos
                mostrados por o accesibles dentro del sitio web.
            </p>

            <h3 className={`font-semibold mb-1 ${barlowCondensedClass}`}>
                4.1 Todos los derechos están reservados
            </h3>
            <p className='mb-4 leading-relaxed text-justify'>
                A menos que el contenido específico indique lo contrario, no se
                le concede una licencia ni ningún otro derecho en virtud de los
                derechos de autor, marcas comerciales, patentes u otros derechos
                de propiedad intelectual. Esto significa que usted no utilizará,
                copiará, reproducirá, ejecutará, mostrará, distribuirá,
                incrustará en cualquier medio electrónico, alterará, realizará
                ingeniería inversa, descompilará, transferirá, descargará,
                transmitirá, monetizará, venderá, comercializará o hará uso de
                cualquier recurso de este sitio web en cualquier forma, sin
                nuestro permiso previo por escrito, excepto y sólo en la medida
                en que se estipule lo contrario en normas de leyes obligatorias
                (como el derecho de cita).
            </p>

            <h2
                className={`text-xl font-semibold mb-2 ${barlowCondensedClass}`}
            >
                5. Propiedad de terceros
            </h2>
            <p className='mb-4 leading-relaxed text-justify'>
                Nuestro sitio web puede incluir hipervínculos u otras
                referencias a sitios web de terceros. No controlamos ni
                revisamos el contenido de los sitios web de terceros a los que
                se accede desde este sitio web. Los productos o servicios
                ofrecidos por otros sitios web estarán sujetos a los Términos y
                Condiciones aplicables de esos terceros. Las opiniones
                expresadas o el material que aparece en esos sitios web no son
                necesariamente compartidas o respaldadas por nosotros.
            </p>
            <p className='mb-4 leading-relaxed text-justify'>
                No seremos responsables de las prácticas de privacidad o del
                contenido de estos sitios. Usted asume todos los riesgos
                asociados al uso de estos sitios web y de cualquier servicio de
                terceros relacionado. No aceptaremos ninguna responsabilidad por
                cualquier pérdida o daño, sea cual sea la forma en que se
                produzca, que resulte de la divulgación por su parte de
                información personal a terceros.
            </p>

            <h2
                className={`text-xl font-semibold mb-2 ${barlowCondensedClass}`}
            >
                6. Uso responsable
            </h2>
            <p className='mb-4 leading-relaxed text-justify'>
                Al visitar nuestro sitio web, usted se compromete a utilizarlo
                sólo para los fines previstos y según lo permitido por estos
                Términos, cualquier contrato adicional con nosotros, y
                aplicables leyes, reglamentos y prácticas en línea generalmente
                aceptadas y directrices de la industria. No debe usar nuestro
                sitio web o nuestros servicios para utilizar, publicar o
                distribuir cualquier material que consista en (o esté vinculado
                a) software informático malicioso; utilizar los datos recogidos
                en nuestro sitio web para cualquier actividad de marketing
                directo, o llevar a cabo cualquier actividad de recopilación de
                datos sistemática o automatizada en o en relación con nuestro
                sitio web.
            </p>
            <p className='mb-4 leading-relaxed text-justify'>
                Está estrictamente prohibido realizar cualquier actividad que
                provoque o pueda provocar daños en el sitio web o que interfiera
                en su funcionamiento, disponibilidad o accesibilidad.
            </p>

            <h2
                className={`text-xl font-semibold mb-2 ${barlowCondensedClass}`}
            >
                7. Envío de ideas
            </h2>
            <p className='mb-4 leading-relaxed text-justify'>
                No envíe ideas, inventos, trabajos de autoría u otra información
                que pueda considerarse su propia propiedad intelectual y que le
                gustaría presentarnos, a menos que primero hayamos firmado un
                acuerdo con respecto a la propiedad intelectual o un acuerdo de
                no divulgación. Si nos lo comunica en ausencia de dicho acuerdo
                por escrito, nos concede una licencia mundial, irrevocable, no
                exclusiva y libre de derechos de autor para utilizar,
                reproducir, almacenar, adaptar, publicar, traducir y distribuir
                su contenido en cualquier medio existente o futuro.
            </p>

            <h2
                className={`text-xl font-semibold mb-2 ${barlowCondensedClass}`}
            >
                8. Terminación de uso
            </h2>
            <p className='mb-4 leading-relaxed text-justify'>
                Podemos, a nuestra entera discreción, modificar o interrumpir en
                cualquier momento el acceso, temporal o permanentemente, al
                sitio web o a cualquier Servicio del mismo. Usted acepta que no
                seremos responsables ante usted ni ante ningún tercero por
                cualquier modificación, suspensión o interrupción de su acceso o
                uso del sitio web o de cualquier contenido que pueda haber
                compartido en el sitio web. Usted no tendrá derecho a ninguna
                compensación ni a ningún otro pago, ni siquiera si se pierden de
                forma permanente determinadas funciones, configuraciones y/o
                cualquier Contenido con el que haya contribuido o en el que haya
                confiado. No debe eludir o evitar, o intentar eludir o evitar,
                cualquier medida de restricción de acceso en nuestro sitio web.
            </p>

            <h2
                className={`text-xl font-semibold mb-2 ${barlowCondensedClass}`}
            >
                9. Garantías y responsabilidad
            </h2>
            <p className='mb-4 leading-relaxed text-justify'>
                Nada de lo dispuesto en esta sección limitará o excluirá
                cualquier garantía implícita por ley que fuera ilegal limitar o
                excluir. Este sitio web y todo su contenido se proporcionan «tal
                cual» y «según disponibilidad» y pueden incluir inexactitudes o
                errores tipográficos. Renunciamos expresamente a toda garantía
                de cualquier tipo, ya sea expresa o implícita, en cuanto a la
                disponibilidad, precisión o integridad del Contenido. No
                garantizamos que:
            </p>
            <ul className='list-disc list-inside mb-4'>
                <li>
                    este sitio web o nuestros contenidos cumplirán con sus
                    necesidades;
                </li>
                <li>
                    este sitio web estará disponible de forma ininterrumpida,
                    oportuna, segura o sin errores.
                </li>
            </ul>
            <p className='mb-4 leading-relaxed text-justify'>
                Nada de lo contenido en este sitio web constituye o pretende
                constituir un asesoramiento jurídico, financiero o médico de
                ningún tipo. Si necesita asesoramiento, debe consultar a un
                profesional adecuado.
            </p>
            <p className='mb-4 leading-relaxed text-justify'>
                Las siguientes disposiciones de esta sección se aplicarán en la
                medida máxima permitida por la ley aplicable y no limitarán ni
                excluirán nuestra responsabilidad con respecto a cualquier
                asunto que sería ilícito o ilegal para nosotros limitar o
                excluir nuestra responsabilidad. En ningún caso seremos
                responsables de cualquier daño directo o indirecto (incluyendo
                cualquier daño por pérdida de beneficios o ingresos, pérdida o
                corrupción de datos, software o base de datos, o pérdida o daño
                a la propiedad o a los datos) incurridos por usted o por
                cualquier tercero, que surja de su acceso o uso de nuestro sitio
                web.
            </p>
            <p className='mb-4 leading-relaxed text-justify'>
                Salvo en la medida en que cualquier contrato adicional
                establezca expresamente lo contrario, nuestra responsabilidad
                máxima hacia usted por todos los daños que surjan o estén
                relacionados con el sitio web o con cualquier producto o
                servicio comercializado o vendido a través del sitio web,
                independientemente de la forma de acción legal que imponga la
                responsabilidad (ya sea por contrato, equidad, negligencia,
                conducta intencionada, agravio o cualquier otra forma) se
                limitará al precio total que usted nos pagó para comprar dichos
                productos o servicios o utilizar el sitio web. Dicho límite se
                aplicará en conjunto a todas sus reclamaciones, acciones y
                causas de acción de cualquier tipo y naturaleza.
            </p>

            <h2
                className={`text-xl font-semibold mb-2 ${barlowCondensedClass}`}
            >
                10. Privacidad
            </h2>
            <p className='mb-4 leading-relaxed text-justify'>
                Para acceder a nuestro sitio web y/o servicios, es posible que
                se le pida que proporcione cierta información sobre usted como
                parte del proceso de registro. Usted se compromete a que toda la
                información que proporcione sea siempre precisa, correcta y
                actualizada.
            </p>
            <p className='mb-4 leading-relaxed text-justify'>
                Hemos desarrollado una política para abordar cualquier
                preocupación sobre la privacidad que pueda tener. Para más
                información, consulte nuestra Declaración de privacidad y
                nuestra{' '}
                <Link
                    href='/cookie-policy'
                    className='text-gray-500 underline hover:text-mainColor hover:no-underline'
                >
                    Política de cookies.
                </Link>
            </p>

            <h2
                className={`text-xl font-semibold mb-2 ${barlowCondensedClass}`}
            >
                11. Accesibilidad
            </h2>
            <p className='mb-4 leading-relaxed text-justify'>
                Nos comprometemos a que los contenidos que ofrecemos sean
                accesibles para las personas con discapacidad. Si tiene una
                discapacidad y no puede acceder a cualquier parte de nuestro
                sitio web debido a su discapacidad, le pedimos que nos avise
                incluyendo una descripción detallada del problema que ha
                encontrado. Si el problema es fácilmente identificable y se
                puede resolver de acuerdo con las herramientas y técnicas de la
                tecnología de la información estándar del sector, lo
                resolveremos rápidamente.
            </p>

            <h2
                className={`text-xl font-semibold mb-2 ${barlowCondensedClass}`}
            >
                12. Restricciones a la exportación / Cumplimiento legal
            </h2>
            <p className='mb-4 leading-relaxed text-justify'>
                Se prohíbe el acceso al sitio web desde territorios o países
                donde el Contenido o la compra de los productos o Servicios
                vendidos en el sitio web es ilegal. No puede utilizar este sitio
                web infringiendo las leyes y reglamentos de exportación de
                España.
            </p>

            <h2
                className={`text-xl font-semibold mb-2 ${barlowCondensedClass}`}
            >
                13. Asignación y cesiones
            </h2>
            <p className='mb-4 leading-relaxed text-justify'>
                Usted no puede ceder, transferir o subcontratar ninguno de sus
                derechos y/u obligaciones en virtud de estos Términos y
                condiciones, en su totalidad o en parte, a ningún tercero sin
                nuestro consentimiento previo por escrito. Cualquier supuesta
                cesión en violación de esta Sección será nula y sin efecto.
            </p>

            <h2
                className={`text-xl font-semibold mb-2 ${barlowCondensedClass}`}
            >
                14. Incumplimientos de estos Términos y condiciones
            </h2>
            <p className='mb-4 leading-relaxed text-justify'>
                Sin perjuicio de los demás derechos que nos asisten en virtud de
                los presentes Términos y Condiciones, si usted incumple estos
                Términos y Condiciones de cualquier manera, podremos tomar las
                medidas que consideremos oportunas para hacer frente al
                incumplimiento, incluyendo la suspensión temporal o permanente
                de su acceso al sitio web, poniéndonos en contacto con su
                proveedor de servicios de Internet para solicitarle que bloquee
                su acceso al sitio web, y/o iniciar acciones legales contra
                usted.
            </p>

            <h2
                className={`text-xl font-semibold mb-2 ${barlowCondensedClass}`}
            >
                15. Indemnización
            </h2>
            <p className='mb-4 leading-relaxed text-justify'>
                Usted se compromete a indemnizarnos, defendernos y eximirnos de
                toda reclamación, responsabilidad, daños, pérdidas y gastos,
                relacionados con la violación de estas condiciones y de las
                leyes aplicables, incluidos los derechos de propiedad
                intelectual y los derechos de privacidad. Usted nos reembolsará
                sin demora los daños, pérdidas, costes y gastos relacionados con
                dichas reclamaciones o derivados de ellas.
            </p>

            <h2
                className={`text-xl font-semibold mb-2 ${barlowCondensedClass}`}
            >
                16. Renuncia
            </h2>
            <p className='mb-4 leading-relaxed text-justify'>
                El incumplimiento de cualquiera de las disposiciones
                establecidas en estos Términos y condiciones y en cualquier
                Acuerdo, o la falta de ejercicio de cualquier opción de
                interrupción, no se interpretará como una renuncia a dichas
                disposiciones y no afectará a la validez de estos Términos y
                Condiciones o de cualquier Acuerdo o cualquier parte del mismo,
                ni al derecho posterior de hacer cumplir todas y cada una de las
                disposiciones.
            </p>

            <h2
                className={`text-xl font-semibold mb-2 ${barlowCondensedClass}`}
            >
                17. Idioma
            </h2>
            <p className='mb-4 leading-relaxed text-justify'>
                Estos Términos y Condiciones se interpretarán y analizarán
                exclusivamente en Español; castellano. Todas las notificaciones
                y la correspondencia se redactarán exclusivamente en ese idioma.
            </p>

            <h2
                className={`text-xl font-semibold mb-2 ${barlowCondensedClass}`}
            >
                18. Acuerdo completo
            </h2>
            <p className='mb-4 leading-relaxed text-justify'>
                Estos términos y condiciones, junto con nuestra declaración de
                privacidad y nuestra{' '}
                <Link
                    href='/cookie-policy'
                    className='text-gray-500 underline hover:text-mainColor hover:no-underline'
                >
                    Política de cookies.
                </Link>
                , constituyen el acuerdo completo entre Mogno Woods SL y tú en
                relación con tu uso de esta web.
            </p>

            <h2
                className={`text-xl font-semibold mb-2 ${barlowCondensedClass}`}
            >
                19. Actualización de los presentes Términos y Condiciones
            </h2>
            <p className='mb-4 leading-relaxed text-justify'>
                Es posible que actualicemos estos Términos y Condiciones de vez
                en cuando. Es su obligación revisar periódicamente estos
                Términos y Condiciones para ver si hay cambios o
                actualizaciones. La fecha indicada al principio de estas
                Condiciones Generales es la última fecha de revisión. Los
                cambios a estos Términos y Condiciones entrarán en vigencia
                cuando dichos cambios se publiquen en este sitio web. El uso
                continuado de este sitio web tras la publicación de cambios o
                actualizaciones se considerará un aviso de su aceptación de
                cumplir y estar sujeto por estos Términos y Condiciones.
            </p>

            <h2
                className={`text-xl font-semibold mb-2 ${barlowCondensedClass}`}
            >
                20. Elección de ley y jurisdicción
            </h2>
            <p className='mb-4 leading-relaxed text-justify'>
                Estos Términos y Condiciones se regirán por las leyes de España.
                Cualquier disputa relacionada con estos Términos y Condiciones
                estará sujeta a la jurisdicción de los tribunales de España. Si
                un tribunal u otra autoridad considera que alguna parte o
                disposición de estos Términos y Condiciones es inválida y/o
                inaplicable en virtud de la legislación vigente, dicha parte o
                disposición será modificada, eliminada y/o aplicada en la mayor
                medida permitida para hacer efectiva la intención de estos
                Términos y Condiciones. Las demás disposiciones no se verán
                afectadas.
            </p>

            <h2
                className={`text-xl font-semibold mb-2 ${barlowCondensedClass}`}
            >
                21. Información del contacto
            </h2>
            <p className='mb-4 leading-relaxed text-justify'>
                Este sitio web es propiedad y está gestionado por Mogno Woods
                SL. Puedes contactar con nosotros en relación a estos términos y
                condiciones por teléfono en el número de contacto publicado en
                nuestra web.
            </p>

            <h2
                className={`text-xl font-semibold mb-2 ${barlowCondensedClass}`}
            >
                22. Descargar
            </h2>
            <p className='mb-4 leading-relaxed text-justify'>
                También puedes{' '}
                <Link
                    href='https://www.mogno.es/wp-content/plugins/complianz-terms-conditions/download.php'
                    className='text-gray-500 underline hover:text-mainColor hover:no-underline'
                >
                    descargar
                </Link>{' '}
                nuestros términos y condiciones como un PDF.
            </p>
        </div>
    )
}

export default TermsAndConditions
