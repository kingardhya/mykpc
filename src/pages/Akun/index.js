import React from 'react'
import { StyleSheet, Text, View, ScrollView , ImageBackground, Image, Dimensions} from 'react-native'
import { Header, Logo, LogoHome, UserCircle} from '../../assets'
import { Profile, PositionHistory, TrainingHistory} from '../../components' 


const Akun = () => {
    return (
        <View>
            <ScrollView showsVerticalScrollIndicator={false}>
            <ImageBackground 
                source={Header} 
                style={styles.header}>
                <Image source={LogoHome} style={styles.logo}/>
                <Image source={UserCircle} style={styles.akun}/>
            </ImageBackground>
            <View >
                    <Text style={styles.label}>Ardhya Putra</Text>
                    <Text style={styles.bn}>19483</Text>
            </View>
            <Profile/>
            <TrainingHistory/>
            <PositionHistory/>

            </ScrollView>
        </View>
    )
}

export default Akun

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    header: {
        width: windowWidth*1,
        height: windowHeight*0.38,
        paddingHorizontal: 30,
        paddingTop: 5
    },
    logo: {
        width: windowWidth*0.48,
        height: windowHeight*0.09 
    } ,
    akun : {
        width: windowWidth*0.35,
        height: windowHeight*0.18,
        marginLeft : 110,
        marginTop : 55
    },
    label: {
        fontSize: 30,
        fontFamily: 'TitilliumWeb-Bold',
        textAlign: 'center'
    },
    bn : {
        fontSize: 20,
        fontFamily: 'TitilliumWeb-Regular',
        textAlign: 'center'
    }
})

