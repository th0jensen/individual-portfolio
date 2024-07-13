import { School, Work } from '../../../data'
import ExperienceListItem from './ExperienceListItem'

export default function EducationList(props: { data: School[] | Work[] }) {
    return (
        <div className='flex flex-wrap justify-center'>
            {props.data.map((item, index) => (
                <ExperienceListItem key={index} data={item} />
            ))}
        </div>
    )
}
