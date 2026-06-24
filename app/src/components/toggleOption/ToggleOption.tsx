import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { s } from './styles';

interface ToggleOptionProps {
  label: string;
  subtitle: string;
  icon: any;
  isEnabled: boolean;
  onToggle: (enabled: boolean) => void;
}

export default function ToggleOption({
  label,
  subtitle,
  icon,
  isEnabled,
  onToggle,
}: ToggleOptionProps) {
  return (
    <View style={s.cartaoOpcao}>
      <View style={s.conteinerOpcaoEsquerda}>
        <View style={s.envolturaIconeOpcao}>
          <Image source={icon} style={s.iconeOpcao} />
        </View>
        <View>
          <Text style={s.rotuloOpcao}>{label}</Text>
          <Text style={s.subtituloOpcao}>{subtitle}</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => onToggle(!isEnabled)}
        accessibilityRole="switch"
        accessibilityState={{ checked: isEnabled }}
        accessibilityLabel={label}
      >
        <View style={[s.botaoAlternador, !isEnabled && s.botaoAlternadorDesligado]}>
          <View style={s.pontoAlternador} />
        </View>
      </TouchableOpacity>
    </View>
  );
}
