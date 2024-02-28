/** @type {import('tailwindcss').Config} */
import type { Config } from 'tailwindcss';

/**
 * Tailwind CSS Configuration
 *
 * This file defines the configuration for Tailwind CSS, a utility-first CSS framework.
 * It extends the default theme with a custom color palette.
 *
 * @see https://tailwindcss.com/docs/configuration
 * @type {Config}
 */

const colorPalette = {
  customDark: {
    '50': '#ffffff',
    '100': '#e6e6e6',
    '200': '#cccccc',
    '300': '#b3b3b3',
    '400': '#999999',
    '500': '#808080',
    '600': '#666666',
    '700': '#4d4d4d',
    '800': '#333333',
    '900': '#1a1a1a',
    '950': '#000000',
  },
  customGray: {
    '50': '#f9fafb',
    '100': '#f3f4f6',
    '200': '#e5e7eb',
    '300': '#d1d5db',
    '400': '#9ca3af',
    '500': '#6b7280',
    '600': '#4b5563',
    '700': '#374151',
    '800': '#1f2937',
    '900': '#111827',
    '950': '#030712',
  },
  customNeutral: {
    '50': '#fafafa',
    '100': '#f5f5f5',
    '200': '#e5e5e5',
    '300': '#d4d4d4',
    '400': '#a3a3a3',
    '500': '#737373',
    '600': '#525252',
    '700': '#404040',
    '800': '#262626',
    '900': '#171717',
    '950': '#0a0a0a',
  },
  primary: {
    '50': '#b4dbf1',
    '100': '#90ccf2',
    '200': '#6cbdf4',
    '300': '#49aef5',
    '400': '#259ff7',
    '500': '#0190f8', // color de referencia
    '600': '#0177d3',
    '700': '#015dae',
    '800': '#014488',
    '900': '#012a63',
    '950': '#01113e',
  },
  secondary: {
    '50': '#acf3e3',
    '100': '#9af0dc',
    '200': '#88ecd5',
    '300': '#75e9cd',
    '400': '#63e5c6',
    '500': '#51e2bf', // color de referencia
    '600': '#43c0a3',
    '700': '#359e87',
    '800': '#267d6c',
    '900': '#185b50',
    '950': '#0a3934',
  },
  accent: {
    '50': '#fdd1dc',
    '100': '#fdb1c4',
    '200': '#fd92ab',
    '300': '#fd7293',
    '400': '#fd537a',
    '500': '#fd3362', // color de referencia
    '600': '#d92e57',
    '700': '#b6294c',
    '800': '#922441',
    '900': '#6f1f36',
    '950': '#4b1a2b',
  },
};

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './containers/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: colorPalette.customDark,
        light: colorPalette.customDark,
        customGray: colorPalette.customGray,
        customNeutral: colorPalette.customNeutral,
        primary: colorPalette.primary,
        secondary: colorPalette.secondary,
        accent: colorPalette.accent,
        textColorPrimary: colorPalette.primary,
        textColorSecondary: colorPalette.secondary,
        textColorAccent: colorPalette.accent,
        textColorNeutral: colorPalette.customDark,
        bgPrimaryDark: colorPalette.customDark[950],
        bgSecondaryDark: colorPalette.customDark[900],
        borderNeutral: colorPalette.customNeutral,
      },
      backgroundImage: {
        greenBrushStroke1:
          "url('../../public/assets/greenBrushStroke1.min.svg')",
        greenBrushStroke2:
          "url('../../public/assets/greenBrushStroke2.min.svg')",
        greenBrushStroke3:
          "url('../../public/assets/greenBrushStroke3.min.svg')",
        greenBrushStroke4:
          "url('../../public/assets/greenBrushStroke4.min.svg')",
        greenBrushStroke5:
          "url('../../public/assets/greenBrushStroke5.min.svg')",
        fucsiaBrushStroke2:
          "url('../../public/assets/fucsiaBrushStroke2.min.svg')",
        blueBrushStroke2: "url('../../public/assets/blueBrushStroke2.min.svg')",
        bgMovieCard: "url('../../public/images/defaultImageCard.min.svg')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
