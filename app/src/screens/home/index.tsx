import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  TextInput,
  Modal,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { CameraView, useCameraPermissions } from 'expo-camera';
import styles, { colors } from './style';
import CoidsBadge from '../../components/badge/CoidsBadge';

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  // --- Estados da Câmera ---
  const [permissao, pedirPermissao] = useCameraPermissions();
  const [escaneado, setEscaneado] = useState(false);
  const [ultimoQR, setUltimoQR] = useState('');
  
  // --- Estados de Configuração e Modal ---
  const [leituraAutomatica, setLeituraAutomatica] = useState(true);
  const [modalManualVisivel, setModalManualVisivel] = useState(false);
  const [idManual, setIdManual] = useState('');

  // Solicita permissão ao montar a tela
  useEffect(() => {
    pedirPermissao();
  }, []);

  /**
   * Processa o QR Code detectado pela câmera.
   */
  function manipularEscaneamentoBarra({ data }: { data: string }) {
    setEscaneado(true);
    setUltimoQR(data);
    // TODO: Implementar navegação para a tela de dados: navigation.navigate('Data', { rackId: data });
    console.log('QR lido:', data);
  }

  /**
   * Processa o ID inserido manualmente no modal.
   */
  const manipularSubmissaoManual = () => {
    if (idManual.trim()) {
      // TODO: Implementar navegação para a tela de dados: navigation.navigate('Data', { rackId: idManual.trim() });
      console.log('ID manual:', idManual.trim());
      setModalManualVisivel(false);
      setIdManual('');
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: colors.background1 }}>
      <View style={{ height: insets.top, backgroundColor: colors.backgroundtop }} />
      <StatusBar barStyle="light-content" backgroundColor={colors.backgroundtop} />

      <SafeAreaView edges={['left', 'right', 'bottom']} style={styles.conteiner}>
        
      <CoidsBadge 
        size="line" 
        imageSource={require('../../assets/logos/logo-coids.png')}
      />

      {/* Barra Superior */}
      <View style={styles.barraSuperior}>
        <Text style={styles.tituloBarraSuperior}>Leitura QR</Text>
        <View style={styles.espacadorBarraSuperior} />
      </View>

      {/* Área da Câmera */}
      <View style={styles.conteinerCamera} accessibilityLabel="Área de leitura QR Code">
        {permissao?.granted ? (
          <CameraView
            style={StyleSheet.absoluteFillObject}
            facing="back"
            barcodeScannerSettings={{ barcodeTypes: ['qr'] }}
            onBarcodeScanned={
              leituraAutomatica && !escaneado ? manipularEscaneamentoBarra : undefined
            }
          />
        ) : (
          <View style={[StyleSheet.absoluteFillObject, styles.semPermissao]}>
            <Text style={styles.textoSemPermissao}>
              {permissao?.canAskAgain
                ? 'Aguardando permissão de câmera...'
                : 'Permissão de câmera negada. Habilite nas configurações.'}
            </Text>
          </View>
        )}

        {/* Cantos Decorativos */}
        <View style={[styles.baseCanto, styles.cantoSuperiorEsquerdo]} />
        <View style={[styles.baseCanto, styles.cantoSuperiorDireito]} />
        <View style={[styles.baseCanto, styles.cantoInferiorEsquerdo]} />
        <View style={[styles.baseCanto, styles.cantoInferiorDireito]} />

        {/* Feedback de Leitura ou Dica */}
        {escaneado ? (
          <View style={styles.sobreposicaoEscaneado}>
            <Text style={styles.textoEscaneado} numberOfLines={2}>
              ✅ {ultimoQR}
            </Text>
            <TouchableOpacity
              style={styles.botaoNovaLeitura}
              onPress={() => {
                setEscaneado(false);
                setUltimoQR('');
              }}
            >
          
              <Text style={styles.textoNovaLeitura}>Ler novamente</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <Text style={styles.dicaLeitura}>Centralize o QR code do rack na área</Text>
        )}
      </View>
      

      <View style={styles.espacadorVertical} />

      {/* Opção: Leitura Automática */}
      <View style={styles.cartaoOpcao}>
        <View style={styles.conteinerOpcaoEsquerda}>
          <View style={styles.envolturaIconeOpcao}>
            <Image 
              source={require('../../assets/icons/icon_leitura_automatica.png')} 
              style={styles.iconeOpcao} 
            />
          </View>
          <View>
            <Text style={styles.rotuloOpcao}>Leitura automática</Text>
            <Text style={styles.subtituloOpcao}>Detecta o código ao focar</Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            setLeituraAutomatica((v) => !v);
            setEscaneado(false); 
          }}
          accessibilityRole="switch"
          accessibilityState={{ checked: leituraAutomatica }}
          accessibilityLabel="Leitura automática"
        >
          <View style={[styles.botaoAlternador, !leituraAutomatica && styles.botaoAlternadorDesligado]}>
            <View style={styles.pontoAlternador} />
          </View>
        </TouchableOpacity>
      </View>
      
      <View style={styles.espacadorVertical} />
      
      {/* Opção: Inserção Manual */}
      <TouchableOpacity
        style={styles.cartaoOpcao}
        onPress={() => setModalManualVisivel(true)}
        accessibilityRole="button"
        accessibilityLabel="Inserir ID manualmente"
      >
        <View style={styles.conteinerOpcaoEsquerda}>
          <View style={styles.envolturaIconeOpcao}>
            <Image 
              source={require('../../assets/icons/icon_inserir_id.png')}
              style={styles.iconeOpcao} 
            />
          </View>
          <View>
            <Text style={styles.rotuloOpcao}>Inserir ID manualmente</Text>
            <Text style={styles.subtituloOpcao}>Digite o id do equipamento direto</Text>
          </View>
        </View>
        <Text style={styles.iconeSeta}>›</Text>
      </TouchableOpacity>

      {/* Modal para Inserção Manual de ID */}
      <Modal
        visible={modalManualVisivel}
        transparent
        animationType="slide"
        onRequestClose={() => setModalManualVisivel(false)}
      >
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <View style={styles.modalSobreposicao}>
            <View style={styles.modalConteudo}>
              <Text style={styles.modalTitulo}>Inserir ID manualmente</Text>
              <Text style={styles.modalSubtitulo}>
                Digite o rack_id encontrado na etiqueta física
              </Text>
              
              <TextInput
                style={styles.modalInput}
                placeholder="Ex: xxxx-xxxxx-xx"
                placeholderTextColor={colors.textHint}
                value={idManual}
                onChangeText={setIdManual}
                keyboardType="default"
                autoCapitalize="none"
                autoCorrect={false}
                autoFocus
              />

              <TouchableOpacity
                style={styles.modalBotaoPrincipal}
                onPress={manipularSubmissaoManual}
              >
                <Text style={styles.modalTextoBotaoPrincipal}>Buscar Rack</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.modalBotaoCancelar}
                onPress={() => setModalManualVisivel(false)}
              >
                <Text style={styles.modalTextoBotaoCancelar}>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </Modal>
    </SafeAreaView>
    </View>
  );
}
