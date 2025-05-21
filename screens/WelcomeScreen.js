import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo!</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Fazer login!</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('RegisterEmail')}>
        <Text style={styles.buttonText}>Cadastrar-se!</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text style={styles.skip}>Iniciar sem conta</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFFFF', padding: 24,
  },
  title: {
    fontSize: 28, fontWeight: 'bold', color: '#000', marginBottom: 40,
  },
  button: {
    backgroundColor: '#7B61FF', padding: 16, borderRadius: 12, width: '100%', marginBottom: 16,
  },
  buttonText: {
    color: '#fff', textAlign: 'center', fontWeight: 'bold', fontSize: 16,
  },
  skip: {
    marginTop: 24, color: '#333', textDecorationLine: 'underline',
  },
});