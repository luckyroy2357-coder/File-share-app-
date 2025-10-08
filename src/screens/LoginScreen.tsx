import React, { useState, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Title, Card } from 'react-native-paper';
import { AuthContext } from '../auth/AuthContext';
import theme from '../theme';
import StyledButton from '../components/StyledButton';

export default function LoginScreen() {
  const [rollNo, setRollNo] = useState('');
  const [password, setPassword] = useState('');
  const { signIn, loading } = useContext(AuthContext);

  return (
    <View style={styles.page}>
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.title}>Welcome back</Title>
          <TextInput label="Roll Number" value={rollNo} onChangeText={setRollNo} style={styles.input} />
          <TextInput label="Password" value={password} onChangeText={setPassword} secureTextEntry style={styles.input} />
          <StyledButton onPress={() => signIn(rollNo, password)} loading={loading} style={{ marginTop: theme.spacing.sm }}>
            Sign in
          </StyledButton>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: theme.colors.background, alignItems: 'center', justifyContent: 'center', padding: theme.spacing.lg },
  card: { width: '100%', maxWidth: 420, padding: theme.spacing.md, borderRadius: theme.radii.lg, ...theme.shadow },
  title: { marginBottom: theme.spacing.md, color: theme.colors.text },
  input: { marginBottom: theme.spacing.sm }
});
