
import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#288BFF',
    },
    boxImage: {
        position: 'absolute',
        top: 50,
        width: 200,
        height: 200,
        borderRadius: 100,
        backgroundColor: '#FFD07480',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 140,
        height: 140,
    },
    boxImageLinear: {
        elevation: -1,
        position: 'relative',
        top: 140,
    },
    boxWhite: {
        position: 'absolute',
        bottom: 0,
        height: 300,
        width: '100%',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        alignItems: 'center',
        backgroundColor: '#FFF',
    },
    boxLogo: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        top: -20,
        flex: 1,
        flexDirection: 'row',
        width: 120,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#FFF'
    },
    textBlue: {
        fontFamily: 'Quantico-Bold',
        fontSize: 18,
        color: '#258CFF'
    },
    textGreen: {
        fontFamily: 'Quantico-Bold',
        fontSize: 18,
        color: '#5CAC60'
    },
    textYellow: {
        fontFamily: 'Quantico-Bold',
        fontSize: 18,
        color: '#D9D000'
    },
    boxButton: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    }
})

export default styles