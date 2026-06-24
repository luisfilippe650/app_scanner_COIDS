import React, { useState, useEffect } from 'react';
import {
    View,
    StatusBar, Button,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useCameraPermissions } from 'expo-camera';
import styles, { colors } from './style';
import Top from '../../components/top/Top';
import QrCodeScanner from '../../components/qrCode/QrCode';
import ToggleOption from '../../components/toggleOption/ToggleOption';
import ManualIdOption from '../../components/manualIdOption/ManualIdOption';
import ManualIdModal from '../../components/manualIdModal/ManualIdModal';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/navigation';

export default function HomeScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const insets = useSafeAreaInsets();
  const [permissao, pedirPermissao] = useCameraPermissions();
  const [escaneado, setEscaneado] = useState(false);
  const [ultimoQR, setUltimoQR] = useState('');
  const [leituraAutomatica, setLeituraAutomatica] = useState(true);
  const [modalManualVisivel, setModalManualVisivel] = useState(false);

  useEffect(() => {
   pedirPermissao();
  }, []);

  function manipularEscaneamentoBarra({ data }: { data: string }) {
   setEscaneado(true);
   setUltimoQR(data);
   console.log('QR lido:', data);
   const numericId = parseInt(data, 10);
   navigation.navigate('Data', { rackId: isNaN(numericId) ? undefined : numericId });
  }

  const manipularSubmissaoManual = (idManual: string) => {
   console.log('ID manual:', idManual);
   const numericId = parseInt(idManual, 10);
   navigation.navigate('Data', { rackId: isNaN(numericId) ? undefined : numericId });
  };

  return (
   <Top badgeImage={require('../../assets/logos/logo-coids.png')}>
     <QrCodeScanner
       permissao={permissao}
       leituraAutomatica={leituraAutomatica}
       escaneado={escaneado}
       ultimoQR={ultimoQR}
       manipularEscaneamentoBarra={manipularEscaneamentoBarra}
       setEscaneado={setEscaneado}
       setUltimoQR={setUltimoQR}
     />

     <View style={styles.espacadorVertical} />

     <ToggleOption
       label="Leitura automática"
       subtitle="Detecta o código ao focar"
       icon={require('../../assets/icons/icon_leitura_automatica.png')}
       isEnabled={leituraAutomatica}
       onToggle={(enabled) => {
         setLeituraAutomatica(enabled);
         setEscaneado(false);
       }}
     />

     <View style={styles.espacadorVertical} />

     <ManualIdOption onPress={() => setModalManualVisivel(true)} />

     <ManualIdModal
       visible={modalManualVisivel}
       onClose={() => setModalManualVisivel(false)}
       onSubmit={manipularSubmissaoManual}
     />

   </Top>

  );
}
