import TechList from './components/TechList'
import { portfolioData as data } from '../../data'

export default function Stack() {
    return (
        <div
            id='tech'
            className='text-primary container flex h-screen max-w-xl flex-col justify-center gap-10 px-10 text-3xl font-bold'
        >
            <h1 className='text-4xl font-bold'>tech stack</h1>
            <div>
                <TechList data={data.tech.languages} />
                <TechList data={data.tech.technologies} />
            </div>
        </div>
    )
}
