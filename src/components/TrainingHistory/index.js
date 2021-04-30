import React from 'react'
import { Image, StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import {VideoThumb1, VideoThumb2, VideoThumb3, Logo, Arrow} from '../../assets';

const VideoList = ({title}) => {

    return (
        <TouchableOpacity style={styles.container}>
          <View style={styles.text}>
                <Text style={styles.title}>Training History</Text>
                <Text>0030281 - Fire Extinguisher        11 Januari 2020</Text>
                <Text>0030281 - Presentation Skill       11 Januari 2020</Text>
                <Text>0030281 - Supv Handal              11 Januari 2020</Text>
                <Arrow/>
            </View>

        </TouchableOpacity>
)
}

export default VideoList

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        padding: 17,
        backgroundColor: 'white',
        
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
        marginHorizontal: windowWidth*0.05,
        alignItems: 'center'
    },
    text: {
        marginLeft: windowWidth*0.02,
        alignItems: 'center'
    },
    title: {
        fontSize: 18,
        fontFamily: 'TitilliumWeb-Bold',
        alignItems: 'center'
    },
    logo: {
        width: windowWidth*0.5,
        height: windowHeight*0.09 
    }
})
