import { View, Text, Image, ImageSourcePropType, StyleSheet } from 'react-native';
import React from 'react';
import { colors } from '../../utils/colors';

type BadgeSize = 'sm' | 'md' | 'lg' | 'line';

interface CoidsBadgeProps {
  size?: BadgeSize;
  label?: string;
  imageSource?: ImageSourcePropType;
}

export default function CoidsBadge({ size = 'md', label = 'Coordenação de Infraestrutura de Dados e Supercomputação', imageSource }: CoidsBadgeProps) {
  const sizes: Record<BadgeSize, { fontSize: number; paddingVertical: number; paddingHorizontal: number }> = {
    sm:   { fontSize: 9,  paddingVertical: 1, paddingHorizontal: 5  },
    md:   { fontSize: 12, paddingVertical: 3, paddingHorizontal: 8  },
    lg:   { fontSize: 15, paddingVertical: 5, paddingHorizontal: 11 },
    line: { fontSize: 13, paddingVertical: 6, paddingHorizontal: 0  },
  };

  const s = sizes[size];
  const isLine = size === 'line';

  return (
    <View style={[
      styles.badge,
      { paddingVertical: s.paddingVertical, paddingHorizontal: s.paddingHorizontal },
      isLine && styles.lineBadge,
    ]}>
      {isLine && imageSource && (
        <Image source={imageSource} style={styles.lineImage} resizeMode="contain"  />
      )}
      <Text style={[
        styles.text,
        { fontSize: s.fontSize },
        isLine && styles.lineText,
      ]}>
        {label}
      </Text>
    </View>
  );
}

export const styles = StyleSheet.create({
  badge: {
    backgroundColor: '#fff',
    borderRadius: 10,
    alignSelf: 'flex-start',
  },
  lineBadge: {
  width: '100%',
  borderRadius: 1,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  alignSelf: 'stretch',
  backgroundColor: colors.primary,
  gap: 8,
  paddingVertical: 25,
  paddingBottom: 14,
},
  lineImage: {
    backgroundColor: '#fff',
    width: 70,
    height: 60,
    borderRadius: 13,
    padding: 4,
    borderWidth: 3,
    borderColor: '#ffffff50',
    position: 'absolute',
    left: 12,
  },
  text: {
    fontWeight: '400',
    color: '#1a52c2',
  },
  lineText: {
    color: '#fff',
    letterSpacing: 1.2,
    paddingHorizontal:95,
  },
});