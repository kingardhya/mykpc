import React from 'react'
import { StyleSheet, Text, View, ScrollView , Dimensions, TouchableOpacity} from 'react-native'
import { AbsenHome, ButtonIcon , News} from '../../components'

const Eform = () => {
    return (
        <View>
            <TouchableOpacity style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
            
            <View style={styles.news}>
                <Text style={styles.label}>E-Form</Text>
                <News title="Berita 1"/>
                <News title="Berita 2"/>
                <News title="Berita 3"/>
                <News title="Berita 4"/>
            </View>
            
            </ScrollView>
            </TouchableOpacity>
        </View>
    )
}

export default Eform

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
