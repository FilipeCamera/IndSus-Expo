import React, {useState} from 'react';
import Routes from './src/routes';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';


export default function App(){
    const [loadFont, setLoadFont] = useState(false)
    async function LoadingFont(){
        await Font.loadAsync({
            'Quantico-Regular': require('./assets/fonts/Quantico-Regular.ttf'),
            'Quantico-Bold': require('./assets/fonts/Quantico-Bold.ttf')
        })
    }
    if(loadFont){
        return(
            <Routes />
        )
    }
    return(
        <AppLoading startAsync={LoadingFont} onFinish={() => setLoadFont(true)}/>
    )
}