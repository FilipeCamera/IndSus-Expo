import React from 'react'

import * as Font from 'expo-font'
import { AppLoading } from 'expo'

export default function Loading({navigation}){
    async function LoadingFont(){
        await Font.loadAsync({
            'Quantico-Regular': require('../../../assets/fonts/Quantico-Regular.ttf'),
            'Quantico-Bold': require('../../../assets/fonts/Quantico-Bold.ttf')
        })
    }
    return(
        <AppLoading startAsync={LoadingFont} onFinish={() => navigation.navigate('Home')}/>
    )
}