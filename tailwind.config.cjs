/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    ],
    theme: {
        extend: {},
        colors: {
            transparent: "transparent",
            backdrop: "#F3F7FA",
            current: "currentColor",
            writing: {
                DEFAULT: "#152033",
                light: "#152033",
                dark: "#EDF3F8",
            },
            primary: {
                DEFAULT: "#566981",
                light: "#A9BCCB",
                ultralight: "#E6EEF4",
                dark: "#203245",
            },
            secondary: "#C7D9E6",
        },
    },
    plugins: [],
};
