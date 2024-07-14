import {
    Css3Original,
    ExpressOriginal,
    GoOriginal,
    Html5Original,
    JavascriptOriginal,
    LinuxOriginal,
    LuaPlain,
    NodejsOriginalWordmark,
    PostgresqlOriginal,
    ReactOriginal,
    RustOriginal,
    SwiftOriginal,
    TailwindcssOriginal,
    TypescriptOriginal,
} from 'devicons-react'
import { Tooltip as ReactTooltip } from 'react-tooltip'

export default function TechListItem(props: { lang: string }) {
    let Icon = LuaPlain

    switch (props.lang) {
        case 'Typescript':
            Icon = TypescriptOriginal
            break
        case 'Javascript':
            Icon = JavascriptOriginal
            break
        case 'HTML':
            Icon = Html5Original
            break
        case 'CSS':
            Icon = Css3Original
            break
        case 'Go':
            Icon = GoOriginal
            break
        case 'Swift':
            Icon = SwiftOriginal
            break
        case 'Rust':
            Icon = RustOriginal
            break
        case 'React.js':
            Icon = ReactOriginal
            break
        case 'Express':
            Icon = ExpressOriginal
            break
        case 'Node.js':
            Icon = NodejsOriginalWordmark
            break
        case 'PostgreSQL':
            Icon = PostgresqlOriginal
            break
        case 'TailwindCSS':
            Icon = TailwindcssOriginal
            break
        case 'Linux':
            Icon = LinuxOriginal
            break
    }

    return (
        <div>
            <a data-tooltip-id={props.lang} data-tooltip-content={props.lang}>
                {props.lang === 'Express' || props.lang === 'Rust' ? (
                    <Icon
                        color='white'
                        size='50'
                        style={{ filter: 'invert(0.75)' }}
                    />
                ) : (
                    <Icon size='50' />
                )}
            </a>
            <ReactTooltip
                id={props.lang}
                place='bottom'
                style={{
                    zIndex: '50',
                    fontSize: '1rem',
                    marginTop: '0.5rem',
                    background: 'rgba(44,44,44,1)',
                }}
            />
        </div>
    )
}
