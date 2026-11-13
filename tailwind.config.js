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
                // Acentos (compartidos)
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
