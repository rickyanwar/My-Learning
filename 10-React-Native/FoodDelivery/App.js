import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CustomDrawer from "./navigation/CustomDrawer";
import { OnBoarding, SignIn, ForgotPassword, SignUp, Otp } from './screens';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import AppLoading from 'expo-app-loading';

import rootReducer from './stores/rootReducer';
import { useFonts } from 'expo-font';

let customFonts = {
  'Poppins-Black': require('./assets/fonts/Poppins-Black.ttf'),
  'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
  'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
  'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
};

const Stack = createStackNavigator();
const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
)

const App = () => {


  const [isLoaded] = useFonts(customFonts);
  if (!isLoaded) {
    return <AppLoading />;
  }
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={'OnBoarding'}
        >
          <Stack.Screen
            name="OnBoarding"
            component={OnBoarding}
          />

          <Stack.Screen
            name="ForgotPassword"
            component={ForgotPassword}
          />
          <Stack.Screen
            name="SignIn"
            component={SignIn}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
          />
          <Stack.Screen
            name="Otp"
            component={Otp}
          />
          {/* <Stack.Screen
            name="Home"
            component={CustomDrawer}

          /> */}
          {/* <Stack.Screen
            name="Home"
            component={CustomDrawer}

          />
          <Stack.Screen
            name="sss"
            component={CustomDrawer}

          /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}


export default App