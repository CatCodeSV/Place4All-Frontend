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
    primary: '#006699',
    secondary: '#F39200',
    background: '#FFFFFF',
    surface: '#F2F2F2',
    error: '#FF3333',
    success: '#5CB85C',
    warning: '#FFA500',
    info: '#4E4E4E',
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
