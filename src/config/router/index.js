import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {SPLASH_PAGE} from '../../parameters';
import {listRoute} from './data';

const Stack = createStackNavigator();

export default function Router() {
  return (
    <Stack.Navigator initialRouteName={SPLASH_PAGE}>
      {listRoute?.map((item, idx) => {
        return (
          <Stack.Screen
            key={idx}
            name={item?.name}
            component={item?.component}
            options={{headerShown: false}}
          />
        );
      })}
    </Stack.Navigator>
  );
}
