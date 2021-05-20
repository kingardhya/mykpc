import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Home, Akun, Splash, Video, Eform, Login , EformNew, EformHistory, EformListApproval,Eabsensi, 
        EabsensiCheck, EabsensiCorrection, EabsensiHistory, Eleave, EleaveApproval, EleaveHistory, 
        EleaveListApproval, EleaveNew, Epay, EpayHistory, EpayThisMonth, PerformanceEmployee, 
        PerformanceEmployeeHistory} from '../pages';
import {BottomNavigator} from '../components/';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
    return (
        <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Video" component={Video} />
            <Tab.Screen name="Eform" component={Eform} />
            <Tab.Screen name="Akun" component={Akun} />
        </Tab.Navigator>
    )
}



const Router = () => {
    return (
        <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen name="Splash" component={Splash} options={{headerShown:false}}/>
            <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
            <Stack.Screen name="MainApp" component={MainApp} options={{headerShown:false}}/>
            <Stack.Screen name="EformNew" component={EformNew} options={{headerShown:false}}/>
            <Stack.Screen name="EformHistory" component={EformHistory} options={{headerShown:false}}/>
            <Stack.Screen name="EformListApproval" component={EformListApproval} options={{headerShown:false}}/>
            <Stack.Screen name="Eabsensi" component={Eabsensi} options={{headerShown:false}}/>
            <Stack.Screen name="EabsensiCheck" component={EabsensiCheck} options={{headerShown:false}}/>
            <Stack.Screen name="EabsensiCorrection" component={EabsensiCorrection} options={{headerShown:false}}/>
            <Stack.Screen name="EabsensiHistory" component={EabsensiHistory} options={{headerShown:false}}/>
            <Stack.Screen name="Eleave" component={Eleave} options={{headerShown:false}}/>
            <Stack.Screen name="EleaveApproval" component={EleaveApproval} options={{headerShown:false}}/>
            <Stack.Screen name="EleaveHistory" component={EleaveHistory} options={{headerShown:false}}/>
            <Stack.Screen name="EleaveListApproval" component={EleaveListApproval} options={{headerShown:false}}/>
            <Stack.Screen name="EleaveNew" component={EleaveNew} options={{headerShown:false}}/>
            <Stack.Screen name="Epay" component={Epay} options={{headerShown:false}}/>
            <Stack.Screen name="EpayHistory" component={EpayHistory} options={{headerShown:false}}/>
            <Stack.Screen name="EpayThisMonth" component={EpayThisMonth} options={{headerShown:false}}/>
            <Stack.Screen name="PerformanceEmployee" component={PerformanceEmployee} options={{headerShown:false}}/>
            <Stack.Screen name="PerformanceEmployeeHistory" component={PerformanceEmployeeHistory} options={{headerShown:false}}/>
              
        </Stack.Navigator>
    )
}

export default Router

const styles = StyleSheet.create({})
