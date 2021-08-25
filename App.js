import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native'

import { Profile } from './screens'
import { Restaurant } from './screens'
import { Login } from './screens'
import Tabs from './navigation/tabs'
import { DeliveryInfo } from './screens'
import { PreviousOrders } from './screens'
import {CompletePage} from './screens'
import {OTP} from './screens'
import {details} from './screens'
import {PaymentInfo} from './screens'
import {Cart} from './screens'

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={'Home'}
            >        
                <Stack.Screen name="Home" component={Tabs} />
                <Stack.Screen name="Restaurant" component={Restaurant} />
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="DeliveryInfo" component={DeliveryInfo}/>
                <Stack.Screen name="PreviousOrders" component={PreviousOrders}/>
                <Stack.Screen name="CompletePage" component={CompletePage}/>
                <Stack.Screen name="OTP" component={OTP}/>
                <Stack.Screen name="details" component={details}/>
                <Stack.Screen name="PaymentInfo" component={PaymentInfo}/>
                <Stack.Screen name="Cart" component={Cart}/>
                {/*<Stack.Screen name="OrderDelivery" component={OrderDelivery} />*/}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;