import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { House, UsersThree, Heart, Clipboard } from "phosphor-react-native";
import ReviewScreen from "./pages/ReviewScreen";
import HomeScreen from "./pages/HomeScreen";
import SocialScreen from "./pages/SocialScreen";
import FavoritesScreen from "./pages/FavoritesScreen";
import * as SplashScreen from "expo-splash-screen";
import {
  useFonts,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
// import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

const Tab = createBottomTabNavigator();

SplashScreen.preventAutoHideAsync().catch(console.warn); // Simplified error handling

const App = () => {
  const [fontsLoaded] = useFonts({
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync().then(() => {
        setAppIsReady(true);
      });
    }
  }, [fontsLoaded]);

  if (!appIsReady) {
    return null;
  }

  return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              const iconProps = {
                size,
                color,
                weight: focused ? "fill" : "thin",
              };
              switch (route.name) {
                case "Home":
                  return <House {...iconProps} />;
                case "Social":
                  return <UsersThree {...iconProps} />;
                case "Favorites":
                  return <Heart {...iconProps} />;
                case "Review":
                  return <Clipboard {...iconProps} />;
                default:
                  return null;
              }
            },
            tabBarStyle: { backgroundColor: "#FBF8F1", borderTopWidth: 0 },
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
