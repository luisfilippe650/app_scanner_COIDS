import { StyleSheet } from 'react-native';

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
};

export const s = StyleSheet.create({
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
});
