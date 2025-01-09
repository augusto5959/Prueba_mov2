import { Button, ImageBackground, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function WelcomeScreen({ navigation }: any) {
	return (
		<ImageBackground
        style={styles.container}
        source={{uri:'https://img.freepik.com/vector-gratis/conjunto-conjunto-vista-lateral-automoviles-automaticos-o-automoviles-pasajeros-vista-lateral-frontal-posterior-superior-sobre-fondo-blanco-ilustracion-plana_1150-39641.jpg?t=st=1736380376~exp=1736383976~hmac=a4690cb684a7a72b5a1021a56c2fd6a3c2dee719d9a7381e1562e288194dd7b8&w=360'}}>
			<Text style={styles.titulo}>Augusto Viteri</Text>
			<Button title='Ingresar' onPress={() => navigation.navigate('Top')} />
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        gap:'90%',
        resizeMode:'contain'
    },
    titulo:{
        fontSize:30,
        textAlign:'center',
        fontWeight:'bold',
    }
});
