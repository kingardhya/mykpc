import React from 'react'
import { StyleSheet, Text, View, ScrollView , ImageBackground, Dimensions, TouchableOpacity} from 'react-native'
import { AbsenHome, ButtonIcon , EformMenu, News} from '../../../components'
import { Header, Logo, LogoHome, UserCircle} from '../../../assets'

const EformNew = () => {
    return (
        <View>
            
            <ScrollView showsVerticalScrollIndicator={false}>
           
            <View style={styles.eform}>
                <Text style={styles.label}>IT Division</Text>
                <TouchableOpacity>
                    <EformMenu title="Request Account Ellipse" type="doc"/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <EformMenu title="Request Non Standart Software" type="doc"/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <EformMenu title="Request Development Application" type="doc"/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <EformMenu title="Out of Procedure" type="doc"/>
                </TouchableOpacity>
                <Text style={styles.label}>MSD Division</Text>
                <TouchableOpacity>
                    <EformMenu title="Report XXXX" type="doc"/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <EformMenu title="Report XXXX" type="doc"/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <EformMenu title="Report XXXX" type="doc"/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <EformMenu title="Report XXXX" type="doc"/>
                </TouchableOpacity>
            </View>
            
            </ScrollView>
            
        </View>
    )
}

export default EformNew

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    header: {
        width: windowWidth*1,
        height: windowHeight*0.38,
        paddingHorizontal: 30,
        paddingTop: 2
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
        
    }
})