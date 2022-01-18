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
        fontSize: 20
    },
    inputContainer: {
        alignItems: 'center'
    },
    buttonContainer : {
        alignItems: 'center'
    },
    imageContainer: {
        alignItems: 'center'
    },
    image: {
        alignItems: 'center',
        width: 100,
        height: 100,
        marginBottom: 50
    }
})