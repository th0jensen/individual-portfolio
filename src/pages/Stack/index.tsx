import TechList from './components/TechList'
import { portfolioData as data } from '../../data'

export default function Stack() {
    const background_url =
        'https://images.unsplash.com/photo-1655307245247-376885be7496?q=80&w=3264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

    return (
        <div
            id='tech'
            className='text-primary container flex min-h-screen w-screen flex-col justify-center px-10 text-3xl font-bold'
        >
            <img
                className='absolute left-0 z-0 h-screen w-screen'
                src={background_url}
                alt=''
            />
            <div
                className='z-10 flex flex-col gap-10 rounded-2xl p-10 backdrop-blur-2xl'
                style={{
                    boxShadow:
                        'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
                }}
            >
                <h1 className='text-4xl font-bold'>tech stack</h1>
                <div className='flex flex-col'>
                    <TechList data={data.tech.languages} />
                    <TechList data={data.tech.technologies} />
                </div>
            </div>
        </div>
    )
}
