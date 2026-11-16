/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        './index.html',
        './js/**/*.js'
    ],
    theme: {
        extend: {
            opacity: {
                8: '0.08',
            },
            colors: {
                // Tema oscuro
                darkBg: 'rgb(var(--bg-primary-rgb) / <alpha-value>)',
                cardBg: 'rgb(var(--bg-secondary-rgb) / <alpha-value>)',
                cardBorder: 'rgb(var(--border-rgb) / <alpha-value>)',
                primary: 'var(--text-primary)',
                body: 'var(--text-body)',
                strong: 'var(--text-strong)',
                secondary: 'var(--text-secondary)',
                muted: 'var(--text-muted)',
                subtle: 'var(--text-tertiary)',
                surfaceInset: 'rgb(var(--surface-inset-rgb) / <alpha-value>)',
                surfaceRaised: 'rgb(var(--surface-raised-rgb) / <alpha-value>)',
                surfaceTint: 'rgb(var(--surface-tint-rgb) / <alpha-value>)',
                divider: 'var(--divider)',
                dividerStrong: 'rgb(var(--divider-strong-rgb) / <alpha-value>)',
                accentInk: 'var(--accent-ink)',
                blueInk: 'var(--blue-ink)',
                successInk: 'var(--success-ink)',
                warningInk: 'var(--warning-ink)',
                errorInk: 'var(--error-ink)',
                roseInk: 'var(--rose-ink)',
                infoInk: 'var(--info-ink)',
                fuchsiaInk: 'var(--fuchsia-ink)',
                tealInk: 'var(--teal-ink)',
                // Tema claro
                lightBg: '#ffffff',
                lightCardBg: '#f8fafc',
                lightCardBorder: '#e2e8f0',
                lightText: '#0f172a',
                lightTextSecondary: '#475569',
                lightTextTertiary: '#64748b',
                // MV Spatial 2.0. Los nombres heredados se conservan como
                // aliases para no romper utilidades existentes durante 9.3A.
                accent: 'rgb(var(--accent-primary-rgb) / <alpha-value>)',
                accentDeep: 'rgb(var(--accent-secondary-rgb) / <alpha-value>)',
                accentSoft: 'rgb(var(--accent-blue-rgb) / <alpha-value>)',
                accentCyan: 'rgb(var(--accent-primary-rgb) / <alpha-value>)',
                accentViolet: 'rgb(var(--accent-secondary-rgb) / <alpha-value>)',
                accentBlue: 'rgb(var(--accent-blue-rgb) / <alpha-value>)',
                unityDark: '#222c37',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            boxShadow: {
                'neon-cyan': '0 14px 34px -22px rgba(32, 213, 143, 0.75)',
                'neon-violet': '0 14px 34px -22px rgba(7, 132, 79, 0.65)',
                'instrument': '0 28px 70px -45px rgba(32, 213, 143, 0.75)',
            }
        }
    },
    plugins: [],
}
