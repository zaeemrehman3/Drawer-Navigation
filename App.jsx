import { View, Text, Button } from 'react-native';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';


const App = () => {

  const Drawer = createDrawerNavigator();

  const HomeScreen = ( { navigation } ) => {
    <View>
      <Text>Home Screen</Text>
      <Button title='Open Drawer' onPress={()=> navigation.openDrawer()} />
    </View>
  };

  
  const ProfileScreen = ( { navigation } ) => {
    <View>
      <Text>Profile Screen</Text>
      <Button title='Open Drawer' onPress={()=> navigation.openDrawer()} />
    </View>
  };

  
  const SettingScreen = ( { navigation } ) => {
    <View>
      <Text>Setting Screen</Text>
      <Button title='Open Drawer' onPress={()=> navigation.openDrawer()} />
    </View>
  };



  return (
    <NavigationContainer>
      <Drawer.Navigator
      screenOptions={{
        drawerStyle : {
          backgroundColor : '#e6e6e6',
          width : 240,
        },
        drawerLabelStyle : {
          fontSize : 18,
          color : '#333',
        },
        headerStyle : {
          backgroundColor : '#6200EE',
        },
        headerTintColor : '#fff',
        headerTitleAlign : 'center',
      }}
      >
        <Drawer.Screen name='Home'component={HomeScreen} />
        <Drawer.Screen name='Profile' component={ProfileScreen} />
        <Drawer.Screen name='Settings' component={SettingScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;