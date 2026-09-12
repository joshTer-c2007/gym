import { Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SettingsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Configuración</Text>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({ container: { flex: 1, justifyContent: 'center', alignItems: 'center' }});