import React from 'react';
import { View, Text } from 'react-native';
import { s } from './styles';

interface SectionCardProps {
  icon?: string;
  title: string;
  amber?: boolean;
  children: React.ReactNode;
}

export default function SectionCard({
  title,
  amber,
  children,
}: SectionCardProps) {
  return (
    <View style={[s.card, amber && s.cardAmber]}>
      <View style={[s.cardHeader, amber && s.cardHeaderAmber]}>
        <Text style={[s.cardHeaderTitle, amber && s.cardHeaderTitleAmber]}>{title}</Text>
        {amber && <Text style={s.especificosBadge}>específicos</Text>}
      </View>
      {children}
    </View>
  );
}
