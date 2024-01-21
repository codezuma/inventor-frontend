import { fontFamily } from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: ['class'],
  content: ['./src/**/*.{html,js,svelte,ts}'],
  safelist: ['dark'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        'roaring-green': {
          DEFAULT: 'var(--roaring-green)',
          shade1: 'var(--roaring-green-shade-1)',
          shade2: 'var(--roaring-green-shade-2)'
        },
        storm: {
          DEFAULT: 'var(--storm-color)',
          shade1: 'var(--storm-shade-1)',
          shade2: 'var(--storm-shade-2)'
        },
        yellow: {
          DEFAULT: 'var(--yellow)',
          shade1: 'var(--yellow-shade-1)',
          shade2: 'var(--yellow-shade-2)'
        },
        'slate-gray': 'var(--dark-slate-grey)',
        neutral: {
          DEFAULT: 'var(--neutral)',
          shade1: 'var(--neutral-shade-1)',
          shade2: 'var(--neutral-shade-2)',
          light: 'var(--neutral-light)',
          'light-shade1': 'var(--neutral-light-shade-1)',
          'light-shade2': 'var(--neutral-light-shade-2)'
        },
        bolt: {
          DEFAULT: 'var(--bolt)',
          shade1: 'var(--bolt-shade-1)',
          shade2: 'var(--bolt-shade-2)'
        },
        'select-color': 'var(--select-color)',
        border: 'hsl(var(--border) / <alpha-value>)',
        input: 'hsl(var(--input) / <alpha-value>)',
        ring: 'hsl(var(--ring) / <alpha-value>)',
        background: 'hsl(var(--background) / <alpha-value>)',
        foreground: 'hsl(var(--foreground) / <alpha-value>)',
        primary: {
          DEFAULT: 'hsl(var(--primary) / <alpha-value>)',
          foreground: 'hsl(var(--primary-foreground) / <alpha-value>)'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary) / <alpha-value>)',
          foreground: 'hsl(var(--secondary-foreground) / <alpha-value>)'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive) / <alpha-value>)',
          foreground: 'hsl(var(--destructive-foreground) / <alpha-value>)'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted) / <alpha-value>)',
          foreground: 'hsl(var(--muted-foreground) / <alpha-value>)'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent) / <alpha-value>)',
          foreground: 'hsl(var(--accent-foreground) / <alpha-value>)'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover) / <alpha-value>)',
          foreground: 'hsl(var(--popover-foreground) / <alpha-value>)'
        },
        card: {
          DEFAULT: 'hsl(var(--card) / <alpha-value>)',
          foreground: 'hsl(var(--card-foreground) / <alpha-value>)'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      fontFamily: {
        sans: [...fontFamily.sans]
      }
    }
  }
};

export default config;
