import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { ref, onValue } from 'firebase/database';
import { db } from '../config/config';

export default function InformacioScreen() {
	const [datos, setdatos] = useState([]);

	useEffect(() => {
		function leer() {
			const starCountRef = ref(db, 'autos/');
			onValue(starCountRef, (snapshot) => {
				const data = snapshot.val();

				const arregloTemp = Object.keys(data).map((codigo) => ({
					codigo,
					...data[codigo],
				}));

				setdatos(arregloTemp);
			});
		}
		leer();
	}, []);


	type Auto={
		codigo: string;
		type: string;
		price: number;
		category: string;
	}

	return (
		<View style={styles.container}>
			<FlatList
				data={datos}
				renderItem={({ item }:{item:any}) => (
					<View style={styles.card}>
						<Text style={styles.texto}>Código: {item.codigo}</Text>
						<Text style={styles.texto}>Marca: {item.type}</Text>
						<Text style={styles.texto}>Precio: {item.price}</Text>
						<Text style={styles.texto}>Categoría: {item.category}</Text>
					</View>
				)}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
		backgroundColor: '#f5f5f5',
	},
	card: {
		backgroundColor: '#fff',
		borderRadius: 8,
		padding: 16,
		marginBottom: 12,
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
