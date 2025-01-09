import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { ref, set } from 'firebase/database';
import { db } from '../config/config';

export default function AutosScreen() {
	const [codigo, setcodigo] = useState('');
	const [marca, setmarca] = useState('');
	const [precio, setprecio] = useState(0);
	const [categoria, setcategoria] = useState('');

	function limpiarCampos() {
		setcodigo('');
		setmarca('');
		setprecio(0);
		setcategoria('');
	}

	function guardar() {
		set(ref(db, 'autos/' + codigo), {
			type: marca,
			price: precio,
			category: categoria,
		});

		Alert.alert('Guardado', 'El auto se guardó correctamente');

		limpiarCampos();
	}

	return (
		<View style={styles.container}>
			<Text style={styles.titulo}>Formulario</Text>
			<TextInput
				style={styles.input}
				placeholder='Código'
				value={codigo}
				onChangeText={(texto) => setcodigo(texto)}
			/>
			<TextInput
				style={styles.input}
				placeholder='Marca'
				value={marca}
				onChangeText={(texto) => setmarca(texto)}
			/>
			<TextInput
				style={styles.input}
				placeholder='Ingresar monto'
				keyboardType='numeric'
				value={precio.toString()}
				onChangeText={(texto) => setprecio(+texto)}
			/>
			<TextInput
				style={styles.input}
				placeholder='Categoría'
				value={categoria}
				onChangeText={(texto) => setcategoria(texto)}
			/>
			<Button title='Guardar' onPress={() => guardar()} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
		backgroundColor: '#f5f5f5',
	},
	titulo: {
		fontSize: 20,
		fontWeight: 'bold',
		textAlign: 'center',
		marginBottom: 16,
	},
	input: {
		borderWidth: 1,
		borderColor: '#ccc',
		borderRadius: 8,
		padding: 10,
		marginBottom: 12,
		backgroundColor: '#fff',
	},
	boton: {
		marginTop: 10,
		backgroundColor: '#007BFF',
		borderRadius: 8,
		padding: 10,
	},
	textoBoton: {
		textAlign: 'center',
		color: '#fff',
		fontWeight: 'bold',
	},
});
