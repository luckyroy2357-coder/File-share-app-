import React from 'react';
import { View, StyleSheet, Linking, Platform } from 'react-native';
import { Text } from 'react-native-paper';
import theme from '../theme';
import StyledButton from '../components/StyledButton';

export default function RateUsScreen() {
  const openStore = () => {
    const ios = 'https://apps.apple.com';
    const android = 'https://play.google.com/store/apps';
    const url = Platform.OS === 'ios' ? ios : android;
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: theme.spacing.sm }}>If you enjoy the app, please rate us!</Text>
      <StyledButton onPress={openStore}>Open Store Page</StyledButton>
    </View>
  );
}

const styles = StyleSheet.create({ container: { flex: 1, padding: theme.spacing.md, backgroundColor: theme.colors.background } });
