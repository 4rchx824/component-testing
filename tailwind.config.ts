import type { Config } from "tailwindcss";

const config = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}",
        "./node_modules/@4rchx824/ui/dist/**/*.{js,ts,jsx,tsx}",
    ],
    prefix: "",
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },

            // colors: {
            //     // Primary colors
            //     primary: "#5E27B6",
            //     "primary-accent": "#DDD2F0",
            //     "primary-disabled": "#AC9BDB",
            //     "primary-active": "#482384",
            //     "text-primary-disabled": "#7260A4",

            //     // Secondary colors
            //     secondary: "#F78E5A",
            //     "secondary-accent": "#FCF0EE",
            //     "secondary-disabled": "#F7D5C2",
            //     "secondary-active": "#AF522A",
            //     "text-secondary-disabled": "#F0A47A",

            //     // Text colors
            //     "text-default": "#0D0815",
            //     "text-light": "#F8F8F8",

            //     // Gray colors
            //     "grey-100": "#F7F7F9",
            //     "grey-200": "#E4E7EC",
            //     "grey-300": "#D0D5DD",
            //     "grey-400": "#98A2B3",
            //     "grey-500": "#667085",
            //     "grey-600": "#344054",
            //     "grey-700": "#1D2939",

            //     // State colors
            //     success: "#58BE62",
            //     danger: "#ED452E",
            //     warning: "#FEC84B",
            //     info: "#58A1D4",
            //     "success-accent": "#ECFBEE",
            //     "danger-accent": "#FFF4F3",
            //     "warning-accent": "#FFFAEB",
            //     "info-accent": "#E2EFF8",

            //     // Background colors
            //     background: "#FDFCFF",
            // },
        },
    },
    plugins: [require("tailwindcss-animate"), require("@4rchx824/ui")],
} satisfies Config;

console.log(config)

export default config;
