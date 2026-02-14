
  import { defineConfig } from 'vite';
  import react from '@vitejs/plugin-react-swc';
  import path from 'path';

  export default defineConfig({
    plugins: [react()],
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      alias: {
        'figma:asset/f4a28f747d49fc9d37311b17f513b62e2b95a73e.png': path.resolve(__dirname, './src/assets/f4a28f747d49fc9d37311b17f513b62e2b95a73e.png'),
        'figma:asset/f0c4301e83be5c7dcfa724f611ca2ffcca9bf032.png': path.resolve(__dirname, './src/assets/f0c4301e83be5c7dcfa724f611ca2ffcca9bf032.png'),
        'figma:asset/e82a7d901c5a28bf9313c7535228e647eaf06b75.png': path.resolve(__dirname, './src/assets/e82a7d901c5a28bf9313c7535228e647eaf06b75.png'),
        'figma:asset/e46fceb6809b8f1b7ef5c578d40578eadf301207.png': path.resolve(__dirname, './src/assets/e46fceb6809b8f1b7ef5c578d40578eadf301207.png'),
        'figma:asset/dfc0e7ceee6b7f81fd3e6ccf4d7036097bc79477.png': path.resolve(__dirname, './src/assets/dfc0e7ceee6b7f81fd3e6ccf4d7036097bc79477.png'),
        'figma:asset/d99e9e671329d5df41ad0f55042fb3f135e30fdf.png': path.resolve(__dirname, './src/assets/d99e9e671329d5df41ad0f55042fb3f135e30fdf.png'),
        'figma:asset/bb2d15f1b5450668f0a032ad3765e13d8db4fdd2.png': path.resolve(__dirname, './src/assets/bb2d15f1b5450668f0a032ad3765e13d8db4fdd2.png'),
        'figma:asset/7afa71c7ec4457a1c1983db257703a6c92a9cce7.png': path.resolve(__dirname, './src/assets/7afa71c7ec4457a1c1983db257703a6c92a9cce7.png'),
        'figma:asset/74b708f3be9c02b929444ed900d4217477ac45ad.png': path.resolve(__dirname, './src/assets/74b708f3be9c02b929444ed900d4217477ac45ad.png'),
        'figma:asset/6095d8818a83e64a063161f9df091d561fde7105.png': path.resolve(__dirname, './src/assets/6095d8818a83e64a063161f9df091d561fde7105.png'),
        'figma:asset/428cc40e40184633483ae65f75ced5f46af6821d.png': path.resolve(__dirname, './src/assets/428cc40e40184633483ae65f75ced5f46af6821d.png'),
        'figma:asset/3eb83eb2d4eb493b80283c1b75770d8893b2fc6a.png': path.resolve(__dirname, './src/assets/3eb83eb2d4eb493b80283c1b75770d8893b2fc6a.png'),
        'figma:asset/378acbf4a7518ca6c40b44540bd7a121a91375fe.png': path.resolve(__dirname, './src/assets/378acbf4a7518ca6c40b44540bd7a121a91375fe.png'),
        'figma:asset/1cd08d3825ac7cc423a4672f8ed279139fc99d0a.png': path.resolve(__dirname, './src/assets/1cd08d3825ac7cc423a4672f8ed279139fc99d0a.png'),
        'figma:asset/06d4edfbf4b3d5e14311a5a52ea6756b57d2c956.png': path.resolve(__dirname, './src/assets/06d4edfbf4b3d5e14311a5a52ea6756b57d2c956.png'),
        '@jsr/supabase__supabase-js@2.49.8': '@jsr/supabase__supabase-js',
        '@': path.resolve(__dirname, './src'),
      },
    },
    build: {
      target: 'esnext',
      outDir: 'build',
    },
    server: {
      port: 3000,
      open: true,
    },
  });