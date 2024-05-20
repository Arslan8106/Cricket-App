import SignupScreen from '../screens/login/SignupScreen';
import LoginScreen from '../screens/login/LoginScreen';
import HomeScreen from '../screens/home/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {useSelector} from "react-redux";

import colors from "../assets/colors/colors";
import TabBar from "../shared/TabBar";

const AppContainer = () => {
    const Stack = createNativeStackNavigator();
    const isAuthenticated = useSelector(state => state.isAuthenticated);

    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="LoginScreen">
                {isAuthenticated ? (
                    <Stack.Group>
                        <Stack.Screen
                            options={{ headerShown: false }}
                            name={"TabBar"}
                            component={TabBar}
                        />
                    </Stack.Group>
                ) : (
                    <>
                        <Stack.Screen name="SignupScreen" component={SignupScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default AppContainer;
