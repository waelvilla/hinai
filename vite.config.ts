import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    define: {
      'import.meta.env.VITE_LIVEKIT_URL': JSON.stringify(
        env.VITE_LIVEKIT_URL ?? env.LIVEKIT_URL ?? '',
      ),
    },
    build: {
      ssr: 'src/main.ts', // marks entry as Node
      target: 'node18',
      sourcemap: true,
      outDir: 'dist',
      rollupOptions: {
        output: {
          entryFileNames: 'main.js',
        },
      },
    },
  };
});
