import { Project } from '../../../data'

export default function ProjectListItem(props: { project: Project }) {
    const handleClick = (): void => {
        window.open(props.project.source.link, '_blank')
    }

    const linkText = (): string => {
        if (props.project.source.type === 'github') {
            return 'GitHub'
        } else {
            return 'App Store'
        }
    }

    return (
        <div className='w-fit rounded-2xl py-10 text-2xl backdrop-blur-2xl md:w-96'>
            <h1>{props.project.name}</h1>
            <ul className='flex flex-row gap-2 text-sm'>
                {props.project.technologies.map((tech, index) => (
                    <li key={index}>#{tech}</li>
                ))}
            </ul>
            <p className='text-xl'>{props.project.description}</p>
            <div className='mt-6 flex justify-center'>
                <button className='btn btn-ghost' onClick={() => handleClick()}>
                    {linkText()}
                </button>
            </div>
        </div>
    )
}
