import SocialIcon from './SocialIcon'

const SocialIcons = ({ iconsArr }) => {
    return (
        <div className='flex space-x-4'>
            {iconsArr.map((icon, index) => {
                return (
                    <div key={index}>
                        <SocialIcon icon={icon.icon} link={icon.link} />
                    </div>
                )
            })}
        </div>
    )
}

export default SocialIcons
