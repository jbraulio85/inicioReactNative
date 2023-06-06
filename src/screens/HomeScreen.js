import React from 'react';
import { View, Text, Button, SafeAreaView } from 'react-native';


export default function HomeScreen(props) {
    const { navigation } = props;

    const goToPage = (pageName) => {
        navigation.navigate(pageName);
    };

  return (
    <SafeAreaView>
      <Text>Estamos en HomeScreen</Text>
      <Text>Estamos en HomeScreen</Text>
      <Text>Estamos en HomeScreen</Text>
      <Text>Estamos en HomeScreen</Text>
      <Text>Estamos en HomeScreen</Text>
      <Text>Estamos en HomeScreen</Text>
      <Text>Estamos en HomeScreen</Text>
      <Text>Estamos en HomeScreen</Text>
      <Button onPress={() => goToPage("Setting")} title="Ir a Setting"></Button>
    </SafeAreaView>
  )
}