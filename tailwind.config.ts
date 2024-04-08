
export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}',"node_modules/flowbite-react/lib/esm/**/*.js"],
  theme: {
    extend: {
      colors: {
        'agLightBlue': {
          100: '#E3F2FD',
          200: '#BBDEFB',
          300: '#90CAF9',
          400: '#64B5F6',
          500: '#42A5F5',
          600: '#2196F3',
          700: '#1E88E5',
          800: '#1976D2',
          900: '#1565C0',          
        },      
        'agDarkBlue': {
          100: '#468FAF',
          200: '#2C7DA0',
          300: '#2A6F97',
          400: '#0466C8',
          500: '#0353A4',
          600: '#023E7D',
          700: '#002855',
          800: '#001845',
          900: '#001233',          
        },      
      },
    },    
  },
  plugins: [],
} 

