import React from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from 'expo-router';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const SignUp = () => {
    const router = useRouter();

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.innerContainer}
            >
                <Text style={styles.header}>Create Your Account</Text>
                
                <View style={styles.inputGroup}>
                    <Icon name="account" size={20} color="gray" style={styles.icon} />
                    <TextInput style={styles.input} placeholder="Name" />
                </View>
                
                <View style={styles.inputGroup}>
                    <Icon name="email" size={20} color="gray" style={styles.icon} />
                    <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />
                </View>
                
                <View style={styles.inputGroup}>
                    <Icon name="lock" size={20} color="gray" style={styles.icon} />
                    <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} />
                </View>
                
                <View style={styles.inputGroup}>
                    <Icon name="lock" size={20} color="gray" style={styles.icon} />
                    <TextInput style={styles.input} placeholder="Confirm Password" secureTextEntry={true} />
                </View>
                
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Sign-Up </Text>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => router.push('/sign-in' as never)} style={styles.noticeLink}>
                    <Text style={styles.notice}>
                        Already have an account? {"\n"}Sign-In instead.
                    </Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: "white",
    },
    innerContainer: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    header: {
        fontSize: 25,
        textAlign: "center",
        marginBottom: 20,
    },
    inputGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 30,
        backgroundColor: "rgb(240, 240, 240)",
        borderRadius: 10,
        paddingHorizontal: 10,
    },
    icon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        height: 60,
        color: "black",
    },
    button: {
        backgroundColor: "#E57676",
        borderRadius: 10,
        paddingVertical: 10,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: "white",
        fontSize: 20,
    },
    noticeLink: {
        marginTop: 20,
    },
    notice: {
        color: "#E57676",
        textAlign: 'center',
    },
});

export default SignUp;
