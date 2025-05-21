import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

export default function HomeScreen({ navigation }) {
  const listas = [
    { id: '1', nome: 'Lista da Feira' },
    { id: '2', nome: 'Farmácia' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Minhas Listas</Text>
      <FlatList
        data={listas}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('CreateList')}>
            <Text style={styles.itemText}>{item.nome}</Text>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CreateList')}>
        <Text style={styles.buttonText}>Criar nova lista</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  item: { padding: 16, backgroundColor: '#eee', borderRadius: 8, marginBottom: 12 },
  itemText: { fontSize: 16 },
  button: { backgroundColor: '#7B61FF', padding: 16, borderRadius: 12, alignItems: 'center', marginTop: 16 },
  buttonText: { color: '#fff', fontWeight: 'bold' },
});