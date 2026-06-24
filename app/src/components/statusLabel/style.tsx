import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';

// Cores de status — independentes da screen
export const STATUS_COLORS = {
    operational: { dot: colors.success,  label: 'Operacional' },
    offline:     { dot: colors.warning,  label: 'Há Problema' },
};

export const styles = StyleSheet.create({
    statusPill: {
        alignSelf: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        marginTop: 12,
        paddingHorizontal: 12,
        paddingVertical: 5,
        borderRadius: 20,
        borderWidth: 0.6,
    },
    statusDot: {
        width: 7,
        height: 7,
        borderRadius: 10,
    },
    statusText: {
        fontSize: 12,
        fontWeight: '600',
    },
});
