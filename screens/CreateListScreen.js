import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function CreateListScreen({ navigation }) {
  const [nomeLista, setNomeLista] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nova Lista</Text>
      <TextInput
        placeholder="Nome da lista"
        value={nomeLista}
        onChangeText={setNomeLista}
        style={styles.input}
      />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Share')}>
        <Text style={styles.buttonText}>Salvar Lista</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  input: { backgroundColor: '#eee', height: 48, borderRadius: 8, paddingHorizontal: 12, marginBottom: 16 },
  button: { backgroundColor: '#7B61FF', padding: 12, borderRadius: 8, alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: 'bold' },
});