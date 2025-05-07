import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from "../styles/details_style";

export default function DetailsScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Tela de Detalhes</Text>
            <Text style={styles.subtext}>Teste de navegação entre páginas.</Text>

            <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                <Text style={styles.buttonText}>Voltar para Home</Text>
            </TouchableOpacity>
        </View>
    );
}