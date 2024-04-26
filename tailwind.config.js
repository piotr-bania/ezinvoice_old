import { nextui } from '@nextui-org/react'

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
        extend: {},
    },
    darkMode: 'class',
    plugins: [nextui({
        themes: {
            light: {
                colors: {
                    // Background colors
                    background: '#F0F4FF',
                    white: '#FFFFFF',
                    // Primary colors
                    primary: {
                        100: '#E4DFFE',
                        200: '#C9C0FE',
                        300: '#ACA0FC',
                        400: '#9588F9',
                        500: '#7B6EF6',
                        600: '#624FC1',
                        700: '#49328C',
                        800: '#311557',
                        900: '#190822',
                        DEFAULT: '#7B6EF6',
                    },                                     
                    // Secondary colors
                    secondary: {
                        100: '#E8F7FF',
                        200: '#C0E7FF',
                        300: '#98D7FF',
                        400: '#70C7FF',
                        500: '#48B7FF',
                        600: '#398EC6',
                        700: '#2A658D',
                        800: '#1B3C54',
                        900: '#0D132B',
                        DEFAULT: '#48B7FF',
                    },                    
                    // Accent colors
                    accent: {
                        100: '#FFE4CC',
                        200: '#FFD1AA',
                        300: '#FFBF88',
                        400: '#FFAC66',
                        500: '#FF9944',
                        600: '#CC7936',
                        700: '#995928',
                        800: '#663A1A',
                        900: '#331D0D',
                        DEFAULT: '#FF9944',
                    },
                    // Neutral colors
                    neutral: {
                        100: '#F5F5F5',
                        200: '#E1E1E1',
                        300: '#CDCDCD',
                        400: '#B9B9B9',
                        500: '#A5A5A5',
                        600: '#848484',
                        700: '#626262',
                        800: '#414141',
                        900: '#212121',
                        DEFAULT: '#A5A5A5',
                    },
                    // Success colors
                    success: {
                        DEFAULT: '#34D399',
                    },
                    // Warning colors
                    warning: {
                        DEFAULT: '#FBBF24',
                    },
                    // Error colors
                    error: {
                        DEFAULT: '#EF4444',
                    },
                    // Info colors
                    info: {
                        DEFAULT: '#60A5FA',
                    },
                    // Text colors
                    text_primary: '#334155',
                    text_secondary: '#475569',
                    text_tertiary: '#64748B',
                    text_muted: '#CBD5E1',
                    // Heading colors
                    heading_primary: '#1E293B',
                    heading_secondary: '#334155',
                }
            }
        }
    })]
}