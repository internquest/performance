/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gap: {
        '60': '3.75rem',
      },
      gridTemplateColumns: {
         '14': 'repeat(14, minmax(0, 1fr))'
      },
      fontFamily:{
        // geographmed:['var(--font-geograph-med)']
      },
      screens:{
        'mobile':{'max':'799px'},
        'm900':{'max':'899px'},
        'md':{'min':'800px'}
      }
      ,
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
