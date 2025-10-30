import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../app/Home";
import PlanDetail from "../app/PlanDetail";

export type RootStackParamList = {
  Home: undefined;
  PlanDetail: { id: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Planes" }}
        />
        <Stack.Screen
          name="PlanDetail"
          component={PlanDetail}
          options={{ title: "Detalle del Plan" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
