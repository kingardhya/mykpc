import React from 'react'
import { StyleSheet, Text, View , Dimensions} from 'react-native'

const AbsenHome = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.labelabsensi}>Absensi</Text>
            <Text style={styles.labeltgl}>Jumat, 23 Juni 2021</Text>

            <View style={styles.inout}>
                <View style={styles.checkin}>
                    <Text>Check In</Text>
                    <Text>08:01:10</Text>
                </View>
                <View style={styles.checkout}>
                    <Text>Check Out</Text>
                    <Text>17:01:10</Text>
                </View>
            </View>

        </View>
    )
}

export default AbsenHome

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 10,
        marginHorizontal: 50,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        elevation: 15,
        marginTop: -windowHeight*0.13
    },
    checkin: {
        backgroundColor: 'white',
        padding: 17,
        marginHorizontal: 80,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        elevation: 15,
        marginTop: windowHeight*0.01,
        marginLeft: windowWidth*0.01,
        backgroundColor : 'green'
    },
    checkout: {
        backgroundColor: 'white',
        padding: 17,
        marginHorizontal: 10,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        elevation: 15,
        marginTop: windowHeight*0.01,
        marginLeft: windowWidth*0.01,
        backgroundColor : 'red'
    },
    labelabsensi:{
        fontSize: 20,
        fontFamily: 'TitilliumWeb-Bold',
        textAlign: 'center'
    },
    labeltgl: {
        textAlign: 'center'
    },
    inout: {
        flexDirection: "row"
    }
})
