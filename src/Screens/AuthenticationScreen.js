import { StyleSheet, Text, TouchableOpacity, View , Image, TextInput, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import colors from '../assets/Colors/colors'
import { useDispatch } from 'react-redux'
import { addFullName } from '../redux/userSlice'

const AuthenticationScreen = () => {

    const [name, setName] = useState('')
    const navigation = useNavigation()
    const dispatch = useDispatch()

    
    const handleFullName = () => {
        navigation.navigate('Home', {firstName: name})
    }


    return (
      <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'} keyboardVerticalOffset={Platform.select({ ios: 80, android: 0 })}>
        <View style={styles.topContainer}>
          <Image source={require('../assets/Images/fruits.png')} style={styles.fruitsImage} />
          <Image source={require('../assets/Images/basket-1.png')} style={styles.basketImage}
          resizeMode='contain' />
          <View style={styles.shadow}/>
        </View>
  
        <View style={styles.bottomContainer}>
            <Text style={styles.title}>Enter Your First Name</Text>
         <View style={styles.inputContainer}>
           <TextInput
             placeholder='First Name'
             placeholderTextColor={'#A0A0A0'} 
             value={name}
             onChangeText={setName}
             style={styles.input}
           />
         </View>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleFullName}>
          <Text style={styles.buttonText}>Start Ordering</Text>
        </TouchableOpacity> 
      </KeyboardAvoidingView>
  )
}

export default AuthenticationScreen

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
        paddingVertical: 10,
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
    inputContainer: {
        flexDirection: 'row',
        paddingHorizontal: 15,
        backgroundColor: '#E5E5E5',
        height: 56,
        borderRadius: 10,
        
    },
    input: {
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 10,
        fontFamily: 'BrandonGrotesque-Regular',
        fontSize: 18,
        color: 'black',
        marginHorizontal: 10,
        marginVertical: 5,
    },
})