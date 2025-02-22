import { MD3DarkTheme, MD3LightTheme } from 'react-native-paper';

const Colors = {
  light: {
    default: {
      ...MD3LightTheme.colors, // 🔹 Extiende los colores base del tema claro
      primary: '#007bff', // Azul vibrante
      onPrimary: '#ffffff',
      primaryContainer: '#b3d7ff', // Azul más claro
      onPrimaryContainer: '#003b99', // Azul oscuro
      secondary: '#00a3e0', // Cian brillante
      onSecondary: '#ffffff',
      secondaryContainer: '#99e6ff',
      onSecondaryContainer: '#004e66',
      tertiary: '#0056b3', // Azul profundo
      onTertiary: '#ffffff',
      tertiaryContainer: '#b3cfff',
      onTertiaryContainer: '#003380',
      error: '#dc3545',
      onError: '#ffffff',
      errorContainer: '#f8d7da',
      onErrorContainer: '#7a1c25',
      background: '#e3f2fd', // 🎨 Fondo azul claro
      onBackground: '#212529',
      surface: '#ffffff',
      onSurface: '#000000',
      surfaceVariant: '#e0e0e0',
      onSurfaceVariant: '#5c5c5c',
      outline: '#ced4da',
      outlineVariant: '#b0b3b8',
      shadow: '#0d0d0d',
      scrim: '#000000',
      inverseSurface: '#1a1a1a',
      inverseOnSurface: '#f8f9fa',
      inversePrimary: '#99c2ff',
      elevation: {
        level0: 'transparent',
        level1: 'rgb(251, 241, 242)',
        level2: 'rgb(249, 235, 235)',
        level3: 'rgb(246, 229, 227)',
        level4: 'rgb(246, 226, 224)',
        level5: 'rgb(244, 222, 219)',
      },
      surfaceDisabled: 'rgba(32, 26, 24, 0.12)',
      onSurfaceDisabled: 'rgba(32, 26, 24, 0.38)',
      backdrop: 'rgba(59, 45, 41, 0.4)',
    },
  },
  dark: {
    default: {
      ...MD3DarkTheme.colors, // 🔹 Extiende los colores base del tema oscuro
      primary: '#0056b3', // Azul profundo
      onPrimary: '#ffffff',
      primaryContainer: '#003380', // Azul más oscuro
      onPrimaryContainer: '#99c2ff', // Azul claro
      secondary: '#0088cc', // Azul medio con toque cian
      onSecondary: '#ffffff',
      secondaryContainer: '#004e66',
      onSecondaryContainer: '#99e6ff',
      tertiary: '#002855', // Azul marino oscuro
      onTertiary: '#ffffff',
      tertiaryContainer: '#b3cfff',
      onTertiaryContainer: '#003380',
      error: '#ff6b6b',
      onError: '#000000',
      errorContainer: '#7a1c25',
      onErrorContainer: '#f8d7da',
      background: '#0a192f', // 🎨 Fondo azul muy oscuro
      onBackground: '#f8f9fa',
      surface: '#1e1e1e',
      onSurface: '#ffffff',
      surfaceVariant: '#383838',
      onSurfaceVariant: '#b0b3b8',
      outline: '#6c757d',
      outlineVariant: '#5c5c5c',
      shadow: '#0d0d0d',
      scrim: '#000000',
      inverseSurface: '#f8f9fa',
      inverseOnSurface: '#1a1a1a',
      inversePrimary: '#003b99',
      elevation: {
        level0: 'transparent',
        level1: 'rgb(43, 43, 43)',
        level2: 'rgb(50, 50, 50)',
        level3: 'rgb(60, 60, 60)',
        level4: 'rgb(70, 70, 70)',
        level5: 'rgb(80, 80, 80)',
      },
      surfaceDisabled: 'rgba(255, 255, 255, 0.12)',
      onSurfaceDisabled: 'rgba(255, 255, 255, 0.38)',
      backdrop: 'rgba(0, 0, 0, 0.4)',
    },
  },
};

export default Colors;
