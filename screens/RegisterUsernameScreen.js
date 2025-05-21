import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function RegisterUsernameScreen({ navigation }) {
  const [username, setUsername] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro - Nome de usuário</Text>
      <TextInput
        placeholder="Digite seu nome de usuário"
        style={styles.input}
        value={username}
        onChangeText={setUsername}
      />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('RegisterTerms')}>
        <Text style={styles.buttonText}>Próximo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 24, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 24 },
  input: { height: 48, backgroundColor: '#eee', borderRadius: 8, paddingHorizontal: 12, marginBottom: 16 },
  button: { backgroundColor: '#7B61FF', padding: 12, borderRadius: 8, alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: 'bold' },
});