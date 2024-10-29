import { AccordionItem, Flag } from '.'

function Accordion({ content, url }) {
    return (
        <div className='flex flex-col sm:flex-row justify-center items-center mt-7'>
            <Flag url={url} />
            <AccordionItem title='PROGRAMA SEGURIDAD' content={content} />
            <AccordionItem title='PROGRAMA XPANDE DIGITAL' content={content} />
            <Flag url={url} />
        </div>
    )
}

export default Accordion
