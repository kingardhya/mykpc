import React, { Component } from 'react'
import { StyleSheet, Text, View , Dimensions, TouchableOpacity} from 'react-native'
import {Item} from '../..//assets';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function EformMenu ({title}) {


    return (
        <View style={styles.container}>
            <Item/>
            <View style={styles.text}>
                <Text style={styles.title}>{title}</Text>
            </View>

        </View>
    )
}

export default EformMenu

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        padding: 17,
        backgroundColor: 'white',
        flexDirection: 'row',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        elevation: 15,
        marginVertical: windowHeight*0.02,
        alignItems: 'center'
    },
    text: {
        marginLeft: windowWidth*0.02
    },
    title: {
        fontSize: 18,
        fontFamily: 'TitilliumWeb-Bold'
    }
})