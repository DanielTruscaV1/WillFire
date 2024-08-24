import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Welcome = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Image
                source={require('../../assets/images/welcome1.png')}
                style={styles.image1}
            />
            <Text style={styles.header}>
                Unlock your productivity with WillFire!
            </Text>
            <Text style={styles.description}>
                Organizing your daily tasks is now easier with WillFire. Keep track of activities starrting today.
            </Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>
                    Continue
                </Text>
            </TouchableOpacity>
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
    description: {
        position: "absolute",  
        width: "80%",
        left: "10%",
        top: "70%",
        color: "rgb(150, 150, 150)",
        textAlign: "center",
        fontSize: 16
    },
    image1: {
        position: "absolute",
        top: "20%",
        width: "100%",
        height: "50%",
    },
    button: {
        position: "absolute",
        bottom: "5%",
        width: "90%",
        backgroundColor: '#E57676',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
      },
      buttonText: {
        color: 'white',
        fontSize: 20,
        textAlign: "center",
      },
  });

export default Welcome;