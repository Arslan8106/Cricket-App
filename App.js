import React from 'react';
import Toast from 'react-native-toast-message';
import { Provider } from "react-redux";
import { store, persistor } from "./src/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import AppContainer from "./src/components/main_container/AppContainer";
import {useFonts} from "expo-font";

let customFonts = {
    'Poppins-Medium': require('../cricket-app/src/components/assets/fonts/Poppins-Medium.ttf'),
    'Poppins-Light': require('../cricket-app/src/components/assets/fonts/Poppins-Light.ttf'),
    'Poppins-Bold': require('../cricket-app/src/components/assets/fonts/Poppins-Bold.ttf'),
    'Poppins-SemiBold': require('../cricket-app/src/components/assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Regular': require('../cricket-app/src/components/assets/fonts/Poppins-Regular.ttf'),
};
export default function App() {
    const [isLoaded] = useFonts(customFonts);
    return (
        isLoaded && (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                <AppContainer/>
                <Toast/>
                </PersistGate>
            </Provider>
        )
)
    ;
}
