import React from "react";
import colors from "../../assets/colors/colors";
import { createStackNavigator } from "@react-navigation/stack";
import MatchesScreen from "./MatchesScreen";
import StartMatchScreen from "./StartMatchScreen";

const Stack = createStackNavigator();

const MatchesScreenStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                transparentCard: true,
                cardStyle: { backgroundColor: colors.lightWhite },
            }}
        >
            <Stack.Group>
                <Stack.Screen
                    name="MatchesScreen"
                    component={MatchesScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="StartMatchScreen"
                    component={StartMatchScreen}
                    options={{ headerShown: false }}
                />
            </Stack.Group>
        </Stack.Navigator>
    );
};
export default MatchesScreenStack;
