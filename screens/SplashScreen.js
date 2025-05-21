import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Welcome');
    }, 2000); // 2 segundos
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Make It List!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#7B61FF',
  },
  logo: {
    fontSize: 28, fontWeight: 'bold', color: '#FFFFFF',
  },
});