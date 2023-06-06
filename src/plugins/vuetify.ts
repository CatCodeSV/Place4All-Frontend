import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';

import { createVuetify, ThemeDefinition } from 'vuetify';

const customDarkTheme: ThemeDefinition = {
  dark: true,
  colors: {
    primary: '#006699',
    secondary: '#F39200',
    background: '#F2F2F2',
    surface: '#FFFFFF',
    error: '#FF3333',
    success: '#5CB85C',
    warning: '#FFA500',
    info: '#4E4E4E',
  },
};

const customLightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    primary: '#0B3D91',
    'primary-200': '#C9D4E7',
    'primary-300': '#93A9CE',
    'primary-800': '#051B40',
    'primary-900': '#020E20',
    'neutral-100': '#F1F1F2',
    'secondary-200': '#FDEECE',
    action: '#F7BC3D',
    secondary: '#87CEEB',
    secondaryYellow: '#F6E8B1',
    background: '#F6F6F6',
    surface: '#F6F6F6',
    error: '#FE452B',
    success: '#45A46C',
    warning: '#F96C16',
    info: '#006699',
    textGrey: '#4E4E4E',
  },
};

export default createVuetify({
  theme: {
    defaultTheme: 'customLightTheme',
    themes: {
      customDarkTheme,
      customLightTheme,
    },
  },
});
