import { portfolioData as data } from '../../../data'
import EducationListItem from './EducationListItem'

export default function EducationList() {
    return (
        <div className='flex flex-wrap justify-center gap-5'>
            {data.education.map((item, index) => (
                <EducationListItem key={index} data={item} />
            ))}
        </div>
    )
}
