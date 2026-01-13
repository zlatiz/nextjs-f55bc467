import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx,js,jsx}',
    './components/**/*.{ts,tsx,js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        background: '#0B0B0F',
        foreground: '#FFFFFF',
        primary: '#1B1B2F',
        secondary: '#FF3D7F',
        accent: '#00E5FF',
        muted: '#121217',
        'muted-foreground': '#BDB8C0',
        border: '#2A2A36'
      },
      borderRadius: {
        sm: '6px',
        md: '12px',
        lg: '20px',
        xl: '32px'
      },
      boxShadow: {
        sm: '0 4px 8px rgba(0,0,0,0.45)',
        md: '0 8px 24px rgba(0,0,0,0.55)',
        lg: '0 20px 40px rgba(0,0,0,0.65)'
      },
      fontFamily: {
        heading: ['Space Grotesk', 'Space_Grotesk', 'sans-serif'],
        body: ['Manrope', 'sans-serif']
      }
    }
  },
  plugins: []
};

export default config;
