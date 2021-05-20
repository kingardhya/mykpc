import React from 'react'
import { StyleSheet, Text, View, ScrollView , ImageBackground, Dimensions, TouchableOpacity} from 'react-native'
import { AbsenHome, ButtonIcon , EformMenu, News} from '../../components'
import { Header, Logo, LogoHome, UserCircle} from '../../assets'

function Eform ({navigation}){
    const pressHandler = () => {
        navigation.navigate('EformNew');
    }

    return (
        <View>
            
            <ScrollView showsVerticalScrollIndicator={false}>
            <ImageBackground 
                source={Header} 
                style={styles.header}>
                <Text style={styles.label}>E-Form</Text>
            </ImageBackground>
            <View style={styles.eform}>
                <TouchableOpacity onPress={pressHandler}>
                    <EformMenu title="New Report"/>
                </TouchableOpacity>
                <TouchableOpacity onPress={pressHandler}>
                    <EformMenu title="Approval E-Form"/>
                </TouchableOpacity>
                <TouchableOpacity onPress={pressHandler}>
                    <EformMenu title="History Report"/>
                    </TouchableOpacity>
            </View>
            
            </ScrollView>
            
        </View>
    )
}

export default Eform

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    header: {
        width: windowWidth*1,
        height: windowHeight*0.38,
        paddingHorizontal: 30,
        paddingTop: 5
    },
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
    },
    label: {
        paddingTop: 30,
        fontSize: 30,
        fontFamily: 'TitilliumWeb-Bold',
        textAlign: 'center'
    },
    eform: {
        paddingHorizontal: 30,
        paddingTop: 1,
        marginTop: -windowHeight*0.1
    }
})
