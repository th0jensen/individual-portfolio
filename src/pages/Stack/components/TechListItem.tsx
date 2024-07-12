import { IconType } from 'react-icons'
import { AiOutlineExclamation } from 'react-icons/ai'
import { BiLogoGoLang } from 'react-icons/bi'
import {
    DiLinux,
    DiNodejs,
    DiPostgresql,
    DiReact,
    DiRust,
    DiSwift,
} from 'react-icons/di'
import {
    SiCss3,
    SiExpress,
    SiHtml5,
    SiJavascript,
    SiTailwindcss,
    SiTypescript,
} from 'react-icons/si'

export default function TechListItem(props: { lang: string }) {
    let Icon: IconType = AiOutlineExclamation

    switch (props.lang) {
        case 'Typescript':
            Icon = SiTypescript
            break
        case 'Javascript':
            Icon = SiJavascript
            break
        case 'HTML':
            Icon = SiHtml5
            break
        case 'CSS':
            Icon = SiCss3
            break
        case 'Go':
            Icon = BiLogoGoLang
            break
        case 'Swift':
            Icon = DiSwift
            break
        case 'Rust':
            Icon = DiRust
            break
        case 'React.js':
            Icon = DiReact
            break
        case 'Express':
            Icon = SiExpress
            break
        case 'Node.js':
            Icon = DiNodejs
            break
        case 'PostgreSQL':
            Icon = DiPostgresql
            break
        case 'TailwindCSS':
            Icon = SiTailwindcss
            break
        case 'Linux':
            Icon = DiLinux
            break
    }

    return <Icon className='text-primary m-0 size-12 p-0' />
}
