import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import colors from '../assets/Colors/colors.js'
import { useNavigation } from '@react-navigation/native'

const SplashScreen = () => {

    const navigation = useNavigation()

    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Welcome')
        }, 2000)
    }, [navigation])
  return (
    <View style={styles.container}>
      <Image source={require('../assets/Images/logo.png')} style={styles.logo}
      resizeMode='contain' />
      <View style={styles.textContainer}>
        <Text style={styles.text}>FruitHub</Text>
      </View>
    </View>

  )
}

export default SplashScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    logo: {
        width: 113,
        height: 165,
    },
    textContainer: {
        height: 45,
        backgroundColor: colors.primary,
        width:180,
        borderTopLeftRadius:16,
        borderBottomRightRadius:16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        color: 'white',
        fontFamily: 'BadScript-Regular',
        marginBottom: 5,
        textAlign: 'center',
    },
})