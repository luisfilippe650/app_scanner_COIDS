import React from 'react';
import { View, Text } from 'react-native';
import {STATUS_COLORS, styles} from './style';

type StatusLabelProps = {
    status: boolean;
}

function StatusLabel({ status }: StatusLabelProps) {
    const { dot, label: statusLabel } = status
        ? STATUS_COLORS.operational
        : STATUS_COLORS.offline;

    return (
        <View>
            <View style={[styles.statusPill, { backgroundColor: `${dot}4A`, borderColor: `${dot}10` }]}>
                <View style={[styles.statusDot, { backgroundColor: dot }]} />
                <Text style={[styles.statusText, { color: dot }]}>{statusLabel}</Text>
            </View>
        </View>
    );
}

export default StatusLabel;