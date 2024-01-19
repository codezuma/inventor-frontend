/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      screens: {
        xss: '280px',
        xs: '450px'
      },
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
        "slate-gray":'var(--dark-slate-grey)',
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
        'select-color': 'var(--select-color)'
      }
    }
  },
  plugins: []
};
