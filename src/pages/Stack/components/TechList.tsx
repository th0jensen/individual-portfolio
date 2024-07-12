import { portfolioData as data } from '../../../data'
import TechListItem from './TechListItem'

export default function TechList(props: { data: string[] }) {
    let title: string

    if (props.data === data.tech.languages) title = 'languages'
    else title = 'technologies'

    return (
        <div className='flex flex-col gap-5'>
            <p className='text-2xl'>{title}</p>
            <div className='flex gap-5'>
                {props.data.map((lang, index) => (
                    <TechListItem key={index} lang={lang} />
                ))}
            </div>
            <br />
        </div>
    )
}
