import { StyleSheet } from 'react-native';

// ─── Cores / Configurações Visuais ───────────────────────────────────────────
export const C = {
  backgroundtop:  '#0B56C5',
  dark:       '#111827',
  bg:         '#F2F4F8',
  surface:    '#FFFFFF',
  border:     '#E5E7EB',
  textPri:    '#111827',
  textSec:    '#6B7280',
  textMuted:  '#9CA3AF',
  success:    '#10B981',
  error:      '#EF4444',
};

export const STATUSBAR_BG = C.backgroundtop;

// ─── Estilos Principais ───────────────────────────────────────────────────────
export const s = StyleSheet.create({
  // Root / layout
  screenRoot: {
    flex: 1,
    backgroundColor: C.backgroundtop,
  },
  safeArea: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: C.bg,
  },
  scrollContent: {
    padding: 14,
    gap: 10,
  },
  bottomSpacer: {
    height: 80,
  },
  // Top bar icon (arrow / dots)
  topBarIcon: {
    fontSize: 20,
    fontWeight: "bold",
    color: C.bg,
  },
  topBar: {
    height: 52,
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between',
    backgroundColor: C.backgroundtop,
    paddingHorizontal: 8,
  },
  topBtn: {
    width: 40, 
    height: 40,
    alignItems: 'center', 
    justifyContent: 'center', 
    borderRadius: 10,
  },
  topTitle: { 
    fontSize: 16, 
    fontWeight: '600', 
    color: '#F9FAFB', 
    letterSpacing: 0.3 
  },
  // Card
  card: {
    backgroundColor: C.surface,
    borderRadius: 14,
    borderWidth: 0.5,
    borderColor: C.border,
    overflow: 'hidden',
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
  cardHeaderTitle: { 
    fontSize: 13, 
    fontWeight: '600', 
    color: C.textPri 
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
  // Comments
  commentBox: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: C.border,
  },
  commentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  commentAuthor: {
    fontSize: 12,
    fontWeight: '600',
    color: C.textPri,
  },
  commentTime: {
    fontSize: 11,
    color: C.textMuted,
  },
  commentText: {
    fontSize: 12,
    color: C.textSec,
    lineHeight: 18,
  },
  adminOnlyBadge: {
    fontSize: 10,
    color: C.textMuted,
    marginTop: 6,
    fontWeight: '600',
    fontStyle: 'italic',
  },
  commentInputBox: {
    padding: 12,
    paddingHorizontal: 14,
    borderTopWidth: 0.5,
    borderTopColor: C.border,
  },
  commentInput: {
    backgroundColor: C.bg,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: C.border,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 12,
    color: C.textPri,
    minHeight: 80,
    textAlignVertical: 'top',
  },
  // Metadata
  metadataCard: {
    padding: 12,
    paddingHorizontal: 14,
  },
  metadataText: {
    fontSize: 10,
    color: C.textMuted,
    marginBottom: 4,
  },
  // Action bar (bottom buttons)
  actionBar: {
    flexDirection: 'row',
    gap: 10,
    padding: 12,
    paddingHorizontal: 14,
    backgroundColor: C.surface,
    borderTopWidth: 0.5,
    borderTopColor: C.border,
  },
  actionBtn: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelBtn: {
    backgroundColor: C.bg,
    borderWidth: 1,
    borderColor: C.border,
  },
  saveBtn: {
    backgroundColor: C.success,
  },
  actionBtnText: {
    fontSize: 14,
    fontWeight: '600',
    color: C.textPri,
  },
});