import React from "react";
import { View, Text, StyleSheet, Button, Image, Dimensions } from "react-native";
import Card from "../components/card";
import { colors } from "../constants/colors";

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 300,
        height: 300,
    },
    resultContainer: {
        width: width * 0.8,
        paddingVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textResult: {
        fontSize: 16,
        color: colors.text,
        textAlign: 'center',
        paddingVertical: 5,
    },
    textAgain: {
        fontFamily: 'Lato-Bold',
        fontSize: 24,
        color: colors.text,
        textAlign: 'center',
        paddingVertical: 20,
    },
})

const GameOverScreen = ({ roundsNumber, userNumber, onRestart }) => {
    return (
        <View style={styles.container}>
            <Card style={styles.resultContainer}>
                <Image source={{ uri: 'https://img.freepik.com/vector-gratis/juego-terminado-efecto-falla_225004-661.jpg?w=2000' }} style={styles.image} />
                <Text style={styles.textResult}>Intentos: {roundsNumber}</Text>
                <Text>El numero era: {userNumber}</Text>
                <Text style={styles.textAgain}>Juguemos de nuevo!</Text>
                <Button style={styles.button}
                    title="Reiniciar"
                    onPress={onRestart}
                    color={colors.primary}
                />
                
            </Card>
        </View>
    )
}

export default GameOverScreen;