import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import colors from '../assets/Colors/colors'
import { useNavigation } from '@react-navigation/native'

function WelcomeScreen () {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Image source={require('../assets/Images/fruits.png')} style={styles.fruitsImage} />
        <Image source={require('../assets/Images/basket-1.png')} style={styles.basketImage}
        resizeMode='contain' />
        <View style={styles.shadow}/>
      </View>

      <View style={styles.bottomContainer}>
        <Text style={styles.title}>Get The Freshest Fruit Salad Combo</Text>
        <Text style={styles.description}>We deliver the best and freshest fruit salad in town. Order for a combo today!!!</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AuthScreen')}>
        <Text style={styles.buttonText}>Let's Continue</Text>
      </TouchableOpacity>
    </View>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topContainer: {
       backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '55%',
    },
    basketImage: {
        width: "90%",
        height: 260,
    },
    bottomContainer: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: 10,
        padding: 20,
    },
    title: {
        fontSize: 20,
        textAlign: 'left',
        fontFamily: 'BrandonGrotesque-Bold',
        marginBottom: 18,
        marginTop: 30,
    },
    description: {
        fontSize: 16,
        textAlign: 'left',
        marginBottom: 10,
        fontFamily: 'BrandonGrotesque-Regular',
    },
    button: {
        width: '94%',
        height: 56,
        marginVertical: 30,
        marginHorizontal: 15,
        backgroundColor: colors.primary,
        padding: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    },
    fruitsImage: {
        width: 100,
        height: 100,
        alignSelf: 'flex-end',
        marginHorizontal: 20,
        overflow: 'visible',
      },

})