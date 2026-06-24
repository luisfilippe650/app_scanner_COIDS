import { StyleSheet } from 'react-native';

// ─── Cores / Configurações Visuais ───────────────────────────────────────────
const C = {
  bg:         '#F2F4F8',
  surface:    '#FFFFFF',
  border:     '#E5E7EB',
  textPri:    '#111827',
  textSec:    '#6B7280',
  textMuted:  '#9CA3AF',
  amberBg:    '#FFFBEB',
  amberBdr:   '#FDE68A',
  amberText:  '#78350F',
  amberSub:   '#B45309',
  blueBg:     '#DBEAFE',
  blueText:   '#1E40AF',
  greenBg:    '#D1FAE5',
  greenText:  '#065F46',
  grayBg:     '#F3F4F6',
  grayText:   '#4B5563',
};

export const s = StyleSheet.create({
  // Card
  card: {
    backgroundColor: C.surface,
    borderRadius: 14,
    borderWidth: 0.5,
    borderColor: C.border,
    overflow: 'hidden',
  },
  cardAmber: {
    borderColor: C.amberBdr,
  },
  cardHeader: {
    flexDirection: 'row', 
    alignItems: 'center', 
    gap: 8,
    padding: 12, 
    paddingHorizontal: 14,
    borderBottomWidth: 0.5, 
    borderBottomColor: C.border,
  },
  cardHeaderAmber: {
    backgroundColor: C.amberBg,
    borderBottomColor: C.amberBdr,
  },
  cardHeaderTitle: { 
    fontSize: 13, 
    fontWeight: '600', 
    color: C.textPri 
  },
  cardHeaderTitleAmber: {
    color: C.amberText,
  },
  especificosBadge: {
    fontSize: 11, 
    color: C.amberSub, 
    marginLeft: 'auto'
  },
  // AttrRow
  attrRow: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    paddingVertical: 10, 
    paddingHorizontal: 14,
    borderBottomWidth: 0.5, 
    borderBottomColor: C.border, 
    gap: 10,
  },
  attrLabel: {
    fontSize: 13, 
    color: C.textSec, 
    flex: 1 
  },
  attrValue: { 
    fontSize: 13, 
    fontWeight: '500', 
    color: C.textPri, 
    flex: 1.5, 
    textAlign: 'right' 
  },
  attrMono: { 
    fontFamily: 'monospace', 
    fontSize: 12 
  },
  attrMuted: { 
    color: C.textMuted, 
    fontWeight: '400' 
  },
  // Badge
  badgeContainer: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  badgeText: {
    fontSize: 11,
    fontWeight: '600',
  },
});

export const BADGE_STYLES = {
  blue:  { bg: C.blueBg,  text: C.blueText  },
  green: { bg: C.greenBg, text: C.greenText  },
  gray:  { bg: C.grayBg,  text: C.grayText  },
  amber: { bg: C.amberBg, text: C.amberText  },
};
