import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  regularfont: {
    fontFamily: 'Rawline-Regular',
    fontSize: 18,
  },
  logo: {
    fontFamily: 'Rawline-Bold',
    fontSize: 24,
    color: '#007AFF',
  },
  qrTitle: {
    fontFamily: 'Rawline-Medium',
    fontSize: 20,
    marginTop: 10,
  },
});