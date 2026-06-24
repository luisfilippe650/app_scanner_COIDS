import React from 'react';
import { View, Text } from 'react-native';
import { s, BADGE_STYLES } from './styles';

export type BadgeVariant = 'blue' | 'green' | 'gray' | 'amber';

interface BadgeProps {
  label: string;
  variant?: BadgeVariant;
}

export default function Badge({ label, variant = 'gray' }: BadgeProps) {
  const bs = BADGE_STYLES[variant];
  return (
    <View style={[s.badgeContainer, { backgroundColor: bs.bg }]}>
      <Text style={[s.badgeText, { color: bs.text }]}>{label}</Text>
    </View>
  );
}
