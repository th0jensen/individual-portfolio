import { portfolioData as data } from '../../../data'
import ProjectListItem from './ProjectListItem'

export default function ProjectList() {
    return (
        <div className='flex flex-wrap justify-center gap-5'>
            {data.projects.map((project, index) => (
                <ProjectListItem key={index} project={project} />
            ))}
        </div>
    )
}
