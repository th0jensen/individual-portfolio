import { School } from '../../../data'

export default function EducationListItem(props: { data: School }) {
    return (
        <div
            className='w-96 rounded-2xl p-10 text-2xl backdrop-blur-2xl'
            // style={{
            //     boxShadow:
            //         'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
            // }}
        >
            <h1>{props.data.school}</h1>
            <div className='flex flex-col gap-1 text-sm'>
                <p>
                    {props.data.title} {props.data.course}
                </p>
                <p>
                    {props.data.time.from} - {props.data.time.to}
                </p>
                <ul className='flex flex-wrap gap-1 text-xl'>
                    {props.data.classes?.map((item) => <li>{item}</li>)}
                    <p>{props.data.description?.toString()}</p>
                </ul>
            </div>
        </div>
    )
}
