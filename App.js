import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Connectez vous</Text>
        <TextInput placeholder = 'utilisateur'/>
        <TextInput placeholder = 'mot de passe'/>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
