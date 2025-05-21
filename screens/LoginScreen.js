import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fazer login</Text>

      <TextInput
        placeholder="E-mail"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Senha"
        secureTextEntry
        style={styles.input}
        value={senha}
        onChangeText={setSenha}
      />

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Fazer login!</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('RegisterEmail')}>
        <Text style={styles.link}>Ainda não possui uma conta? Cadastre-se</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: '#fff', justifyContent: 'center', padding: 24,
  },
  title: {
    fontSize: 24, fontWeight: 'bold', marginBottom: 24, color: '#000',
  },
  input: {
    backgroundColor: '#eee', height: 48, borderRadius: 8, paddingHorizontal: 12, marginBottom: 16,
  },
  button: {
    backgroundColor: '#7B61FF', padding: 12, borderRadius: 8, alignItems: 'center',
  },
  buttonText: {
    color: '#fff', fontWeight: 'bold',
  },
  link: {
    marginTop: 16, color: '#7B61FF', textAlign: 'center',
  }
});
