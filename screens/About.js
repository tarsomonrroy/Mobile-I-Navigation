import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from "../styles/about_style";

export default function AboutScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Sobre o site</Text>
            <Text style={styles.subtext}>Desenvolvido por Tarso Valencia</Text>
            <Text style={styles.subtext}>FATEC Zona Leste, 2025</Text>

            <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                <Text style={styles.buttonText}>Voltar para Home</Text>
            </TouchableOpacity>
        </View>
    );
}