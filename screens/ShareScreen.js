import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function ShareScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Compartilhar Lista</Text>
      <Text style={styles.label}>Link:</Text>
      <TextInput
        value="https://makeitlist.app/lista123"
        editable={false}
        style={styles.input}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Copiar link</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  label: { fontSize: 16, marginBottom: 8 },
  input: { backgroundColor: '#eee', height: 48, borderRadius: 8, paddingHorizontal: 12, marginBottom: 16 },
  button: { backgroundColor: '#7B61FF', padding: 12, borderRadius: 8, alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: 'bold' },
});