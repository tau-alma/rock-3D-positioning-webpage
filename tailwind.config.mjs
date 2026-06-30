/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  // We manage dark mode via data-theme attribute + CSS variables,
  // not Tailwind's built-in dark: variant, so darkMode is disabled here.
  // Use CSS variables from global.css for all theming instead.
  theme: {
    extend: {
      fontFamily: {
        display: ['DM Serif Display', 'Georgia', 'serif'],
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      colors: {
        // These map to CSS variables so they respond to theme changes.
        // Use as: text-[var(--primary)] or the utility classes in global.css.
        primary: 'var(--primary)',
      },
    },
  },
  plugins: [],
};
