import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Modal from './Components/Modal'

export default function App() {
  return (
    <View style={styles.container}>
      <Modal>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
