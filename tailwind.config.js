/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        './index.html',
        './js/**/*.js'
    ],
    theme: {
        extend: {
            colors: {
                darkBg: '#08090a',
                cardBg: '#121316',
                cardBorder: '#22242a',
                accentCyan: '#00f2fe',
                accentViolet: '#7928ca',
                accentBlue: '#0070f3',
                unityDark: '#222c37',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            boxShadow: {
                'neon-cyan': '0 0 25px rgba(0, 242, 254, 0.25)',
                'neon-violet': '0 0 25px rgba(121, 40, 202, 0.25)',
            }
        }
    },
    plugins: [],
}
