import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-paper';

const mockPdfs = Array.from({ length: 8 }).map((_, i) => ({ id: String(i + 1), title: `Document ${i + 1}` }));

export default function MyPdfsScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={mockPdfs}
        keyExtractor={(i) => i.id}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <Card.Title title={item.title} />
          </Card>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({ container: { flex: 1, padding: 12 }, card: { marginBottom: 10 } });
