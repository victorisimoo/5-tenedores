import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";

import RestaurantStack from "./RestaurantStack";
import FavoriteStack from "./FavoriteStack";
import TopRestaurantStack from "./TopRestaurantStack";
import SearchStack from "./SearchStack";
import AccountStack from "./AccountStack";

//Tab component
const Tab = createBottomTabNavigator();

//Return menu
export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="restaurants"
        tabBarOptions={{
          inactiveTintColor: "#646464",
          activeTintColor: "#00A680",
        }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => screenOptions(route, color),
        })}
      >
        <Tab.Screen
          name="restaurant"
          component={RestaurantStack}
          options={{ title: "Restaurantes" }}
        />
        <Tab.Screen
          name="favorite"
          component={FavoriteStack}
          options={{ title: "Favoritos" }}
        />
        <Tab.Screen
          name="search"
          component={SearchStack}
          options={{ title: "Búsqueda" }}
        />
        <Tab.Screen
          name="top-restaurant"
          component={TopRestaurantStack}
          options={{ title: "Top" }}
        />
        <Tab.Screen
          name="account"
          component={AccountStack}
          options={{ title: "Cuenta" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function screenOptions(route, color) {
  let iconName;
  switch (route.name) {
    case "restaurant":
      iconName = "compass-outline";
      break;
    case "favorite":
      iconName = "heart-outline";
      break;

    case "top-restaurant":
      iconName = "star-outline";
      break;
    case "search":
      iconName = "magnify";
      break;

    case "account":
      iconName = "home-outline";
      break;

    default:
      break;
  }
  return (
    <Icon type="material-community" name={iconName} size={22} color={color} />
  );
}
