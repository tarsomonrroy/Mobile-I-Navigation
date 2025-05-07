import React from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import styles from "../styles/home_style";

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Tela Inicial</Text>
            <Text style={styles.subtext}>Aplicação Teste de Navegação</Text>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Details')}>
                <Text style={styles.buttonText}>Ver detalhes</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('About')}>
                <Text style={styles.buttonText}>Sobre o Site</Text>
            </TouchableOpacity>
        </View>
    );
}
