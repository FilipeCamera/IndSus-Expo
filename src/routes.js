import React from 'react'

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Home from './screens/Home'
import Formulario from './screens/Form'
import Areas from './screens/Areas'
import AreaUm from './screens/AreaUm'
import Dados from './screens/Dados'
import Grafico from './screens/Grafico'
import AreaDois from './screens/AreaDois'
import AreaTres from './screens/AreaTres'
import AreaQuat from './screens/AreaQuatro'
import DadosResult from './screens/DadosResult'

const Stack = createStackNavigator()

export default function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen name='Home' component={Home} options={{headerShown: false}}/>
                <Stack.Screen name='Formulario' component={Formulario} options={{headerShown: false}}/>
                <Stack.Screen name='Areas' component={Areas} options={{headerShown: false}}/>
                <Stack.Screen name='AreaUm' component={AreaUm} options={{headerShown: false}}/>
                <Stack.Screen name='AreaDois' component={AreaDois} options={{headerShown: false}}/>
                <Stack.Screen name='AreaTres' component={AreaTres} options={{headerShown: false}}/>
                <Stack.Screen name='AreaQuatro' component={AreaQuat} options={{headerShown: false}}/>
                <Stack.Screen name='Dados' component={Dados} options={{headerShown: false}}/>
                <Stack.Screen name='DadosResult' component={DadosResult} options={{headerShown: false}}/>
                <Stack.Screen name='Grafico' component={Grafico} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
