import React from 'react'
import { Dimensions, StyleSheet, Text, View , ImageBackground, Image, ScrollView} from 'react-native'
import { Header, Logo, LogoHome} from '../../assets'
import { AbsenHome, ButtonIcon , News} from '../../components'

const Home = () => {
    return (
        <View>
            <ScrollView showsVerticalScrollIndicator={false}>
            <ImageBackground 
                source={Header} 
                style={styles.header}>
                <Image source={LogoHome} style={styles.logo}/>
                <View style={styles.hello}>
                    <Text style={styles.welcome}>Welcome</Text>
                    <Text style={styles.username}>Ardhya Putra</Text>
                </View>
            </ImageBackground>

            <AbsenHome/>

            <View style={styles.menu}>
                <Text style={styles.label}>Menu</Text>
                <View style={styles.iconmenu}>
                    <ButtonIcon title="Eabsensi"/>
                    <ButtonIcon title="Eleave"/>
                    <ButtonIcon title="Performance"/>
                    <ButtonIcon title="Epay"/>
                    <ButtonIcon title="Ehazard"/>
                    <ButtonIcon title="Other"/>
                </View>
            </View>
            <View style={styles.news}>
                <Text style={styles.label}>News from KPC </Text>
                <News title="Berita 1"/>
                <News title="Berita 2"/>
                <News title="Berita 3"/>
                <News title="Berita 4"/>
            </View>
            </ScrollView>

        </View>
    )
}

export default Home

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const styles = StyleSheet.create({
    page: {
        flex: 1
    },
    header: {
        width: windowWidth*1,
        height: windowHeight*0.33,
        paddingHorizontal: 30,
        paddingTop: 5
    },
    logo: {
        width: windowWidth*0.48,
        height: windowHeight*0.09 
    },
    hello: {
        marginTop: windowHeight*0.01
    },
    welcome: {
        fontSize: 24,
        fontFamily: 'TitilliumWeb-Regular'
    },
    username: {
        fontSize: 18,
        fontFamily: 'TitilliumWeb-Bold'
    },
    menu: {
            paddingHorizontal: 30,
            paddingTop: 2
    },
    label: {
        fontSize: 18,
        fontFamily: 'TitilliumWeb-Bold'
    },
    iconmenu: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        flexWrap: 'wrap',
        alignItems: 'center'
    },
    news: {
        paddingHorizontal: 30,
        paddingTop: 2
    }
})
