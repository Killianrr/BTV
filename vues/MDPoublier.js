import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { TextInput } from 'react-native';
import {KeyboardAvoidingView} from 'react-native';


export function MDPoublierNav ({ navigation }) {
  return (
      
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
    <View style={styles.container}>
    <Image source={require('../images/logo.png')} /> 

    <Text style={{color: 'black', marginTop: 20, marginBottom: 10,textAlign: 'center' }}>
      
      {`Un mail vous sera envoyé afin de définir \nun nouveau mot de passe`} 
    </Text>
    

    <TextInput
      style={{ height: 30, width: 200, borderBottomColor : 'gray', borderBottomWidth: 1,marginBottom: 20, marginBottom: 30 }}
      //onChangeText={text => onChangeText(text)}
      placeholder="Mail"
    />

    <Button  color="#24c11a"
      title="Envoyer"
      onPress={() => navigation.navigate('ConnexionNav')}
    />

    </View>
</KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
