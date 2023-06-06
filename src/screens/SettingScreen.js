import React from 'react';
import { View, Text, Button, SafeAreaView } from 'react-native';

export default function SettingScreen(props) {
    const {navigation   } = props;

    const goToPage = (pageName) => {
        navigation.navigate(pageName);
    };

  return (
    <SafeAreaView>
      <Text>Estamos en SettingScreen</Text>
      <Text>Estamos en SettingScreen</Text>
      <Text>Estamos en SettingScreen</Text>
      <Text>Estamos en SettingScreen</Text>
      <Text>Estamos en SettingScreen</Text>
      <Text>Estamos en SettingScreen</Text>
      <Text>Estamos en SettingScreen</Text>
      <Text>Estamos en SettingScreen</Text>
      <Text>Estamos en SettingScreen</Text>
      <Text>Estamos en SettingScreen</Text>
      <Text>Estamos en SettingScreen</Text>
      <Button onPress={() => goToPage("Home")} title="Ir a Home"/>
    </SafeAreaView>
  )
}