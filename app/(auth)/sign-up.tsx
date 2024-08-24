import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"

const SignUp = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>
               Create Your Account
            </Text>     
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "white",
    },
    header: {
        width: "90%",
        position: "absolute",
        left: "5%",
        top: "10%",
        fontSize: 25,
        textAlign: "center",
    },
});

export default SignUp;