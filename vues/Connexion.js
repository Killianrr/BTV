import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, Button, Image, TextInput } from 'react-native';
import DatePicker from 'react-native-datepicker';
import {KeyboardAvoidingView} from 'react-native';

export function ConnexionNav ({ navigation }) {
  return (
<KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
    <View style={styles.container}>
    <Image source={require('../images/logo.png')} /> 
    

      <TextInput
      style={{ height: 40, width: 200, borderBottomColor: 'gray', borderBottomWidth: 1,margin: 20 }}
      //onChangeText={text => onChangeText(text)} 
      placeholder='Identifiant'
    />
    

    <TextInput
      style={{ height: 30, width: 200, borderBottomColor : 'gray', borderBottomWidth: 1,marginBottom: 20 }}
      //onChangeText={text => onChangeText(text)}
      placeholder='Mot de passe'      
    />


    <Button  color="#24c11a"
      title="Se Connecter"
      onPress={() => navigation.navigate('MapNav')}
    />
              
    <Text>
    </Text>


    <Button  color="#24c11a"
      title="Sinscrire"
      onPress={() => navigation.navigate('InscriptionNav')}
    />

    <Text style={{color: 'black', marginTop: 20 }}
          onPress={() => navigation.navigate('MDPoublierNav')}>

      {`Mot de passe oublié`} 
    </Text>

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