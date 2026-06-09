import { View, Text } from 'react-native'
import React from 'react'

export default function(): (
  return (
       <View style={styles.tabBar}>
        {(['Início', 'Racks', 'Perfil'] as const).map((label, i) => {
          const icons = ['🏠', '🗄', '👤'];
          const isActive = i === 1;
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
)