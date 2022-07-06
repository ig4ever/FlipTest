import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import FlashMessage from 'react-native-flash-message';
import {Provider} from 'react-redux';
import AppNavigator from './navigation';
import {store} from './store';
import {Colors} from './styles/Colors';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        {/* FlashMessage Component used for showing message, when occur error message from API */}
        <FlashMessage position="top" />
        <AppNavigator />
      </SafeAreaView>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE_BACKGROUND,
  },
});
