import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawerContent from '../ui/CustomDrawerContent';
import MyPdfsScreen from '../screens/MyPdfsScreen';
import UploadPdfScreen from '../screens/UploadPdfScreen';
import AddAdminScreen from '../screens/AddAdminScreen';
import ProfileScreen from '../screens/ProfileScreen';
import RateUsScreen from '../screens/RateUsScreen';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{ headerShown: true }}
    >
      <Drawer.Screen name="MyPDFs" component={MyPdfsScreen} options={{ title: 'My PDFs' }} />
      <Drawer.Screen name="Search" component={MyPdfsScreen} options={{ title: 'Search PDFs' }} />
      <Drawer.Screen name="RateUs" component={RateUsScreen} options={{ title: 'Rate Us' }} />
      <Drawer.Screen name="Profile" component={ProfileScreen} options={{ title: 'Profile' }} />
  <Drawer.Screen name="UploadPdf" component={UploadPdfScreen} options={{ title: 'Upload PDF' }} />
  <Drawer.Screen name="AddAdmin" component={AddAdminScreen} options={{ title: 'Add Admin' }} />
    </Drawer.Navigator>
  );
}
