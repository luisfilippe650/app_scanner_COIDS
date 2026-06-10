import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../../utils/colors'

interface FootBarProps {
  activeIndex?: number;
}

export default function FootBar({ activeIndex = 1 }: FootBarProps) {
  return (
    <View style={styles.tabBar}>
      {(['Início', 'Racks', 'Perfil'] as const).map((label, i) => {
        const icons = ['🏠', '🗄', '👤'];
        const isActive = i === activeIndex;
        return (
          <TouchableOpacity key={label} style={styles.tabItem} accessibilityRole="tab">
            <Text style={{ fontSize: 20, opacity: isActive ? 1 : 0.45 }}>{icons[i]}</Text>
            <Text
              style={[
                styles.tabLabel,
                isActive ? styles.tabLabelActive : styles.tabLabelInactive,
              ]}
            >
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    backgroundColor: colors.surface,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingTop: 10,
    paddingBottom: 24,
    marginTop: 'auto',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    gap: 3,
  },
  tabLabel: {
    fontSize: 10,
    fontWeight: '500',
  },
  tabLabelActive: {
    color: colors.tabActive,
  },
  tabLabelInactive: {
    color: colors.tabInactive,
  },
});
