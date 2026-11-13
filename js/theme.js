(function () {
    'use strict';

    // Single owner of preference, early rendering and responsive control state.
    const root = document.documentElement;
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
    const validPreferences = ['dark', 'light', 'system'];
    let preference = 'system';

    try {
        const stored = localStorage.getItem('theme');
        if (validPreferences.includes(stored)) preference = stored;
    } catch (_) {
        // Storage may be unavailable; the preference still works for this page.
    }

    function applyTheme() {
        const effective = preference === 'system'
            ? (systemTheme.matches ? 'dark' : 'light')
            : preference;
        root.dataset.theme = effective;
        root.classList.toggle('dark', effective === 'dark');
        root.style.colorScheme = effective;
        const meta = document.querySelector('meta[name="theme-color"]');
        if (meta) meta.content = effective === 'dark' ? '#08090a' : '#ffffff';
        const select = document.getElementById('theme-preference');
        if (select) select.value = preference;
        const icon = document.getElementById('theme-preference-icon');
        if (icon) {
            const symbol = { dark: 'moon', light: 'sun', system: 'desktop' }[preference];
            icon.setAttribute('href', 'assets/icons.svg#icon-' + symbol);
        }
        // Reserve the control's space until both label and icon match the preference.
        root.dataset.themeReady = select && icon ? 'true' : 'false';
    }

    applyTheme();
    systemTheme.addEventListener('change', function () {
        if (preference === 'system') applyTheme();
    });

    document.addEventListener('DOMContentLoaded', function () {
        const select = document.getElementById('theme-preference');
        if (!select) return;
        applyTheme();
        select.addEventListener('change', function () {
            if (!validPreferences.includes(select.value)) return;
            preference = select.value;
            try {
                localStorage.setItem('theme', preference);
            } catch (_) {
                // Do not interrupt navigation, forms or other page features.
            }
            applyTheme();
        });
    }, { once: true });
})();
