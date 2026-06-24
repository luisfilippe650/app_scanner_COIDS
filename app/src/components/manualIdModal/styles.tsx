import { StyleSheet, Platform } from 'react-native';
import { colors } from '../../utils/colors';

export const s = StyleSheet.create({
  modalSobreposicao: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'flex-end',
  },
  modalConteudo: {
    backgroundColor: colors.surface,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 24,
    paddingBottom: Platform.OS === 'ios' ? 40 : 24,
  },
  modalTitulo: {
    fontSize: 17,
    fontWeight: '600',
    color: colors.textPrimary,
    marginBottom: 4,
  },
  modalSubtitulo: {
    fontSize: 13,
    color: colors.textSecondary,
    marginBottom: 16,
  },
  modalInput: {
    backgroundColor: colors.background1,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 15,
    color: colors.textPrimary,
    marginBottom: 16,
  },
  modalBotaoPrincipal: {
    backgroundColor: colors.primary,
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
  },
  modalTextoBotaoPrincipal: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 15,
  },
  modalBotaoCancelar: {
    marginTop: 12,
    alignItems: 'center',
  },
  modalTextoBotaoCancelar: {
    color: colors.textSecondary,
    fontSize: 14,
  },
});
