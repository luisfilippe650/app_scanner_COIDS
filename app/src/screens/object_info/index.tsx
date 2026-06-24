import React from 'react';
import {
  View,
  ScrollView,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { s, STATUSBAR_BG } from './style';

import Attributes from "../../components/attributes/Attributes"
import Hero from '../../components/hero/Hero'
import TopBar from '../../components/topBar/TopBar'
import SpecificAttributes from '../../components/specific_attributes/SpecificAttributes'
import { SpecificAttributeData } from '../../types/object_info'

const serverSpecificAttributes: SpecificAttributeData[] = [
  { name: 'contact_person', label: 'Contact person', value: 'João Silva', type: 'string', editable: true },
  { name: 'fqdn', label: 'FQDN', value: 'srv-prod-01.datacenter.local', type: 'string', editable: true },
  { name: 'hw_type', label: 'Tipo de HW', value: 'Rack Server', type: 'custom', editable: false },
  { name: 'hw_warranty', label: 'HW warranty expiration', value: '2026-12-31', type: 'date', editable: true },
  { name: 'hypervisor', label: 'Hypervisor', value: 'VMware', type: 'custom', editable: true },
  { name: 'oem_sn_1', label: 'OEM S/N 1', value: 'SN-MXQ1234567', type: 'custom', editable: true },
  { name: 'slot', label: 'Slot number', value: 3, type: 'integer', editable: true },
  { name: 'support_contract', label: 'Support contract expiration', value: '2025-06-30', type: 'date', editable: true },
  { name: 'sw_type', label: 'Tipo de SW', value: 'Linux', type: 'custom', editable: false },
  { name: 'sw_warranty', label: 'SW warranty expiration', value: '2027-01-15', type: 'date', editable: true },
  { name: 'uuid', label: 'UUID', value: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890', type: 'custom', editable: true },
];

export default function ObjectDetailScreen() {
  return (
    <View style={s.screenRoot}>
      <StatusBar barStyle="light-content" backgroundColor={STATUSBAR_BG} />

      <SafeAreaView edges={['left', 'right', 'bottom']} style={s.safeArea}>
        <TopBar 
          title="Detalhes"
          onBackPress={() => console.log('Back')}
          onMenuPress={() => console.log('Menu')}
        />

        <ScrollView
          style={s.scrollView}
          contentContainerStyle={s.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <Hero tittle={'server'} subtittle={'12'} status={true}/>
          <Attributes/>
          <SpecificAttributes 
            title="Atributos do servidor"
            data={serverSpecificAttributes}
          />
          <View style={s.bottomSpacer} />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}