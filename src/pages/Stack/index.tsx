import TechList from './components/TechList'
import { portfolioData as data } from '../../data'

export default function Stack() {
    const background_url =
        'https://images.unsplash.com/photo-1655307245247-376885be7496?q=80&w=3264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

    return (
        <div id='tech' className='flex min-h-screen w-screen flex-col'>
            <div
                className='text-primary bg-base-100 z-20 flex min-h-screen w-full flex-col justify-center p-10 text-3xl font-bold'
                style={{
                    backgroundImage: `url(${background_url})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                {' '}
                <div
                    className='z-20 flex flex-col gap-10 rounded-2xl p-10 backdrop-blur-2xl'
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
        </div>
    )
}
