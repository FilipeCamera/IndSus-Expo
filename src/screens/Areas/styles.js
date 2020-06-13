
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
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#FFD07480',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 60,
        height: 60,
    },
    boxWhite: {
        position: 'absolute',
        bottom: 0,
        height: height/2 + 100,
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
    boxGrid: {
        marginTop: 60,
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',

    },
    gridButton: {
        marginTop: 20,
        padding: 10,
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    icon: {
        width: 50,
        height: 50
    }
})

export default styles