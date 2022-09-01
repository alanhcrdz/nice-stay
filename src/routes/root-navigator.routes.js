import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Properties from "../screens/properties/properties.screen";
import Favorites from "../screens/favorites/favorites.screen";
import { AntDesign, Entypo } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: "#FFF",
          tabBarInactiveTintColor: "#2D3038",
          tabBarShowLabel: false,
          tabBarStyle: [
            {
              height: "10%",
              backgroundColor: "#4361ee",
            },
            null,
          ],
        }}
      >
        <Tab.Screen
          name="Properties"
          component={Properties}
          options={{
            tabBarIcon: ({ focused }) => (
              <Entypo
                name="home"
                color={focused ? "#fff" : "#1d3557"}
                size={24}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Favorites"
          component={Favorites}
          options={{
            tabBarIcon: ({ focused }) => (
              <AntDesign
                name="heart"
                color={focused ? "#fff" : "#1d3557"}
                size={24}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
