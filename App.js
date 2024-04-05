import React from "react";
import { View, Text, ScrollView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { House, UsersThree, Heart, Clipboard } from "phosphor-react-native";
import CafeCard from "./components/CafeCard";
import ReviewScreen from "./pages/ReviewScreen";
import HomeScreen from "./pages/HomeScreen";
import SocialScreen from "./pages/SocialScreen";
import FavoritesScreen from "./pages/FavoritesScreen";

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              return (
                <House
                  size={size}
                  color={color}
                  weight={focused ? "fill" : "thin"}
                />
              );
            } else if (route.name === "Social") {
              return (
                <UsersThree
                  size={size}
                  color={color}
                  weight={focused ? "fill" : "thin"}
                />
              );
            } else if (route.name === "Favorites") {
              return (
                <Heart
                  size={size}
                  color={color}
                  weight={focused ? "fill" : "thin"}
                />
              );
            } else if (route.name === "Review") {
              return (
                <Clipboard
                  size={size}
                  color={color}
                  weight={focused ? "fill" : "thin"}
                />
              );
            }
          },
          tabBarStyle: {
            backgroundColor: "#FBF8F1",
            borderTopWidth: 0,
          },
          tabBarActiveTintColor: "#333333",
          tabBarInactiveTintColor: "#333333",
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
