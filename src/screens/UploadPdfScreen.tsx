import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import * as DocumentPicker from 'expo-document-picker';
import theme from '../theme';
import StyledButton from '../components/StyledButton';
import { AuthContext } from '../auth/AuthContext';
import { Button, Text as PaperText } from 'react-native-paper';

export default function UploadPdfScreen() {
  const { user } = React.useContext(AuthContext);
  const [fileName, setFileName] = useState<string | null>(null);

  if (user?.role !== 'admin') {
    return (
      <View style={styles.container}>
        <PaperText>You are not authorized to upload files.</PaperText>
        <Button mode="outlined" onPress={() => { /* navigation fallback handled by drawer */ }} style={{ marginTop: theme.spacing.sm }}>
          Back
        </Button>
      </View>
    );
  }

  const pick = async () => {
    const res = await DocumentPicker.getDocumentAsync({ type: 'application/pdf' });
    if (res.type === 'success') setFileName(res.name);
  };

  return (
    <View style={styles.container}>
      <StyledButton mode="outlined" onPress={pick} style={{ marginBottom: theme.spacing.sm }}>
        Select PDF
      </StyledButton>
      <Text>{fileName ?? 'No file selected'}</Text>
      <StyledButton onPress={() => alert('Upload stub')} style={{ marginTop: theme.spacing.sm }}>
        Upload (stub)
      </StyledButton>
    </View>
  );
}

const styles = StyleSheet.create({ container: { flex: 1, padding: theme.spacing.md, backgroundColor: theme.colors.background } });
