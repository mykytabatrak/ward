const plugin = require('tailwindcss/plugin');
const radixColors = require('@radix-ui/colors');

/**
 * @param {string} hslString
 * @returns {{ hue: number, saturation: number, lightness: number }}
 */
const parseHSL = (hslString) => {
  /**
   * @type {RegExp}
   */
  const hslRegex =
    /^hsl\((\d+(?:\.\d+)?),\s*(\d+(?:\.\d+)?)%,\s*(\d+(?:\.\d+)?)%\)$/;

  const matches = hslString.match(hslRegex);
  if (!matches) {
    throw new Error(`Invalid CSS HSL string: ${hslString}`);
  }

  const hue = parseFloat(matches[1]);
  const saturation = parseFloat(matches[2]);
  const lightness = parseFloat(matches[3]);

  return { hue, saturation, lightness };
};

const colors = Object.entries(radixColors);

const lightColors = colors
  .filter(([space]) => !space.includes('Dark'))
  .map(([_, value]) => Object.entries(value))
  .flat();
const darkColors = colors
  .filter(([space]) => space.includes('Dark'))
  .map(([_, value]) => Object.entries(value))
  .flat();

const colorNameToPropertyMap = lightColors.map(([name]) => {
  if (name.includes('A')) {
    return [name, `var(--${name})`];
  }

  return [name, `hsl(var(--${name}) / <alpha-value>)`];
});

const lightColorPropertiesMap = lightColors.map(([name, value]) => {
  const propertyName = `--${name}`;
  if (name.includes('A')) {
    return [propertyName, value];
  }

  const { hue, saturation, lightness } = parseHSL(value);
  return [propertyName, `${hue}deg ${saturation}% ${lightness}%`];
});
const darkColorPropertiesMap = darkColors.map(([name, value]) => {
  const propertyName = `--${name}`;
  if (name.includes('A')) {
    return [propertyName, value];
  }

  const { hue, saturation, lightness } = parseHSL(value);
  return [propertyName, `${hue}deg ${saturation}% ${lightness}%`];
});

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      animation: {
        'popover-in-top': 'popover-in-top 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        'popover-in-right':
          'popover-in-right 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        'popover-in-bottom':
          'popover-in-bottom 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        'popover-in-left':
          'popover-in-left 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        'popover-out-top':
          'popover-out-top 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        'popover-out-right':
          'popover-out-right 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        'popover-out-bottom':
          'popover-out-bottom 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        'popover-out-left':
          'popover-out-left 400ms cubic-bezier(0.16, 1, 0.3, 1)',

        'overlay-in': 'overlay-in 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        'overlay-out': 'overlay-out 400ms cubic-bezier(0.16, 1, 0.3, 1)',

        'dialog-in': 'dialog-in 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        'dialog-out': 'dialog-out 150ms cubic-bezier(0.16, 1, 0.3, 1)',

        'sheet-in-top': 'sheet-in-top 150ms cubic-bezier(0.22, 1, 0.36, 1)',
        'sheet-out-top': 'sheet-out-top 150ms cubic-bezier(0.22, 1, 0.36, 1)',
        'sheet-in-right': 'sheet-in-right 150ms cubic-bezier(0.22, 1, 0.36, 1)',
        'sheet-out-right':
          'sheet-out-right 150ms cubic-bezier(0.22, 1, 0.36, 1)',
        'sheet-in-bottom':
          'sheet-in-bottom 150ms cubic-bezier(0.22, 1, 0.36, 1)',
        'sheet-out-bottom':
          'sheet-out-bottom 150ms cubic-bezier(0.22, 1, 0.36, 1)',
        'sheet-in-left': 'sheet-in-left 150ms cubic-bezier(0.22, 1, 0.36, 1)',
        'sheet-out-left': 'sheet-out-left 150ms cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        'popover-in-top': {
          from: { opacity: 0, transform: 'translateY(2px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        'popover-in-right': {
          from: { opacity: 0, transform: 'translateX(-2px)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
        'popover-in-bottom': {
          from: { opacity: 0, transform: 'translateY(-2px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        'popover-in-left': {
          from: { opacity: 0, transform: 'translateX(2px)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
        'popover-out-top': {
          from: { opacity: 1, transform: 'translateY(0)' },
          to: { opacity: 0, transform: 'translateY(2px)' },
        },
        'popover-out-right': {
          from: { opacity: 1, transform: 'translateX(0)' },
          to: { opacity: 0, transform: 'translateX(-2px)' },
        },
        'popover-out-bottom': {
          from: { opacity: 1, transform: 'translateY(0)' },
          to: { opacity: 0, transform: 'translateY(-2px)' },
        },
        'popover-out-left': {
          from: { opacity: 1, transform: 'translateX(0)' },
          to: { opacity: 0, transform: 'translateX(2px)' },
        },

        'overlay-in': {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        'overlay-out': {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },

        'dialog-in': {
          from: { opacity: 0, transform: 'translateY(2%) scale(0.96)' },
          to: { opacity: 1, transform: 'translateY(0) scale(1)' },
        },
        'dialog-out': {
          from: { opacity: 1, transform: 'translateY(0) scale(1)' },
          to: { opacity: 0, transform: 'translateY(2%) scale(0.96)' },
        },

        'sheet-in-top': {
          from: { transform: 'translate(0, -100%)' },
          to: { transform: 'translate(0, 0)' },
        },
        'sheetOutT--tp': {
          from: { transform: 'translate(0, 0)' },
          to: { transform: 'translate(0, -100%)' },
        },
        'sheet-in-right': {
          from: { transform: 'translate(100%, 0)' },
          to: { transform: 'translate(0, 0)' },
        },
        'sheet-out-right': {
          from: { transform: 'translate(0, 0)' },
          to: { transform: 'translate(100%, 0)' },
        },
        'sheet-in-bottom': {
          from: { transform: 'translate(0, 100%)' },
          to: { transform: 'translate(0, 0)' },
        },
        'sheet-out-bottom': {
          from: { transform: 'translate(0, 0)' },
          to: { transform: 'translate(0, 100%)' },
        },
        'sheet-in-left': {
          from: { transform: 'translate(-100%, 0)' },
          to: { transform: 'translate(0, 0)' },
        },
        'sheet-out-left': {
          from: { transform: 'translate(0, 0)' },
          to: { transform: 'translate(-100%, 0)' },
        },
      },
    },
  },
  plugins: [
    plugin(
      function ({ addBase }) {
        const lightColorProperties = Object.fromEntries(
          lightColorPropertiesMap
        );
        const darkColorProperties = Object.fromEntries(darkColorPropertiesMap);

        addBase({
          ':root': { 'color-scheme': 'light dark', ...lightColorProperties },
          ':root[data-color-scheme="light"]': lightColorProperties,
          ':root[data-color-scheme="dark"]': darkColorProperties,
          '@media (prefers-color-scheme: light)': {
            ':root[data-color-scheme="system"]': lightColorProperties,
          },
          '@media (prefers-color-scheme: dark)': {
            ':root[data-color-scheme="system"]': darkColorProperties,
          },
        });
      },
      {
        theme: {
          extend: {
            colors: Object.fromEntries(colorNameToPropertyMap),
          },
        },
      }
    ),
  ],
};
