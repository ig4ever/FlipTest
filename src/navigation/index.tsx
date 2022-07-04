import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';

import {RootStackParamList} from './RootStackParamList';

/** List Container Screens */
import TransactionList from '../containers/TransactionList';
import TransactionDetail from '../containers/TransactionDetail';

/** Initialize Navigator */
const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator: FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="TransactionListScreen"
          component={TransactionList}
        />
        <Stack.Screen
          name="TransactionDetailScreen"
          component={TransactionDetail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
