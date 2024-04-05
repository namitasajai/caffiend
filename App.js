import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { House, UsersThree, Heart, ClipboardText } from 'phosphor-react-native';

const Tab = createBottomTabNavigator();

// Dummy screen components
const HomeScreen = () => <View><Text>Home Screen</Text></View>;
const SocialScreen = () => <View><Text>Social Screen</Text></View>;
const FavoritesScreen = () => <View><Text>Favorites Screen</Text></View>;
const ReviewScreen = () => <View><Text>Review Screen</Text></View>;

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              return <House size={size} color={color} />;
            } else if (route.name === 'Social') {
              return <UsersThree size={size} color={color} />;
            } else if (route.name === 'Favorites') {
              return <Heart size={size} color={color} />;
            } else if (route.name === 'Review') {
              return <ClipboardText size={size} color={color} />;
            }
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
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
