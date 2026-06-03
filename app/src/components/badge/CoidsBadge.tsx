import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

type BadgeSize = 'sm' | 'md' | 'lg';

export default function CoidsBadge({ size = 'md' }: { size?: BadgeSize }) {
  const sizes: Record<BadgeSize, { fontSize: number; paddingVertical: number; paddingHorizontal: number }> = {
    sm: { fontSize: 9,  paddingVertical: 1, paddingHorizontal: 5 },
    md: { fontSize: 12, paddingVertical: 3, paddingHorizontal: 8 },
    lg: { fontSize: 15, paddingVertical: 5, paddingHorizontal: 11 },
  };

  const s = sizes[size];

  return (
    <View style={[
      styles.badge,
      {
        paddingVertical: s.paddingVertical,
        paddingHorizontal: s.paddingHorizontal,
      }
    ]}>
      <Text style={[styles.text, { fontSize: s.fontSize }]}>
        INPE-COIDS
      </Text>
    </View>
  );
}

export const styles = StyleSheet.create({
  badge: {
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  text: {
    fontWeight: '700',
    color: '#1a52c2',
  },
});