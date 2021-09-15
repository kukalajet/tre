import React from "react";
import { Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { RootBottomTab, RootStack } from "./src/navigations";
import { NavigationContainer } from "@react-navigation/native";

const Home = () => <Text>Home</Text>;
const Search = () => <Text>Search</Text>;
const Profile = () => <Text>Profile</Text>;
const Listing = () => <Text>Listing</Text>;
const List = () => <Text>List</Text>;

const Root = () => (
  <RootBottomTab.Navigator screenOptions={{ headerShown: false }}>
    <RootBottomTab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="whatshot" color={color} size={size} />
        ),
      }}
    />
    <RootBottomTab.Screen
      name="Search"
      component={Search}
      options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="search" color={color} size={size} />
        ),
      }}
    />
    <RootBottomTab.Screen
      name="Profile"
      component={Profile}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="person" color={color} size={size} />
        ),
      }}
    />
  </RootBottomTab.Navigator>
);

const App = () => (
  <NavigationContainer>
    <RootStack.Navigator initialRouteName="Root">
      <RootStack.Screen name="Root" component={Root} />
      <RootStack.Screen name="Listing" component={Listing} />
      <RootStack.Screen name="List" component={List} />
    </RootStack.Navigator>
  </NavigationContainer>
);

export default App;
