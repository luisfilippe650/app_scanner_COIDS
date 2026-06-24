import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { s } from './styles';

interface ManualIdOptionProps {
  onPress: () => void;
}

export default function ManualIdOption({ onPress }: ManualIdOptionProps) {
  return (
    <TouchableOpacity
      style={s.cartaoOpcao}
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel="Inserir ID manualmente"
    >
      <View style={s.conteinerOpcaoEsquerda}>
        <View style={s.envolturaIconeOpcao}>
          <Image 
            source={require('../../assets/icons/icon_inserir_id.png')}
            style={s.iconeOpcao} 
          />
        </View>
        <View>
          <Text style={s.rotuloOpcao}>Inserir ID manualmente</Text>
          <Text style={s.subtituloOpcao}>Digite o id do equipamento direto</Text>
        </View>
      </View>
      <Text style={s.iconeSeta}>›</Text>
    </TouchableOpacity>
  );
}
