import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Home, Akun, Splash, Video, Eform, Login , EformNew, EformHistory, EformListApproval,Eabsensi, 
        EabsensiCheck, EabsensiCorrection, EabsensiHistory, Eleave, EleaveApproval, EleaveHistory, 
        EleaveListApproval, EleaveNew, Epay, EpayHistory, EpayThisMonth, PerformanceEmployee, 
        PerformanceEmployeeHistory, Ehazard, EhazardNew, EhazardApproval,
        EhazardHistory} from '../pages';
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
            <Stack.Screen name="Eform" component={Eform} options={{headerShown:false}}/>
            <Stack.Screen name="EformNew" component={EformNew} options={{headerShown:true}}/>
            <Stack.Screen name="EformHistory" component={EformHistory}/>
            <Stack.Screen name="EformListApproval" component={EformListApproval} />
            <Stack.Screen name="Eabsensi" component={Eabsensi} options={{headerShown:false}}/>
            <Stack.Screen name="EabsensiCheck" component={EabsensiCheck} />
            <Stack.Screen name="EabsensiCorrection" component={EabsensiCorrection} />
            <Stack.Screen name="EabsensiHistory" component={EabsensiHistory} />
            <Stack.Screen name="Eleave" component={Eleave} options={{headerShown:false}}/>
            <Stack.Screen name="EleaveApproval" component={EleaveApproval} />
            <Stack.Screen name="EleaveHistory" component={EleaveHistory} />
            <Stack.Screen name="EleaveListApproval" component={EleaveListApproval} />
            <Stack.Screen name="EleaveNew" component={EleaveNew} />
            <Stack.Screen name="Epay" component={Epay} options={{headerShown:false}}/>
            <Stack.Screen name="EpayHistory" component={EpayHistory} />
            <Stack.Screen name="EpayThisMonth" component={EpayThisMonth}/>
            <Stack.Screen name="PerformanceEmployee" component={PerformanceEmployee} options={{headerShown:false}}/>
            <Stack.Screen name="PerformanceEmployeeHistory" component={PerformanceEmployeeHistory} />
            <Stack.Screen name="Ehazard" component={Ehazard} options={{headerShown:false}}/>
            <Stack.Screen name="EhazardNew" component={EhazardNew} options={{headerShown:false}}/>
            <Stack.Screen name="EhazardApproval" component={EhazardApproval} options={{headerShown:false}}/>
            <Stack.Screen name="EhazardHistory" component={EhazardHistory} options={{headerShown:false}}/>
              
        </Stack.Navigator>
    )
}

export default Router

const styles = StyleSheet.create({})
