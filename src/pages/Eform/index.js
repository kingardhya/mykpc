import React from 'react'
import { StyleSheet, Text, View, ScrollView , ImageBackground, Dimensions, TouchableOpacity} from 'react-native'
import { AbsenHome, ButtonIcon , EformMenu, News} from '../../components'
import { Header, Logo, LogoHome, UserCircle} from '../../assets'

const Eform = () => {
    return (
        <View>
            
            <ScrollView showsVerticalScrollIndicator={false}>
            <ImageBackground 
                source={Header} 
                style={styles.header}>
            </ImageBackground>
            <View style={styles.news}>
                <Text style={styles.label}>E-Form</Text>
                <EformMenu title="New Report"/>
                <EformMenu title="Approval E-Form"/>
                <EformMenu title="History Report"/>
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
    }
})
