/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
        "./node_modules/flowbite/**/*.js",
    ],
    theme: {
        extend: {},
        colors: {
            transparent: "transparent",
            backdrop: "#F8F1EB",
            current: "currentColor",
            writing: {
                DEFAULT: "#0D0C1D",
                light: "#0D0C1D",
                dark: "#F4E7D4",
            },
            primary: {
                DEFAULT: "#474973",
                light: "#A69CAC",
                ultralight: "#E8E0DE",
                dark: "#161B33",
            },
            secondary: "#F1DAC4",
        },
    },
    plugins: [require("flowbite/plugin")],
};
