import {
	FlatList,
	StyleSheet,
	Text,
	TextInput,
	View,
	Button,
	Alert,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { ref, onValue } from 'firebase/database';
import { db } from '../config/config';
import Informacion from '../components/Informacion';

export default function InformacioScreen() {
	const [datos, setdatos] = useState([]);
	const [codigoBuscado, setCodigoBuscado] = useState('');
	const [datosEncontrados, setDatosEncontrados] = useState([]);

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
				setDatosEncontrados(arregloTemp); // Inicializa los datos encontrados con todos los datos
			});
		}
		leer();
	}, []);

	function buscar() {
		const autoEncontrado = datos.filter((item) => item.codigo === codigoBuscado);
		setDatosEncontrados(autoEncontrado);
	}

	function mostrarInfo(item) {
		Alert.alert(
			'Información del Auto',
			`Código: ${item.codigo}\nMarca: ${item.type}\nPrecio: ${item.price}\nCategoría: ${item.category}`,
		);
	}

	return (
		<View style={styles.container}>
			<TextInput
				style={styles.input}
				placeholder='Buscar por Código'
				value={codigoBuscado}
				onChangeText={(texto) => setCodigoBuscado(texto)}
			/>
			<Button title='Buscar' onPress={buscar} />
			<FlatList
				data={datosEncontrados}
				renderItem={({ item }) => (
					<View style={styles.card} onTouchEnd={() => mostrarInfo(item)}>
						<Text style={styles.texto}>Código: {item.codigo}</Text>
						<Text style={styles.texto}>Marca: {item.type}</Text>
						<Text style={styles.texto}>Precio: {item.price}</Text>
						<Text style={styles.texto}>Categoría: {item.category}</Text>
					</View>
				)}
			/>
			{datosEncontrados.length > 0 && <Informacion datos={datosEncontrados[0]} />}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
		backgroundColor: '#f5f5f5',
	},
	input: {
		borderWidth: 1,
		borderColor: '#ccc',
		borderRadius: 8,
		padding: 10,
		marginBottom: 12,
		backgroundColor: '#fff',
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
