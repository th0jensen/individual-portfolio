import ProjectList from './components/ProjectList'

export default function Projects() {
    const background_url =
        'https://images.unsplash.com/photo-1673951284213-2a3550681b7d?q=80&w=3264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

    return (
        <div className='flex h-screen w-screen flex-col'>
            <div
                id='proj'
                className='text-primary bg-base-100 z-20 flex h-full w-full flex-col justify-center p-10 text-3xl font-bold'
            >
                <img
                    className='absolute left-0 z-0 h-screen w-screen'
                    src={background_url}
                    alt=''
                />
                <div
                    className='z-20 flex flex-col gap-10 rounded-2xl p-10 backdrop-blur-2xl'
                    style={{
                        boxShadow:
                            'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
                    }}
                >
                    <h1 className='text-4xl font-bold'>projects</h1>
                    <ProjectList />
                </div>
            </div>
        </div>
    )
}
