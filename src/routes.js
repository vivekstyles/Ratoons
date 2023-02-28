import React from 'react';
import {Text, Linking} from 'react-native';
import SignUpScreen from './screens/SignUpScreen';
import SignInScreen from './screens/SignInScreen';
import HomeScreen from './screens/HomeScreen';
import SignUpOTPScreen from './screens/SignUpOTPScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const config = {
  screens: {
    Home: 'Home/:sort',
    SignUpOTP: 'user',
    // Home: {
    //   initialRouteName: 'Post',
    //   screens: {
    //     Post: 'users',
    //   },
    // },
  },
};

const linking = {
  prefixes: ['https://ratoons.com', 'ratoons://'],
  config,
};

const AuthScreen = () => {
  return (
    <Stack.Navigator
      initialRouteName="SignUp"
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: 'red', color: 'green'},
        presentation: 'transparentModal',
        gestureEnabled: true,
        animation: 'slide_from_bottom',
      }}>
      <Stack.Screen
        name="SignUp"
        {...MyDrawer}
        component={SignUpScreen}
        options={{
          animation: 'slide_from_left',
        }}
      />
      <Stack.Screen
        name="SignIn"
        {...MyDrawer}
        component={SignInScreen}
        options={{
          animation: 'slide_from_right',
        }}
      />
      <Stack.Screen
        options={{
          animation: 'slide_from_bottom',
        }}
        name="SignUpOTP"
        component={SignUpOTPScreen}
      />
      <Stack.Screen name="Home" component={MyTabs} />
      <Stack.Screen name="Feeds" component={MyDrawer} />
    </Stack.Navigator>
  );
};

export default function Route() {
  return (
    <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
      <AuthScreen />
    </NavigationContainer>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen
        name="Jobs"
        component={() => {
          alert('');
        }}
      />
      <Tab.Screen
        name="Post"
        component={() => {
          alert('');
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={() => {
          alert('');
        }}
      />
      <Tab.Screen
        name="profile"
        component={() => {
          alert('');
        }}
      />
    </Tab.Navigator>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        initialRouteName: 'Feed',
        defaultStatus: 'open',
      }}>
      <Drawer.Screen
        name="Feed"
        component={data => {
          console.log(data);
        }}
      />
      <Drawer.Screen name="Article" component={() => {}} />
    </Drawer.Navigator>
  );
}
