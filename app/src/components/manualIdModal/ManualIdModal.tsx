import React, { useState } from 'react';
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { s } from './styles';
import { colors } from '../../utils/colors';

interface ManualIdModalProps {
  visible: boolean;
  onClose: () => void;
  onSubmit: (id: string) => void;
}

export default function ManualIdModal({
  visible,
  onClose,
  onSubmit,
}: ManualIdModalProps) {
  const [idManual, setIdManual] = useState('');

  const handleSubmit = () => {
    if (idManual.trim()) {
      onSubmit(idManual.trim());
      setIdManual('');
    }
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={s.modalSobreposicao}>
          <View style={s.modalConteudo}>
            <Text style={s.modalTitulo}>Inserir ID manualmente</Text>
            <Text style={s.modalSubtitulo}>
              Digite o rack_id encontrado na etiqueta física
            </Text>
            
            <TextInput
              style={s.modalInput}
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
              style={s.modalBotaoPrincipal}
              onPress={handleSubmit}
            >
              <Text style={s.modalTextoBotaoPrincipal}>Buscar Rack</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={s.modalBotaoCancelar}
              onPress={onClose}
            >
              <Text style={s.modalTextoBotaoCancelar}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}
