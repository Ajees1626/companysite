import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
   base: '/reactjs1/first/my-first-project/dist', 
  plugins: [react()],
})
