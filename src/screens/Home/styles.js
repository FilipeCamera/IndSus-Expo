
import {StyleSheet, Dimensions} from 'react-native'

const {width, height} = Dimensions.get('screen')

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#288BFF',
    },
    boxImage: {
        position: 'absolute',
        top: 50,
        width: height > 760 ? 280 : 180,
        height: height > 760 ? 280 : 180,
        borderRadius: height > 760 ? 140 : 90,
        backgroundColor: '#FFD07480',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: height > 760 ? 200 : 130,
        height: height > 760 ? 200 : 130,
    },
    boxImageLinear: {
        elevation: -1,
        position: 'relative',
        top: height > 760 ? 210 : 150,
    },
    boxWhite: {
        position: 'absolute',
        bottom: 0,
        height: height > 760 ? 300 : 260,
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
        marginTop: 20,
    }
})

export default styles