import React, { Component } from 'react'
import { StyleSheet, Text, View , Dimensions, TouchableOpacity} from 'react-native'
import {Item, Doc, New, History, Listappr} from '../../assets';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function EformMenu ({title, type}) {

    const Icon = () => {
        if(type === "doc") return <Doc/>
        if(type === "new") return <New/>
        if(type === "history") return <History/>
        if(type === "listappr") return <Listappr/>
        return <Item/>
    }

    return (
        <View style={styles.container}>
            <Icon/>
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