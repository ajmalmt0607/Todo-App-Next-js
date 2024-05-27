/** @type {import('tailwindcss').Config} */
export const content = [
    "./pages/**/*.{js,ts,jsx,tsx,mdx,mjs}",
    "./Components/**/*.{js,ts,jsx,tsx,mdx,mjs}",
    "./app/**/*.{js,ts,jsx,tsx,mdx,mjs}",
];
export const theme = {
    extend: {
        backgroundImage: {
            "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            "gradient-conic":
                "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        },
    },
};
export const plugins = [];
