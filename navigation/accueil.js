import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


//Importation des différentes pages
import { ConnexionNav } from '../vues/Connexion'
import { InscriptionNav } from '../vues/Inscription'
import { MDPoublierNav } from '../vues/MDPoublier'
import { MapNav } from '../vues/Map'
import navigationNav from './navigation'


const Stack = createStackNavigator()

export default function accueil() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}  >
        <Stack.Screen name="ConnexionNav" component={ConnexionNav} />
        <Stack.Screen name="InscriptionNav" component={InscriptionNav} />
        <Stack.Screen name="MDPoublierNav" component={MDPoublierNav} />
        <Stack.Screen name="navigationNav" component={navigationNav} />
        <Stack.Screen name="MapNav" component={navigationNav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
