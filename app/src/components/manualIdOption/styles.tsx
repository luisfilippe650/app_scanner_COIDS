import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';

export const s = StyleSheet.create({
  cartaoOpcao: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.surface,
    marginHorizontal: 20,
    marginBottom: 8,
    borderRadius: 14,
    padding: 14,
    borderWidth: 1,
    borderColor: colors.border,
  },
  conteinerOpcaoEsquerda: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flex: 1,
  },
  envolturaIconeOpcao: {
    width: 38,
    height: 38,
    borderRadius: 10,
    backgroundColor: colors.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconeOpcao: {
    borderRadius: 11,
  },
  rotuloOpcao: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.textPrimary,
    marginBottom: 2,
  },
  subtituloOpcao: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  iconeSeta: {
    fontSize: 18,
    color: colors.textHint,
  },
});
