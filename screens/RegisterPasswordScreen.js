import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function RegisterPasswordScreen({ navigation }) {
  const [senha, setSenha] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro - Senha</Text>
      <TextInput
        placeholder="Digite sua senha"
        secureTextEntry
        style={styles.input}
        value={senha}
        onChangeText={setSenha}
      />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('RegisterUsername')}>
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