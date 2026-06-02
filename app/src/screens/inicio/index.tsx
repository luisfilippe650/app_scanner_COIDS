import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useFonts } from 'expo-font';
import { styles } from './style';

export default function Inicio() {
const [loaded] = useFonts({
  'Rawline-Regular': require('../../../assets/fonts/Rawline-Regular.ttf'),
  'Rawline-Medium':  require('../../../assets/fonts/Rawline-Medium.ttf'),
  'Rawline-Bold':    require('../../../assets/fonts/Rawline-Bold.ttf'),
});

  if (!loaded) return null; // aguarda carregar as fontes

  return (
    <View style={styles.container}>
      {/* cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.regularfont}>Rack Manager</Text>
        <Text style={styles.logo}>INPE-COIDS</Text>
      </View>
      {/* corpo */}
      <View>
        <Text>Bem-vindo</Text>
        <Text>Gestão de Racks</Text>
      </View>
      {/* botão QR */}
      <View>
        <TouchableOpacity onPress={() => {}}>
          <Image
            source={require('../../assets/imagens/image.png')}
            style={{ width: 100, height: 100 }}
          />
          <Text style={styles.qrTitle}>Ler QR do Rack</Text>
          <Text>Aponte para o código no rack</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}