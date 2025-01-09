import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Tarjeta from '../components/Tarjeta';

export default function ApiScreen() {
	const [datos, setdatos] = useState([]);

	useEffect(() => {
		async function leer() {
			const resp = await fetch('https://jritsqmet.github.io/web-api/series.json');
			const json = await resp.json();
			setdatos(json.series);
		}
		leer();
		//console.log(datos.series);
	}, []);

	return (
		<View>
			<FlatList 
			data={datos} 
			renderItem={({ item }) => 
			<Tarjeta datos={item}/>
		} 
		/>
		</View>
	);
}

const styles = StyleSheet.create({});
