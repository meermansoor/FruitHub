import { StyleSheet } from 'react-native'
import React from 'react'
import StackNavigator from './src/Navigation/StackNavigator'
import { Provider } from 'react-redux'
import { store } from './src/redux/store'


const App = () => {
  return (
    <Provider store={store}>
      <StackNavigator />
    </Provider>

  )
}

export default App

const styles = StyleSheet.create({
  container: {  
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badScript: {
    fontFamily: 'BadScript-Regular',
    fontSize: 24,
  },
})