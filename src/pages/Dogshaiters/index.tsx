import init, { start_game } from '../../../dogshaiters/pkg'
import { useEffect } from 'react'

export default function Dogshaiters() {
    useEffect(() => {
        const initializeWasm = async () => {
            try {
                await init()
                start_game()
            } catch (err) {
                console.error('Failed to initialize WASM:', err)
            }
        }

        initializeWasm()
    }, [])

    return (
        <div className='flex h-screen w-screen items-center justify-center'>
            <canvas id='dogshaiters_canvas'></canvas>
        </div>
    )
}
