import React from 'react'
import { StyleSheet, Text, View , ScrollView} from 'react-native'
import VideoList from '../../components/VideoList'

const Video = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.news}>
                <Text style={styles.label}>Video</Text>
                <VideoList title="Video 1"/>
                <VideoList title="Video 2"/>
                <VideoList title="Video 3"/>
                <VideoList title="Video 4"/>
                
            </View>
        </ScrollView>
    )
}

export default Video

const styles = StyleSheet.create({
    label: {
        fontSize: 30,
        fontFamily: 'TitilliumWeb-Bold',
        textAlign: 'center'
    },
    news: {
        paddingHorizontal: 30,
        paddingTop: 2
    }
})
