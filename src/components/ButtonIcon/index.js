import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Eabsensi, Eleave, Performance, Epay, Ehazard,Other } from '../../assets'


const ButtonIcon = ({title, type}) => {

    const Icon = () => {
        if(title === "Eabsensi") return <Eabsensi/>
        if(title === "Eleave") return <Eleave/>
        if(title === "Performance") return <Performance/>
        if(title === "Epay") return <Epay/>
        if(title === "Ehazard") return <Ehazard/>
        if(title === "Other") return <Other/>
        return <Eabsensi/>
    }

    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.button}>
                <Icon />
            </View>
            <Text style={styles.title}>{title} </Text>
        </TouchableOpacity>
    )
}

export default ButtonIcon

const styles = StyleSheet.create({

    button: {
        backgroundColor: '#6BBADC',
        padding: 17,
        borderRadius: 15
        
    },
    container: {
        marginBottom : 10,
        marginRight : 20
    },
    title : {
        textAlign: 'center',
        fontSize: 12,
        fontFamily: 'TitilliumWeb-SemiBold'
    }
})
