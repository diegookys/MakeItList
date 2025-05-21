import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function RegisterTermsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Termos de Uso</Text>
      <Text style={styles.paragraph}>
        Ao continuar, você concorda com nossos termos de uso e política de privacidade.
      </Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Concordo e continuar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 24, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 24 },
  paragraph: { fontSize: 16, color: '#555', marginBottom: 24 },
  button: { backgroundColor: '#7B61FF', padding: 12, borderRadius: 8, alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: 'bold' },
});