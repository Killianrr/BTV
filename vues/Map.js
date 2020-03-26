import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image, TextInput, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import MapView from 'react-native-maps';

const navOptionHandler = () => ({
  headerShown: false
})

const StackMap = createStackNavigator()


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

function MapScreen({navigation}) {
    const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    mapStyle: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
  });
  return (
      <View style={styles.container}>
          <MapView style={styles.mapStyle} />
        </View>
  );
}

function MapScreenDetail({navigation}) {
  return (
    <SafeAreaView style={{ flex: 1}}>
      <CustomHeader title="Map Detail" navigation={navigation}/>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Map Detail !</Text>
      </View>
    </SafeAreaView>
  );
}

function MaVilleScreen({navigation}) {
  return (
    <SafeAreaView style={{ flex: 1}}>
      <CustomHeader title="Ma Ville" isMap={true} navigation={navigation}/>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Ma Ville !</Text>
        <TouchableOpacity
        style={{marginTop: 20}}
        onPress={() => navigation.navigate('SettingDetail')}
        >
          <Text>Go Setting Detail</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export function MapNav ({ navigation }) {
  return (
    <StackMap.Navigator initialRouteName="Map">
      <StackMap.Screen name="Map" component={MapScreen} options={navOptionHandler}/>
      <StackMap.Screen name="MapDetail" component={MapScreenDetail} options={navOptionHandler}/>
    </StackMap.Navigator>
  )
}
