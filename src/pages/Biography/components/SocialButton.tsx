import { IconType } from 'react-icons'
import {
    AiFillLinkedin,
    AiFillGithub,
    AiFillInstagram,
    AiOutlineExclamation,
} from 'react-icons/ai'

type SocialButtonProps = {
    social: string
    link: string
}

export default function SocialButton({ social, link }: SocialButtonProps) {
    let Icon: IconType = AiOutlineExclamation

    const handleClick = (): void => {
        window.open(link, '_blank')
    }

    switch (social) {
        case 'linkedin':
            Icon = AiFillLinkedin
            break
        case 'github':
            Icon = AiFillGithub
            break
        case 'instagram':
            Icon = AiFillInstagram
            break
    }

    return (
        <button className='btn btn-ghost px-0' onClick={() => handleClick()}>
            <Icon className='text-primary m-0 size-12 p-0' />
        </button>
    )
}
