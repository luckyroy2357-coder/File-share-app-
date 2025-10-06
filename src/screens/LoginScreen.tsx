import React, { useState, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Title } from 'react-native-paper';
import { AuthContext } from '../auth/AuthContext';

export default function LoginScreen() {
  const [rollNo, setRollNo] = useState('');
  const [password, setPassword] = useState('');
  const { signIn, loading } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Title style={{ marginBottom: 12 }}>Login</Title>
      <TextInput label="Roll Number" value={rollNo} onChangeText={setRollNo} style={{ width: '100%', marginBottom: 8 }} />
      <TextInput label="Password" value={password} onChangeText={setPassword} secureTextEntry style={{ width: '100%', marginBottom: 12 }} />
      <Button mode="contained" onPress={() => signIn(rollNo, password)} loading={loading}>
        Sign in
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, alignItems: 'center', justifyContent: 'center' }
});
