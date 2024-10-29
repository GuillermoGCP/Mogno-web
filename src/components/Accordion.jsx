import { AccordionItem, Flag } from '.'

function Accordion({ content, url }) {
    return (
        <div className='flex flex-col items-center mt-7 sm:flex-row sm:items-start sm:justify-center'>
            <Flag url={url} />
            <AccordionItem title='PROGRAMA SEGURIDAD' content={content} />
            <AccordionItem title='PROGRAMA XPANDE DIGITAL' content={content} />
            <Flag url={url} />
        </div>
    )
}

export default Accordion
