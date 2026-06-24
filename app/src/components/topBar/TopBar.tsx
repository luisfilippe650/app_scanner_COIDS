import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { s } from './styles';

interface TopBarProps {
  title?: string;
  onBackPress?: () => void;
  onMenuPress?: () => void;
  showBackButton?: boolean;
  showMenuButton?: boolean;
}

export default function TopBar({
  title = 'Detalhes',
  onBackPress,
  onMenuPress,
  showBackButton = true,
  showMenuButton = true,
}: TopBarProps) {
  return (
    <View style={s.topBar}>
      {showBackButton && (
        <TouchableOpacity
          style={s.topBtn}
          onPress={onBackPress}
          accessibilityRole="button"
          accessibilityLabel="Voltar"
        >
          <Text style={s.topBarIcon}>←</Text>
        </TouchableOpacity>
      )}

      <Text style={s.topTitle}>{title}</Text>

      {showMenuButton && (
        <TouchableOpacity
          style={s.topBtn}
          onPress={onMenuPress}
          accessibilityRole="button"
          accessibilityLabel="Mais opções"
        >
          <Text style={s.topBarIcon}>⋯</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
