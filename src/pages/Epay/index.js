import React from 'react'
import { StyleSheet, Text, View, ScrollView , ImageBackground, Dimensions, TouchableOpacity} from 'react-native'
import { AbsenHome, ButtonIcon , EformMenu, News} from '../../components'
import { Header, Logo, LogoHome, UserCircle} from '../../assets'

function Epay ({navigation}){
    const pressHandler = () => {
        navigation.navigate('EpayThisMonth');
    }
    const pressHandler1 = () => {
        navigation.navigate('EpayHistory');
    }

    return (
       <View>
            
            <ScrollView showsVerticalScrollIndicator={false}>
            <ImageBackground 
                source={Header} 
                style={styles.header}>
                <Text style={styles.label}>E-Pay</Text>
            </ImageBackground>
            <View style={styles.eform}>
                <TouchableOpacity onPress={pressHandler}>
                    <EformMenu title="Payslip This Month" type="listappr"/>
                </TouchableOpacity>
                <TouchableOpacity onPress={pressHandler1}>
                    <EformMenu title="History Payslip" type="history"/>
                    </TouchableOpacity>
            </View>
            
            </ScrollView>
            
        </View>
    )
}

export default Epay

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


