/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#eaeaea',
                    100: '#d3c4e6',
                    200: '#c6abe7',
                    300: '#b58fe6',
                    400: '#a470e6',
                    500: '#9a5be8',
                    600: '#8a3dea',
                    700: '#7918f2',
                    800: '#7f18ff',
                    900: '#7100ff',
                    950: '#5d00d1'
                }
            }
        }
    },
    plugins: []
};
