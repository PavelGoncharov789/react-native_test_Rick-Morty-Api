import React from "react";
import {
  Button,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Characters from "./src/components/Characters";
import HomeeScreen from "./src/components/HomeScreen";
import Location from "./src/components/Location";
import Episodes from "./src/components/Episodes";

const STYLES = ["default", "dark-content", "light-content"];

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeeScreen} />
        <Stack.Screen name="Characters" component={Characters} />
        <Stack.Screen name="Location" component={Location} />
        <Stack.Screen name="Episodes" component={Episodes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
