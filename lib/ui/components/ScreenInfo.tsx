import { Image } from 'react-native'
import { Chip, Text } from 'react-native-paper'
import { Locales } from '@/lib/locales'
import GradientBackground from './GradientBackground'

const ScreenInfo = (props: { title: string; path: string }) => (
  <>

    <Image 
      source={require('@/assets/images/logo.png')} // Ruta de la imagen
      style={{
        width: 100, // Ajusta el tamaño según necesites
        height: 100,
        resizeMode: 'contain', // Ajusta cómo se muestra la imagen
        alignSelf: 'center', // Centra la imagen
      }}
    />

    <Text variant="displaySmall">{props.title}</Text>
    
    <Text variant="bodyLarge" style={{ textAlign: 'center' }}>
      {Locales.t('changeScreenCode')}
    </Text>
  </>

  
)

export default ScreenInfo
