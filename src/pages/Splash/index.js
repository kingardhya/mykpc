import React, { useEffect } from 'react'
import { ImageBackground, StyleSheet, Text, View , Image} from 'react-native'
import {Logo} from '../../assets'

const Splash = ({ navigation}) => {
    useEffect(() => {
       setTimeout(() => {
        navigation.replace('MainApp');
    }, 3000)
}, [navigation]);

    return (
       <ImageBackground style={styles.background}>
                <Image source={Logo} style={styles.logo} />
       </ImageBackground>
    )
}

export default Splash

const styles = StyleSheet.create({
    background: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: 358,
        height: 146,
        marginLeft : 50
    }
})
