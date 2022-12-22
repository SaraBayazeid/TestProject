import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/HomeScreen';
import ChatScreen from '../screens/ChatScreen';
import MessagesScreen from '../screens/MessagesScreen';
import ProfileScreen from '../screens/ProfileScreen';
import DetailsScreen from '../screens/DetailsScreen';
import SettingsScreen from '../screens/SettingsScreen';

const homeName = "Home";
const detailsName = "Details";
const settingsName = "Settings";
const messagesName = "messages";
const chatName = "chat";
const profileName = "profile";

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
    <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === detailsName) {
              iconName = focused ? 'list' : 'list-outline';

            } else if (rn === settingsName) {
              iconName = focused ? 'settings' : 'settings-outline';
            } else if (rn === messagesName) {
              iconName = focused ? 'chatbox-ellipses' : 'chatbox-ellipses-outline'; 
            }  else if (rn === profileName) {
              iconName = focused ? 'person-circle-sharp' : 'person-circle-outline'; 
            }    
                   
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'white',
          inactiveTintColor: 'white',
          activeBackgroundColor: '#5e2590',
          inactiveBackgroundColor: '#5e2590',
          labelStyle: { paddingBottom: 10, fontSize: 10},
          style: { padding: 10, height: 70,}
        }}>
        

        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={detailsName} component={DetailsScreen} />
        <Tab.Screen name={settingsName} component={SettingsScreen} />
        <Tab.Screen name={messagesName} component={MessagesScreen}/>
        <Tab.Screen name={profileName} component={ProfileScreen} />
        <Tab.Screen name={chatName} component={ChatScreen} /> 

      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;
   



