import TechList from './components/TechList'
import { portfolioData as data } from '../../data'

export default function Stack() {
    return (
        <div
            id='tech'
            className='text-primary container flex h-screen max-w-xl flex-col justify-center px-10 text-3xl font-bold'
        >
            <img
                className='absolute left-0 z-0 h-screen w-screen'
                src={
                    'https://images.unsplash.com/photo-1684139517679-032b7213ad2e?q=80&w=3328&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                }
                alt=''
            />
            <div
                className='z-10 flex flex-col gap-10 rounded-lg p-10 backdrop-blur-lg'
                style={{
                    boxShadow: 'rgba(17, 12, 46, 0.15) 0px 48px 100px 0px',
                }}
            >
                <h1 className='text-4xl font-bold'>tech stack</h1>
                <div>
                    <TechList data={data.tech.languages} />
                    <TechList data={data.tech.technologies} />
                </div>
            </div>
        </div>
    )
}
