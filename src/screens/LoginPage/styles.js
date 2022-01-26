import { StyleSheet } from "react-native";

export const styles = StyleSheet.create ({
    container: {
        backgroundColor: '#6930C3',
        heigth: '100',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    loginTitle: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        marginBottom: '15%'
    },
    inputContainer: {
        alignItems: 'center'
    },
    buttonContainer: {
        alignItems: 'center'
    },
    imageContainer: {
        alignItems: 'center',
        marginBottom: '3%'
    },
    image: {
        alignItems: 'center',
        width: 100,
        height: 100,
        marginBottom: 50
    },
    textContainer: {
        alignItems: 'center',
        marginTop: '10%'
    },
    text: {
        color: '#fff',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '16px',
        lineHeight: '21px'
    },
    textContainerCreateAccount: {
        marginTop: '10%',
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'relative'
    },
    iconContainer: {
        marginTop: 28
    },
    teste: {
        position: 'absolute',
        zIndex: 1,
        marginLeft: -95
    }
})