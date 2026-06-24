import React from 'react';
import { View, Text } from 'react-native';
import Badge, { BadgeVariant } from './Badge';
import { s } from './styles';

interface AttrRowProps {
  label: string;
  value?: string | null;
  mono?: boolean;
  badge?: { label: string; variant: BadgeVariant };
}

export default function AttrRow({
  label,
  value,
  mono,
  badge,
}: AttrRowProps) {
  return (
    <View style={s.attrRow}>
      <Text style={s.attrLabel}>{label}</Text>
      {badge ? (
        <Badge label={badge.label} variant={badge.variant} />
      ) : (
        <Text
          style={[s.attrValue, mono && s.attrMono, !value && s.attrMuted]}
          numberOfLines={2}
        >
          {value ?? '—'}
        </Text>
      )}
    </View>
  );
}
