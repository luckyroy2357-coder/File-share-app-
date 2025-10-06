import React from 'react';
import { View, StyleSheet, Linking, Platform } from 'react-native';
import { Button, Text } from 'react-native-paper';

export default function RateUsScreen() {
  const openStore = () => {
    const ios = 'https://apps.apple.com';
    const android = 'https://play.google.com/store/apps';
    const url = Platform.OS === 'ios' ? ios : android;
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 12 }}>If you enjoy the app, please rate us!</Text>
      <Button mode="contained" onPress={openStore}>
        Open Store Page
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({ container: { flex: 1, padding: 16 } });
