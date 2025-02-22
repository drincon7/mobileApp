import { MD3LightTheme, MD3DarkTheme, configureFonts } from 'react-native-paper';
import Colors from '@/lib/ui/styles/colors';

const fonts = configureFonts({ config: { fontFamily: 'NotoSans_400Regular' } });

const LightTheme = {
  ...MD3LightTheme,
  fonts,
  colors: {
    ...MD3LightTheme.colors, // Asegura que extiende los valores de Paper
    ...Colors.light.default, // Aplica los colores personalizados
  },
};

const DarkTheme = {
  ...MD3DarkTheme,
  fonts,
  colors: {
    ...MD3DarkTheme.colors, // Asegura que extiende los valores de Paper
    ...Colors.dark.default, // Aplica los colores personalizados
  },
};

const Themes = {
  light: LightTheme,
  dark: DarkTheme,
};

export default Themes;
