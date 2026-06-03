import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Inter_400Regular, Inter_500Medium, Inter_700Bold, useFonts } from '@expo-google-fonts/inter';
import  CoidsBadge  from '../../components/badge/CoidsBadge';
import { styles } from './style';
import React from 'react';

export default function Inicio() {

  {/* Carregamento das fontes */}
  const [loaded] = useFonts({
    'Inter-Regular': Inter_400Regular,
    'Inter-Medium':  Inter_500Medium,
    'Inter-Bold':    Inter_700Bold,
  });

  if (!loaded) return null;

  return (
<View style={styles.container}>

      {/* cabeçalho azul */}
      <View style={styles.header}>

        <View style={styles.titleRow}>
          <CoidsBadge size="md"/>
          <Text style={styles.headerTitle}>Rack Manager</Text>
        </View>
        
        <Text style={styles.bemVindo}>Bem-vindo</Text>
        <Text style={styles.rackName}></Text>
        
        <View style={styles.badgeGestao}>
          <Text style={styles.gestaoDeRacks}>Gestão de Racks</Text>
        </View>
        
        {/* QR CODE */}
        <View style = {{ bottom: -10, alignItems: 'center'}}>
        
          <TouchableOpacity onPress={() => {}}>
            <View style={styles.containerQRCODE}>
              <Image
              source={require('../../assets/imagens/qr-code.jpg')}
              style={{ borderRadius: 70, width: 100, height: 100 }}
              />
              <Text style={styles.qrTitle}>Ler QR do Rack</Text>
              <Text>Aponte para o código no rack</Text>
            </View>
          </TouchableOpacity>
          
        </View>
      
      
      </View>
      


    </View>
  );
}

