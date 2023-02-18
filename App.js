import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, ScrollView } from 'react-native';

import Lista from './src/components/Lista';
import Texto from './src/components/Texto';
import Carrusel from './src/components/Carrusel';
import Genero from './src/components/Genero';

export default function App() {
  return (
    <>
    
    <SafeAreaView style={styles.container}>
      <Texto/>
      <Genero/>
      <ScrollView style={styles.scrollstyle}>
      <Lista />
      <Carrusel/>
      </ScrollView>
    </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  scrollstyle:{
    backgroundColor: '#121712',
  },



});
