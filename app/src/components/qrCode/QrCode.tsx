import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { CameraView } from 'expo-camera';
import styles from './styles';

interface QrCodeProps {
  permissao: any;
  leituraAutomatica: boolean;
  escaneado: boolean;
  ultimoQR: string;
  manipularEscaneamentoBarra: (args: { data: string }) => void;
  setEscaneado: (v: boolean) => void;
  setUltimoQR: (s: string) => void;
}

export default function QrCodeScanner({
  permissao,
  leituraAutomatica,
  escaneado,
  ultimoQR,
  manipularEscaneamentoBarra,
  setEscaneado,
  setUltimoQR,
}: QrCodeProps) {
  return (
    <>
      {/* Barra Superior */}
      <View style={styles.barraSuperior}>
        <Text style={styles.tituloBarraSuperior}>Leitura QR</Text>
        <View style={styles.espacadorBarraSuperior} />
      </View>

      {/* Área da Câmera */}
      <View style={styles.conteinerCamera} accessibilityLabel="Área de leitura QR Code">
        {permissao?.granted ? (
          <CameraView
            style={StyleSheet.absoluteFill}
            facing="back"
            barcodeScannerSettings={{ barcodeTypes: ['qr'] }}
            onBarcodeScanned={
              leituraAutomatica && !escaneado ? manipularEscaneamentoBarra : undefined
            }
          />
        ) : (
          <View style={[StyleSheet.absoluteFill, styles.semPermissao]}>
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
              {ultimoQR}
            </Text>
            <TouchableOpacity
              style={styles.botaoNovaLeitura}
              onPress={() => {
                setEscaneado(false);
                setUltimoQR('');
              }}
            >
              <Text style={styles.textoNovaLeitura}>voltar</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <Text style={styles.dicaLeitura}>Centralize o QR code do rack na área</Text>
        )}
      </View>
    </>
  );
}
