import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, Button, Image, TextInput } from 'react-native';
import DatePicker from 'react-native-datepicker';
import {KeyboardAvoidingView} from 'react-native';

export function InscriptionNav ({ navigation }) {
    
  return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
<View style={styles.container}>

    <Image source={require('../images/logo.png')} style={{width: 180, height: 180}} /> 

      <TextInput
      style={{ height: 40, width: 240, borderBottomColor: 'gray', borderBottomWidth: 1,margin: 20 }}
      //onChangeText={text => onChangeText(text)}
      placeholder='Pseudo'
    />

    <TextInput
      style={{ height: 30, width: 240, borderBottomColor : 'gray', borderBottomWidth: 1,marginBottom: 20 }}
      //onChangeText={text => onChangeText(text)}
      placeholder='Nom'
      
    />

<TextInput
      style={{ height: 30, width: 240, borderBottomColor : 'gray', borderBottomWidth: 1,marginBottom: 10 }}
      //onChangeText={text => onChangeText(text)}
      placeholder='Prénom'
      
    />
        <Text style={{color: 'black', marginTop: 10, paddingRight: 120,marginBottom: 10 }}
              onPress={() => Linking.openURL('http://google.com')}>
          Date de naissance
        </Text>

<DatePicker
        style={{width: 240}}
        date={"17-01-2020"}
        mode="date"
        placeholder="select date"
        format="DD-MM-YYYY"
        minDate="1950-01-01"
        maxDate="17-01-2020"
        confirmBtnText="Ok"
        cancelBtnText="Annuler"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36,
            borderLeftWidth: 0
          }
          // source pour le truc de date : https://www.npmjs.com/package/react-native-datepicker
        }}

      />

<TextInput
      style={{ height: 30, width: 240, borderBottomColor : 'gray', borderBottomWidth: 1,marginBottom: 20, marginTop: 20 }}
      //onChangeText={text => onChangeText(text)}
      placeholder='Mail'
      
    />

<TextInput
      style={{ height: 30, width: 240, borderBottomColor : 'gray', borderBottomWidth: 1,marginBottom: 20 }}
      //onChangeText={text => onChangeText(text)}
      placeholder='Mot de passe'
      
    />

<TextInput
      style={{ height: 30, width: 240, borderBottomColor : 'gray', borderBottomWidth: 1,marginBottom: 20 }}
      //onChangeText={text => onChangeText(text)}
      placeholder='Confirmer mot de passe'
      
    />

    <Button  color="#24c11a"
          title="Valider"
          onPress={() => navigation.navigate('ConnexionNav')}
        />

        <Text style={{color: 'black', marginTop: 20 }}
              onPress={() => navigation.navigate('ConnexionNav')}>
          
          {`Retourner à l'identification`} 
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