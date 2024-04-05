import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { House, UsersThree, Heart, Coffee } from 'phosphor-react-native';

const Tab = createBottomTabNavigator();

// Dummy screen components
const HomeScreen = () => <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Text>Home Screen</Text></View>;
const SocialScreen = () => <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Text>Social Screen</Text></View>;
const FavoritesScreen = () => <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Text>Favorites Screen</Text></View>;
const ReviewScreen = () => <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Text>Review Screen</Text></View>;

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              return <House size={size} color={color} weight={focused ? "fill" : "thin"} />;
            } else if (route.name === 'Social') {
              return <UsersThree size={size} color={color} weight={focused ? "fill" : "thin"} />;
            } else if (route.name === 'Favorites') {
              return <Heart size={size} color={color} weight={focused ? "fill" : "thin"} />;
            } else if (route.name === 'Review') {
              return <Coffee size={size} color={color} weight={focused ? "fill" : "thin"} />;
            }
          },
          tabBarStyle: {
            backgroundColor: '#FBF8F1',
            borderTopWidth: 0,
          },
          tabBarActiveTintColor: '#333333',
          tabBarInactiveTintColor: '#333333',
          headerShown: false,
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Social" component={SocialScreen} />
        <Tab.Screen name="Favorites" component={FavoritesScreen} />
        <Tab.Screen name="Review" component={ReviewScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
