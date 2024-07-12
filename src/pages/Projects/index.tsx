export default function Projects() {
    return (
        <div
            id='proj'
            className='text-primary container flex h-screen max-w-xl flex-col justify-center px-10 text-3xl font-bold'
        >
            {/* <img
                className='absolute left-0 z-0 h-screen w-screen'
                src={
                    'https://images.unsplash.com/photo-1669808219008-da86478560e2?q=80&w=3367&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                }
                alt=''
            /> */}
            <div
                className='z-20 flex max-w-xl flex-col gap-10 rounded-2xl p-10 backdrop-blur-2xl'
                style={{
                    boxShadow:
                        'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
                }}
            >
                <h1 className='text-4xl font-bold'>projects</h1>
                <span>work in progress</span>
            </div>
        </div>
    )
}
