import React, { useContext, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';
import { AuthContext } from '../auth/AuthContext';

export default function ProfileScreen() {
  const { user, changePassword } = useContext(AuthContext);
  const [oldP, setOldP] = useState('');
  const [newP, setNewP] = useState('');

  return (
    <View style={styles.container}>
      <Text>Roll No: {user?.rollNo}</Text>
      <Text>Name: {user?.name}</Text>

      <Text style={{ marginTop: 12, marginBottom: 6 }}>Change Password</Text>
      <TextInput label="Old Password" value={oldP} onChangeText={setOldP} secureTextEntry />
      <TextInput label="New Password" value={newP} onChangeText={setNewP} secureTextEntry style={{ marginTop: 8 }} />
      <Button mode="contained" onPress={() => changePassword(oldP, newP)} style={{ marginTop: 12 }}>
        Change Password
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({ container: { flex: 1, padding: 16 } });
