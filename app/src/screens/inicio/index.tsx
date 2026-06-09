import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  TextInput,
  Modal,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles, { colors } from './style';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/navigation';
import CoidsBadge from '../../components/badge/CoidsBadge';
import { CameraView, useCameraPermissions } from 'expo-camera';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Inicio'>;

export default function HomeScreen() {
  const navigation = useNavigation<NavigationProp>();

  // --- estados existentes ---
  const [autoScan, setAutoScan] = useState(true);
  const [manualModalVisible, setManualModalVisible] = useState(false);
  const [manualId, setManualId] = useState('');

  // --- novos estados da câmera ---
  const [permission, requestPermission] = useCameraPermissions();
  const [scanned, setScanned] = useState(false);
  const [lastQR, setLastQR] = useState('');

  // Pede permissão ao montar a tela
  useEffect(() => {
    requestPermission();
  }, []);

  // Callback chamado quando a câmera detecta um QR
  function handleBarCodeScanned({ data }: { data: string }) {
    setScanned(true);
    setLastQR(data);
    // TODO: navegar ou processar o dado lido
    // navigation.navigate('Dados', { rackId: data });
    console.log('QR lido:', data);
  }

  const handleManualSubmit = () => {
    if (manualId.trim()) {
      // TODO: navegar ou processar o ID manual
      // navigation.navigate('Dados', { rackId: manualId.trim() });
      console.log('ID manual:', manualId.trim());
      setManualModalVisible(false);
      setManualId('');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />

      <CoidsBadge size="line" label="INPE - COIDS" />

      {/* Top bar */}
      <View style={styles.topBar}>
        <Text style={styles.topBarTitle}>Leitura QR</Text>
        <View style={styles.topBarSpacer} />
      </View>

      {/* Camera viewfinder */}
      <View style={styles.cameraContainer} accessibilityLabel="Área de leitura QR Code">

        {/* Câmera real ou fallback de permissão */}
        {permission?.granted ? (
          <CameraView
            style={StyleSheet.absoluteFillObject}
            facing="back"
            barcodeScannerSettings={{ barcodeTypes: ['qr'] }}
            onBarcodeScanned={
              autoScan && !scanned ? handleBarCodeScanned : undefined
            }
          />
        ) : (
          <View style={[StyleSheet.absoluteFillObject, localStyles.noPermission]}>
            <Text style={localStyles.noPermissionText}>
              {permission?.canAskAgain
                ? 'Aguardando permissão de câmera...'
                : 'Permissão de câmera negada. Habilite nas configurações.'}
            </Text>
          </View>
        )}

        {/* Cantos decorativos */}
        <View style={[styles.cornerBase, styles.cornerTL]} />
        <View style={[styles.cornerBase, styles.cornerTR]} />
        <View style={[styles.cornerBase, styles.cornerBL]} />
        <View style={[styles.cornerBase, styles.cornerBR]} />

        {/* Linha de scan (só aparece quando não leu ainda) */}
        {!scanned && <View style={styles.scanLine} />}

        {/* Hint ou resultado */}
        {scanned ? (
          <View style={localStyles.scannedOverlay}>
            <Text style={localStyles.scannedText} numberOfLines={2}>
              ✅ {lastQR}
            </Text>
            <TouchableOpacity
              style={localStyles.rescanButton}
              onPress={() => {
                setScanned(false);
                setLastQR('');
              }}
            >
              <Text style={localStyles.rescanText}>Ler novamente</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <Text style={styles.scanHint}>Centralize o QR code do rack na área</Text>
        )}
      </View>

      {/* Auto scan toggle */}
      <View style={styles.optionCard}>
        <View style={styles.optionLeft}>
          <View style={styles.optionIconWrap}>
            <Text style={{ fontSize: 18 }}>⚡</Text>
          </View>
          <View>
            <Text style={styles.optionLabel}>Leitura automática</Text>
            <Text style={styles.optionSub}>Detecta o código ao focar</Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            setAutoScan((v) => !v);
            setScanned(false); // reseta ao trocar modo
          }}
          accessibilityRole="switch"
          accessibilityState={{ checked: autoScan }}
          accessibilityLabel="Leitura automática"
        >
          <View style={[styles.togglePill, !autoScan && styles.togglePillOff]}>
            <View style={styles.toggleDot} />
          </View>
        </TouchableOpacity>
      </View>

      {/* Manual ID input */}
      <TouchableOpacity
        style={styles.optionCard}
        onPress={() => setManualModalVisible(true)}
        accessibilityRole="button"
        accessibilityLabel="Inserir ID manualmente"
      >
        <View style={styles.optionLeft}>
          <View style={styles.optionIconWrap}>
            <Text style={{ fontSize: 18 }}>✏️</Text>
          </View>
          <View>
            <Text style={styles.optionLabel}>Inserir ID manualmente</Text>
            <Text style={styles.optionSub}>Digite o rack_id direto</Text>
          </View>
        </View>
        <Text style={styles.chevron}>›</Text>
      </TouchableOpacity>

      {/* Manual ID modal */}
      <Modal
        visible={manualModalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setManualModalVisible(false)}
      >
        <View style={{
          flex: 1,
          backgroundColor: 'rgba(0,0,0,0.3)',
          justifyContent: 'flex-end',
        }}>
          <View style={{
            backgroundColor: colors.surface,
            borderTopLeftRadius: 24,
            borderTopRightRadius: 24,
            padding: 24,
            paddingBottom: 40,
          }}>
            <Text style={{
              fontSize: 17,
              fontWeight: '600',
              color: colors.textPrimary,
              marginBottom: 4,
            }}>
              Inserir ID manualmente
            </Text>
            <Text style={{
              fontSize: 13,
              color: colors.textSecondary,
              marginBottom: 16,
            }}>
              Digite o rack_id encontrado na etiqueta física
            </Text>
            <TextInput
              style={{
                backgroundColor: colors.background,
                borderRadius: 12,
                borderWidth: 1,
                borderColor: colors.border,
                paddingHorizontal: 14,
                paddingVertical: 12,
                fontSize: 15,
                color: colors.textPrimary,
                marginBottom: 16,
              }}
              placeholder="Ex: xxxx-xxxxx-xx"
              placeholderTextColor={colors.textHint}
              value={manualId}
              onChangeText={setManualId}
              keyboardType="number-pad"
              autoFocus
            />
            <TouchableOpacity
              style={{
                backgroundColor: colors.primary,
                borderRadius: 12,
                paddingVertical: 14,
                alignItems: 'center',
              }}
              onPress={handleManualSubmit}
            >
              <Text style={{ color: '#FFFFFF', fontWeight: '600', fontSize: 15 }}>
                Buscar Rack
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ marginTop: 12, alignItems: 'center' }}
              onPress={() => setManualModalVisible(false)}
            >
              <Text style={{ color: colors.textSecondary, fontSize: 14 }}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

// Estilos locais novos (só o que não existe no style.tsx)
const localStyles = StyleSheet.create({
  noPermission: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0d0d1a',
    padding: 24,
  },
  noPermissionText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
    opacity: 0.7,
  },
  scannedOverlay: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
    backgroundColor: 'rgba(0,0,0,0.75)',
    borderRadius: 12,
    padding: 12,
    alignItems: 'center',
    gap: 8,
  },
  scannedText: {
    color: '#fff',
    fontSize: 13,
    textAlign: 'center',
  },
  rescanButton: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 6,
  },
  rescanText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#0d0d1a',
  },
});