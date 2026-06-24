import React from 'react';
import { View, Text } from 'react-native';
import { SpecificAttributeData } from '../../types/object_info';
import { s } from './styles';

interface SpecificAttributesProps {
  title?: string;
  data: SpecificAttributeData[];
}

function formatValue(value: string | number | null, type: string): string {
  if (value === null || value === undefined) return '—';
  
  switch (type) {
    case 'float':
      return typeof value === 'number' ? value.toFixed(2) : String(value);
    case 'integer':
      return String(Math.round(Number(value)));
    default:
      return String(value);
  }
}

function isMono(type: string): boolean {
  return type === 'date' || type === 'custom' || type.includes('uuid');
}

export default function SpecificAttributes({
  title = 'Atributos específicos',
  data,
}: SpecificAttributesProps) {
  if (!data || data.length === 0) {
    return null;
  }

  return (
    <View style={[s.card, s.cardAmber]}>
      <View style={[s.cardHeader, s.cardHeaderAmber]}>
        <Text style={[s.cardHeaderTitle, s.cardHeaderTitleAmber]}>{title}</Text>
        <Text style={s.especificosBadge}>específicos</Text>
      </View>
      {data.map((attr, idx) => (
        <View key={idx} style={s.attrRow}>
          <Text style={s.attrLabel}>{attr.label}</Text>
          <Text
            style={[s.attrValue, isMono(attr.type) && s.attrMono, !attr.value && s.attrMuted]}
            numberOfLines={2}
          >
            {formatValue(attr.value, attr.type)}
          </Text>
        </View>
      ))}
    </View>
  );
}
