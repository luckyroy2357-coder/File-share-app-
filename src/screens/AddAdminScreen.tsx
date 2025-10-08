import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { AuthContext } from '../auth/AuthContext';
import theme from '../theme';

export default function AddAdminScreen({ navigation }: any) {
  const { user, addAdmin } = React.useContext(AuthContext);
  const [roll, setRoll] = useState('');
  const [loading, setLoading] = useState(false);

  if (user?.role !== 'admin') {
    return (
      <View style={styles.container}>
        <Text>You are not authorized to add admins.</Text>
      </View>
    );
  }

  const submit = async () => {
    if (!roll) return Alert.alert('Enter roll number');
    setLoading(true);
    try {
      await addAdmin(roll);
      Alert.alert('Success', `${roll} promoted to admin (mock)`);
      setRoll('');
    } catch (e) {
      Alert.alert('Error', 'Could not add admin');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add New Admin</Text>
      <TextInput label="Roll Number" value={roll} onChangeText={setRoll} style={{ marginBottom: 12 }} />
      <Button mode="contained" onPress={submit} loading={loading}>
        Add Admin
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: theme.colors.background },
  title: { fontSize: 18, marginBottom: 12 }
});
