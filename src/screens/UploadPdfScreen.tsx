import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-paper';
import * as DocumentPicker from 'expo-document-picker';

export default function UploadPdfScreen() {
  const [fileName, setFileName] = useState<string | null>(null);

  const pick = async () => {
    const res = await DocumentPicker.getDocumentAsync({ type: 'application/pdf' });
    if (res.type === 'success') setFileName(res.name);
  };

  return (
    <View style={styles.container}>
      <Button mode="outlined" onPress={pick} style={{ marginBottom: 12 }}>
        Select PDF
      </Button>
      <Text>{fileName ?? 'No file selected'}</Text>
      <Button mode="contained" style={{ marginTop: 12 }} onPress={() => alert('Upload stub')}>
        Upload (stub)
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({ container: { flex: 1, padding: 16 } });
