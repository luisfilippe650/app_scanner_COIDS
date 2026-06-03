import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  
  test:{
    position: 'absolute',
    bottom: 31,   // distância do fundo
    right: 200,    // distância da direita
  },
  
  
  container: {
    width: 412,
  },
  header: {
    backgroundColor: '#1a52c2',
    borderRadius: 16,
    padding: 20,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: '500',
    color: '#fff',
  },
  bemVindo: {
    bottom: -20,
    alignSelf: 'center',
    fontSize: 18,
    color: '#aac4f7',
    marginBottom: 2,
  },
  rackName: {
    fontSize: 26,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 14,
  },
  badgeGestao: {
    
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 14,
    alignSelf: 'center',
  },
  gestaoDeRacks: {
    fontSize: 20,
    color: '#fff',
  },
  
  containerQRCODE: {
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 0.5,
    borderColor: '#e0e0e0',
    padding: 14,
    alignItems: 'center',
    width: 200,  
  },
  metricLabel: {
    fontSize: 12,
    color: '#888',
    marginBottom: 8,
    lineHeight: 16,
  },
  metricValueRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 4,
  },
  metricValue: {
    fontSize: 28,
    fontWeight: '600',
  },
  metricUnit: {
    fontSize: 12,
    color: '#888',
  },
});
