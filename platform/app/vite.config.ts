import tsconfigPaths from 'vite-tsconfig-paths'
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import path from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      '@common/types': path.resolve(__dirname, '../../packages/common/types'),
      '@': path.resolve(__dirname, './src'),
    },
  },
})
