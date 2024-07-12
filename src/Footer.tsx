export default function Footer() {
    return (
        <div className='w-screen p-10'>
            <p
                className='bottom-0 z-50 flex max-w-xl flex-col items-center gap-10 rounded-2xl p-10 backdrop-blur-2xl'
                style={{
                    boxShadow:
                        'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
                }}
            >
                © thomas jensen 2024
            </p>
        </div>
    )
}
