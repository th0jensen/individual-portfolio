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
        <div
            className='w-96 rounded-2xl p-10 text-2xl backdrop-blur-2xl'
            // style={{
            //     boxShadow:
            //         'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
            // }}
        >
            <h1>{props.project.name}</h1>
            <ul className='flex flex-row gap-2 text-sm'>
                {props.project.technologies.map((tech, index) => (
                    <li key={index}>#{tech}</li>
                ))}
            </ul>
            <p className='text-xl'>{props.project.description}</p>
            <div className='mt-6 flex w-full justify-center'>
                <button className='btn btn-ghost' onClick={() => handleClick()}>
                    {linkText()}
                </button>
            </div>
        </div>
    )
}
