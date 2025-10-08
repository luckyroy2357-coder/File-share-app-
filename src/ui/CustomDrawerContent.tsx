import React from 'react';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { View, Text, StyleSheet } from 'react-native';
import { Avatar, Button } from 'react-native-paper';
import { AuthContext } from '../auth/AuthContext';
import theme from '../theme';

export default function CustomDrawerContent(props: any) {
  const { user, signOut } = React.useContext(AuthContext);

  const isAdmin = user?.role === 'admin';

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatarWrap}>
          <Avatar.Text size={56} label={user?.name?.[0] ?? '?'} />
        </View>
        <View style={{ marginLeft: 12 }}>
          <Text style={styles.name}>{user?.name}</Text>
          <Text style={styles.roll}>{user?.rollNo}</Text>
        </View>
      </View>

      <View style={styles.items}>
        <DrawerItem label="My PDFs" onPress={() => props.navigation.navigate('MyPDFs')} />
        <DrawerItem label="Search PDFs" onPress={() => props.navigation.navigate('Search')} />
  {isAdmin && <DrawerItem label="Upload PDF" onPress={() => props.navigation.navigate('UploadPdf')} />}
  {isAdmin && <DrawerItem label="Add Admin" onPress={() => props.navigation.navigate('AddAdmin')} />}
  {isAdmin && <DrawerItem label="Manage Admins" onPress={() => props.navigation.navigate('AdminsList')} />}
        <DrawerItem label="Rate Us" onPress={() => props.navigation.navigate('RateUs')} />
        <DrawerItem label="Profile" onPress={() => props.navigation.navigate('Profile')} />
      </View>

      <View style={styles.footer}>
        <Button mode="outlined" onPress={() => signOut()}>
          Logout
        </Button>
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'space-between', backgroundColor: theme.colors.background },
  header: { flexDirection: 'row', alignItems: 'center', padding: theme.spacing.md },
  avatarWrap: { backgroundColor: theme.colors.surface, borderRadius: theme.radii.md, padding: 6, ...theme.shadow },
  name: { fontSize: 16, fontWeight: '700', color: theme.colors.text },
  roll: { color: theme.colors.muted },
  items: { marginTop: theme.spacing.sm },
  footer: { padding: theme.spacing.md }
});
