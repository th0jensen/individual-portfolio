import { School, Work } from '../../../data'

export default function ExperienceListItem(props: { data: School | Work }) {
    const { data } = props
    return (
        <div className='w-full rounded-2xl py-10 text-2xl backdrop-blur-2xl md:w-96'>
            <h1>{'school' in data ? data.school : data.employer}</h1>
            <div className='flex flex-col gap-1 text-sm'>
                {'title' in data ? <p>{data.title}</p> : <p>{data.course}</p>}
                <p>
                    {data.time.from} - {props.data.time.to}
                </p>
                <ul className='flex w-fit flex-wrap gap-2'>
                    {'classes' in data ? (
                        data.classes.map((item, index) => (
                            <li key={index} className='basis-1/3 text-nowrap'>
                                {item}
                            </li>
                        ))
                    ) : (
                        <li>{data.description.toString()}</li>
                    )}
                </ul>
            </div>
        </div>
    )
}
