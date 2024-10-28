const Flag = ({ url }) => {
    const altName = url.split('/').pop().split('.').slice(0, -1)

    return (
        <div className='flex-shrink-0 w-20 h-16'>
            <img
                src={url}
                alt={altName}
                className='w-full h-full object-cover'
            />
        </div>
    )
}

export default Flag
