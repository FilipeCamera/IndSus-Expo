import {StyleSheet, Dimensions} from 'react-native'

const {width, height} = Dimensions.get('screen')

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#288BFF',
        paddingBottom: 50,
    },
    boxWhite: {
        marginTop: 60,
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
        backgroundColor: '#FFF',
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
        flex: 1,
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
    boxDados: {
        marginTop: 10,
        marginBottom: 10,
        width: 300,
        alignItems: 'center',
        backgroundColor: '#C9C9C9',
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 8,
        elevation: 2,
    },
    headerDados: {
        width: 250,
        padding: 10,
        borderRadius: 8,
        margin: 10,
        backgroundColor: '#5B5B5B',
        alignItems: "center",
        justifyContent: 'center'
    },
    headerText: {
        fontFamily: 'Quantico-Bold',
        fontSize: 15,
        color: '#FFF'
    },
    body: {
        width: '90%',
        marginBottom: 10,
    },
    bodyText: {
        fontFamily: 'Quantico-Regular',
        fontSize: 15,
        color: '#5B5B5B'
    },
    button: {
        position: 'absolute',
        bottom: -20,
        right: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 80
    },
    buttonText: {
        fontFamily: 'Quantico-Regular',
        color: '#288BFF',
        fontSize: 15,
    },
    boxResultado: {
        marginTop: 20,
        marginBottom: 20,
        width: 300,
        alignItems: 'center',
        backgroundColor: '#E9E9E9',
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 8,
        elevation: 1,
    },
    resultText: {
        marginTop: 10,
        fontFamily: 'Quantico-Bold',
        fontSize: 16,
        color: '#5B5B5B'
    },
    boxDadosResult: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        padding: 20,
    },
    textDadosResult: {
        fontFamily: 'Quantico-Regular',
        fontSize: 14,
        color: '#5B5B5B',
        textAlign: 'left',
        width: 100
    },
    boxNota: {
        width: 30,
        height: 30,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#5B5B5B',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textNota: {
        fontFamily: 'Quantico-Regular',
        fontSize: 14,
        color: '#4B4B4B',
    }
})

export default styles;