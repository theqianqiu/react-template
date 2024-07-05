/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
    darkMode: 'class',
    plugins: [],
    theme: {
        fontSize: {
            xxs: '12px',
            xs: '13px',
            DEFAULT: '14px',
            title: '16px',
        },
        borderRadius: {
            none: '0',
            sm: '4px',
            DEFAULT: '6px',
            lg: '8px',
            xl: '12px',
            full: '9999px',
        },
        extend: {
            boxShadow: {
                center: '0 0 5px rgba(0, 0, 0, 0.1)',
                b: '0 2px 5px rgba(0, 0, 0, 0.1)',
                brL: '8px 8px 20px rgba(0, 0, 0, 0.1)',
                scenter: '0px 4px 10px 0px rgba(0,0,0,0.05)',
            },
        },
    },
};
