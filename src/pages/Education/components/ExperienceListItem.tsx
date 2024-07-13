import { School, Work } from '../../../data'

export default function ExperienceListItem(props: { data: School | Work }) {
    const { data } = props
    return (
        <div className='w-96 rounded-2xl p-10 text-2xl backdrop-blur-2xl'>
            <h1>{'school' in data ? data.school : data.employer}</h1>
            <div className='flex flex-col gap-1 text-sm'>
                {'title' in data ? <p>{data.title}</p> : <p>{data.course}</p>}
                <p>
                    {data.time.from} - {props.data.time.to}
                </p>
                <ul className='flex flex-wrap gap-1 text-xl'>
                    {'classes' in data ? (
                        data.classes.map((item) => <li>{item}</li>)
                    ) : (
                        <li>{data.description.toString()}</li>
                    )}
                </ul>
            </div>
        </div>
    )
}
