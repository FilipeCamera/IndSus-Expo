import {StyleSheet, Dimensions} from 'react-native'

const {width, height} = Dimensions.get('screen')

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#288BFF',
        paddingBottom: 50,
    },
    boxWhite: {
        marginTop: 80,
        height: height,
        width: width,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        alignItems: 'center',
        backgroundColor: '#FFF',
    },
    boxLogo: {
        position: 'absolute',
        top: -20,
        justifyContent: 'center',
        alignItems: 'center',
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
    boxGrid: {
        flexDirection: 'column',
        paddingTop: 50,
        width: width,
        alignItems: 'center',
        justifyContent: 'center',

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
    gridButton: {
        marginTop: 20,
        marginBottom: 20,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around'
        
    },
})

export default styles;