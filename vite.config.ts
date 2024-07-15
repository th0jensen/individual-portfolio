import { defineConfig } from 'vite'
import wasmPack from 'vite-plugin-wasm-pack'
// import wasm from 'vite-plugin-wasm'
import topLevelAwait from 'vite-plugin-top-level-await'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [
        // wasm(),
        topLevelAwait(),
        react(),
        wasmPack('./dogshaiters'),
    ],
})
