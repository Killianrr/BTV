import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer';


//Importation des différentes pages
import { ClassementNav } from '../vues/Classement'
import { PhotoNav } from '../vues/Photo'
import { VilleNav } from '../vues/Ville'
import { MapNav } from '../vues/Map'


const Tab = createBottomTabNavigator()
const Drawer = createDrawerNavigator();


export default function navigation() {
  return (
    <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Map') {
              iconName = focused
                ? require('../images/maps-black.png')
                : require('../images/maps.png');
            } else if (route.name === 'Ville') {
              iconName = focused ? 
              require('../images/mairie-black.png') 
              : require('../images/mairie.png');;
            } else if (route.name === 'Photo') {
              iconName = focused ? 
              require('../images/camera-black.png') 
              : require('../images/camera.png');;
            } else if (route.name === 'Classement') {
              iconName = focused ? 
              require('../images/ranking-black.png') 
              : require('../images/ranking.png');;
            }

            return <Image source={iconName} style={{width: 20, height: 20}}
            resizeMode="contain"/>;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'black',
        }}
      >
        <Tab.Screen name="Map" component={MapNav} />
        <Tab.Screen name="Ville" component={VilleNav} />
        <Tab.Screen name="Photo" component={PhotoNav} />
        <Tab.Screen name="Classement" component={ClassementNav} />
      </Tab.Navigator>
  );
}
