import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"

const SignUp = () => {
    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.container2}
            >
                <Text style={styles.header}>
                Create Your Account
                </Text>
                <Text style={styles.label1}>
                    Name
                </Text>
                <TextInput style={styles.input1}/>  
                <Text style={styles.label2}>
                    Email
                </Text>
                <TextInput style={styles.input2}/>    
                <Text style={styles.label3}>
                    Password
                </Text>
                <TextInput style={styles.input3}/>    
                <Text style={styles.label4}>
                    Confirm Password
                </Text>
                <TextInput style={styles.input4}/> 
                <Text style={styles.notice}>
                    Already have an account? {"\n"}Sign-In instead.
                </Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>
                        Sign-Up
                    </Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "white",
        width: "100%",
    },
    container2: {
        flex: 1,
        position: "relative",
        left: "-40%",
        top: "0%",
    },
    header: {
        width: "90%",
        position: "absolute",
        left: "-5%",
        top: "10%",
        fontSize: 25,
        textAlign: "center",
    },
    label1: {
        position: "absolute",
        top: "20%",
        width: "80%",
        fontSize: 20,
        textAlign: "left",
        color: "black",
    },
    input1: {
        width: "80%",
        height: "7%",
        position: "absolute",
        top: "25%",
        backgroundColor: "rgb(240, 240, 240)",
        borderRadius: 10,
    },
    label2: {
        position: "absolute",
        top: "35%",
        width: "80%",
        fontSize: 20,
        textAlign: "left",
        color: "black",
    },
    input2: {
        width: "80%",
        height: "7%",
        position: "absolute",
        top: "40%",
        backgroundColor: "rgb(240, 240, 240)",
        borderRadius: 10,
    },
    label3: {
        position: "absolute",
        top: "50%",
        width: "80%",
        fontSize: 20,
        textAlign: "left",
        color: "black",
    },
    input3: {
        width: "80%",
        height: "7%",
        position: "absolute",
        top: "55%",
        backgroundColor: "rgb(240, 240, 240)",
        borderRadius: 10,
    },
    label4: {
        position: "absolute",
        top: "65%",
        width: "80%",
        fontSize: 20,
        textAlign: "left",
        color: "black",
    },
    input4: {
        width: "80%",
        height: "7%",
        position: "absolute",
        top: "70%",
        backgroundColor: "rgb(240, 240, 240)",
        borderRadius: 10,
    },
    button: {
        width: "80%",
        position: "absolute",
        bottom: "5%",
        backgroundColor: "#E57676",
        borderRadius: 10,
    },
    buttonText: {
        width: "100%",
        textAlign: "center",
        color: "white",
        padding: 10,
        fontSize: 20,
    },
    notice: {
        position: "absolute",
        bottom: "15%",
        color: "rgb(200, 200, 200)",
    }
});

export default SignUp;