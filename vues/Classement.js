import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer';

const navOptionHandler = () => ({
  headerShown: false
})

function SettingsScreenDetail({navigation}) {
  return (
    <SafeAreaView style={{ flex: 1}}>
      <CustomHeader title="Setting Detail" navigation={navigation}/>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Setting Detail !</Text>
      </View>
    </SafeAreaView>
  );
}

function CustomHeader({title, isMap, navigation}) {
  return (
    <View style={{flexDirection: 'row', height: 50, backgroundColor: '#436d4a'}}>
        <View style={{flex: 1, justifyContent: 'center'}}>
          {
            isMap? 
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Image style={{ width: 30, height: 30, marginLeft: 7}}
                source={require('../images/user.png')}
                resizeMode="contain"/>
            </TouchableOpacity>
          
        : 
      <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}
        onPress={() => navigation.goBack()}
      >
        <Image style={{width: 25, height: 25, marginLeft: 5}}
        source={require('../images/back.png')}
        resizeMode="contain"
        />
        <Text>Back</Text>
      </TouchableOpacity>
      }
    </View>
      <View style={{flex: 1.5, justifyContent: 'center'}}>
        <Text style={{textAlign: 'center'}}>{title}</Text>
      </View>
      <View style={{flex: 1}}></View>
    </View>
  )
}

const StackSetting = createStackNavigator()


function ClassementScreen({navigation}) {
  return (
    <SafeAreaView style={{ flex: 1}}>
      <CustomHeader title="Classement" isMap={true} navigation={navigation}/>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Settings !</Text>
        <TouchableOpacity
        style={{marginTop: 20}}
        >
          <Text>Go Setting Detail</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}



export function ClassementNav ({ navigation }) {
  return (
    <StackSetting.Navigator initialRouteName="Classement">
      <StackSetting.Screen name="Classement" component={ClassementScreen} options={navOptionHandler}/>
      <StackSetting.Screen name="SettingDetail" component={SettingsScreenDetail} options={navOptionHandler}/>
    </StackSetting.Navigator>
  )
}
