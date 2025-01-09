import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function Informacion({ datos }: { datos: any }) {
	return (
		<View style={styles.container}>
			<Text style={styles.texto}>Código: {datos.codigo}</Text>
			<Text style={styles.texto}>Marca: {datos.type}</Text>
			<Text style={styles.texto}>Precio: {datos.price}</Text>
			<Text style={styles.texto}>Categoría: {datos.category}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		padding: 16,
		borderRadius: 8,
		marginTop: 16,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		shadowRadius: 4,
		elevation: 2,
	},
	texto: {
		fontSize: 14,
		color: '#333',
		marginBottom: 4,
	},
});
