import React, { useContext, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, TextInput } from 'react-native-paper';
import { AuthContext } from '../auth/AuthContext';
import theme from '../theme';
import StyledButton from '../components/StyledButton';

export default function ProfileScreen() {
  const { user, changePassword } = useContext(AuthContext);
  const [oldP, setOldP] = useState('');
  const [newP, setNewP] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Roll No: <Text style={{ fontWeight: '700' }}>{user?.rollNo}</Text></Text>
      <Text style={styles.label}>Name: <Text style={{ fontWeight: '700' }}>{user?.name}</Text></Text>

      <Text style={{ marginTop: theme.spacing.md, marginBottom: theme.spacing.xs }}>Change Password</Text>
      <TextInput label="Old Password" value={oldP} onChangeText={setOldP} secureTextEntry />
      <TextInput label="New Password" value={newP} onChangeText={setNewP} secureTextEntry style={{ marginTop: theme.spacing.sm }} />
      <StyledButton onPress={() => changePassword(oldP, newP)} style={{ marginTop: theme.spacing.sm }}>
        Change Password
      </StyledButton>
    </View>
  );
}

const styles = StyleSheet.create({ container: { flex: 1, padding: theme.spacing.md, backgroundColor: theme.colors.background }, label: { marginBottom: theme.spacing.xs, color: theme.colors.muted } });
