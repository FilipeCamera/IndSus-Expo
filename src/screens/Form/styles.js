
import {StyleSheet, Dimensions} from 'react-native'

const {width, height} = Dimensions.get('screen')

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#288BFF',
    },
    boxImage: {
        position: 'absolute',
        top: 40,
        width: 150,
        height: 150,
        borderRadius: 75,
        backgroundColor: '#FFD07480',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 110,
        height: 110,
    },
    boxWhite: {
        position: 'absolute',
        bottom: 0,
        height: height/2 + 50,
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
    title: {
        textAlign: 'center',
        paddingBottom: 5,
        fontFamily: 'Quantico-Bold',
        width: '90%',
        fontSize: 16,
        color: '#5B5B5B',
        borderBottomWidth: 1,
        borderBottomColor: '#C8C8C8'
    },
    boxForm: {
        marginTop: 60,
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',

    },
    form: {
        marginTop: 30,
        width: '100%',
        padding: 10
    }
})

export default styles