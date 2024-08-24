import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'



export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api":{
             target: "https://fnk-99-vinyl-server.onrender.com",
            // target: "http://localhost:3000",
            changeOrigin: true,
      }
    },
  },
  build: {
    outDir: 'src/dist', 
  },
});


