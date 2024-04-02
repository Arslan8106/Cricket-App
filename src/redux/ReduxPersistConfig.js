// import { configureStore } from '@reduxjs/toolkit';
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import rootReducer from './reducers';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const configureStore = () => {
    const store = createStore(persistedReducer);
    const persistor = persistStore(store);
    return { store, persistor };
};
// export const configureReduxStore = () => {
//     const store = configureStore({
//         reducer: persistedReducer,
//     });
//     const persistor = persistStore(store);
//     return { store, persistor };
// };
