import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function Tarjeta(props: any) {
	console.log(props);
	return (
		<View style={styles.card}>
			<Image source={{ uri: props.datos.info.imagen }} style={styles.imagen} />
			<View style={styles.texto}>
				<Text style={styles.titulo}>{props.datos.titulo}</Text>
				<Text style={styles.anio}>Año: {props.datos.anio}</Text>
				<Text style={styles.descripcion}>{props.datos.descripcion}</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	card: {
		backgroundColor: '#fff',
		borderRadius: 10,
		shadowColor: '#000',
		shadowRadius: 4,
		elevation: 3,
		marginVertical: 10,
		marginHorizontal: 16,
		overflow: 'hidden',
        
	},
	imagen: {
		width: '100%',
		height: 180,
        resizeMode:'contain'
	},
	texto: {
		padding: 16,
	},
	titulo: {
		fontSize: 18,
		fontWeight: 'bold',
		color: '#333',
	},
	anio: {
		fontSize: 14,
		color: '#666',
		marginVertical: 4,
	},
	descripcion: {
		fontSize: 14,
		color: '#555',
	},
});
