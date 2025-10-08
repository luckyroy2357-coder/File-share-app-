import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Card, Text, IconButton } from 'react-native-paper';
import theme from '../theme';

const mockPdfs = Array.from({ length: 8 }).map((_, i) => ({ id: String(i + 1), title: `Document ${i + 1}` }));

export default function MyPdfsScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={mockPdfs}
        keyExtractor={(i) => i.id}
        contentContainerStyle={{ paddingBottom: theme.spacing.lg }}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <Card.Title title={item.title} right={() => <IconButton icon="download" onPress={() => {}} />} />
          </Card>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({ container: { flex: 1, padding: theme.spacing.md, backgroundColor: theme.colors.background }, card: { marginBottom: theme.spacing.sm, borderRadius: theme.radii.sm } });
