import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Text, Card, Button } from 'react-native-paper';
import { AuthContext } from '../auth/AuthContext';
import theme from '../theme';

export default function AdminsListScreen() {
  const { user, listAdmins, removeAdmin } = React.useContext(AuthContext);
  const [admins, setAdmins] = useState<string[]>([]);

  useEffect(() => {
    setAdmins(listAdmins());
  }, [listAdmins]);

  if (user?.role !== 'admin') {
    return (
      <View style={styles.container}>
        <Text>You are not authorized to view this page.</Text>
      </View>
    );
  }

  const handleRemove = async (r: string) => {
    await removeAdmin(r);
    setAdmins(listAdmins());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Promoted Admins (mock)</Text>
      <FlatList
        data={admins}
        keyExtractor={(i) => i}
        renderItem={({ item }) => (
          <Card style={{ marginBottom: 8 }}>
            <Card.Title title={item} />
            <Card.Actions>
              <Button mode="outlined" onPress={() => handleRemove(item)}>
                Revoke
              </Button>
            </Card.Actions>
          </Card>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: theme.colors.background },
  title: { fontSize: 18, marginBottom: 12 }
});
