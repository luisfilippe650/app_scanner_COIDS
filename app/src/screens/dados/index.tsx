import React, { useMemo } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles, colors } from './style';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/navigation';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Dados'>;
type DetailsRouteProp = RouteProp<RootStackParamList, 'Dados'>;

export type RackOperationalStatus = 'operational' | 'warning' | 'offline';

export interface RackDetailData {
    rackId: number;
    name: string;
    status: RackOperationalStatus;
    totalUnits: number;
    occupiedUnits: string[]; // e.g. ['U1', 'U2']
}

const DEFAULT_RACK: RackDetailData = {
    rackId: 27,
    name: 'Rack A1',
    status: 'operational',
    totalUnits: 42,
    occupiedUnits: ['U1', 'U2'],
};

const statusConfig: Record<RackOperationalStatus, { label: string; color: string; bg: string; dot: string }> = {
    operational: {
    label: 'Operacional',
    color: colors.success,
    bg: colors.successBg,
    dot: colors.success,
    },
    warning: {
    label: 'Atenção',
    color: colors.warning,
    bg: colors.warningBg,
    dot: colors.warning,
    },
    offline: {
    label: 'Offline',
    color: '#B71C1C',
    bg: '#FFEBEE',
    dot: '#E53935',
    },
};

const MAX_VISIBLE_FREE = 6;

export default function RackDetailScreen() {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<DetailsRouteProp>();
  
  const rackIdParam = route.params?.rackId;
  
  const rack = useMemo(() => {
      if (rackIdParam) {
          return { ...DEFAULT_RACK, rackId: rackIdParam, name: `Rack ${rackIdParam}` };
      }
      return DEFAULT_RACK;
  }, [rackIdParam]);

  const onBack = () => navigation.goBack();
  const onOptionsPress = () => console.log('Options pressed');

  const { rackId, name, status, totalUnits, occupiedUnits } = rack;
  const freeCount = totalUnits - occupiedUnits.length;
  const occupancyRatio = occupiedUnits.length / totalUnits;
  const statusCfg = statusConfig[status];

  const allFreeUnits = useMemo(() => {
    const usedSet = new Set(occupiedUnits);
    return Array.from({ length: totalUnits }, (_, i) => `U${i + 1}`).filter(
      (u) => !usedSet.has(u),
    );
  }, [occupiedUnits, totalUnits]);

  const visibleFreeUnits = allFreeUnits.slice(0, MAX_VISIBLE_FREE);
  const remainingFree = allFreeUnits.length - visibleFreeUnits.length;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />

      {/* Top bar */}
      <View style={styles.topBar}>
        <TouchableOpacity
          style={styles.topBarAction}
          onPress={onBack}
          accessibilityRole="button"
          accessibilityLabel="Voltar"
        >
          <Text style={{ fontSize: 18, color: colors.textSecondary }}>←</Text>
        </TouchableOpacity>
        <Text style={styles.topBarTitle}>Detalhes</Text>
        <TouchableOpacity
          style={styles.topBarAction}
          onPress={onOptionsPress}
          accessibilityRole="button"
          accessibilityLabel="Mais opções"
        >
          <Text style={{ fontSize: 18, color: colors.textSecondary }}>⋯</Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerId}>rack_id: {rackId}</Text>
          <Text style={styles.headerName}>{name}</Text>
          <View style={[styles.statusChip, { backgroundColor: statusCfg.bg }]}>
            <View style={[styles.statusDot, { backgroundColor: statusCfg.dot }]} />
            <Text style={[styles.statusText, { color: statusCfg.color }]}>
              {statusCfg.label}
            </Text>
          </View>
        </View>

        {/* Stats */}
        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <Text style={styles.statLabel}>Total</Text>
            <View style={styles.statValueRow}>
              <Text style={styles.statValue}>{totalUnits}</Text>
              <Text style={styles.statUnit}>U</Text>
            </View>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statLabel}>Livres</Text>
            <View style={styles.statValueRow}>
              <Text style={[styles.statValue, styles.statValueAccent]}>{freeCount}</Text>
              <Text style={styles.statUnit}>U</Text>
            </View>
          </View>
        </View>

        {/* Occupancy bar */}
        <View style={styles.occupancyCard}>
          <Text style={styles.occupancyLabel}>Ocupação</Text>
          <View style={styles.barTrack}>
            <View style={[styles.barFill, { width: `${occupancyRatio * 100}%` }]} />
          </View>
          <View style={styles.barMeta}>
            <Text style={styles.barMetaText}>{occupiedUnits.length} ocupadas</Text>
            <Text style={styles.barMetaText}>{freeCount} livres</Text>
          </View>
        </View>

        {/* Units */}
        <View style={styles.unitsSection}>
          {/* Occupied */}
          <View>
            <Text style={styles.unitGroupLabel}>Unidades ocupadas</Text>
            <View style={styles.unitChipsWrap}>
              {occupiedUnits.map((unit) => (
                <Text key={unit} style={[styles.unitChip, styles.unitUsed]}>
                  {unit}
                </Text>
              ))}
            </View>
          </View>

          {/* Separator */}
          <View style={{ height: 1, backgroundColor: colors.border }} />

          {/* Free */}
          <View>
            <Text style={styles.unitGroupLabel}>Unidades livres</Text>
            <View style={styles.unitChipsWrap}>
              {visibleFreeUnits.map((unit) => (
                <Text key={unit} style={[styles.unitChip, styles.unitFree]}>
                  {unit}
                </Text>
              ))}
              {remainingFree > 0 && (
                <Text style={[styles.unitChip, styles.unitMore]}>
                  +{remainingFree}
                </Text>
              )}
            </View>
          </View>
        </View>

        <View style={{ height: 16 }} />
      </ScrollView>

      {/* Tab bar */}
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
    </SafeAreaView>
  );
}