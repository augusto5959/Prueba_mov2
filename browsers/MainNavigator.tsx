import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import WelcomeScreen from '../screens/WelcomeScreen';
import AutosScreen from '../screens/AutosScreen';
import InformacioScreen from '../screens/InformacioScreen';
import ApiScreen from '../screens/ApiScreen';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();
function MyStack() {
	return (
		<Stack.Navigator>
			<Stack.Screen name='Welcome' component={WelcomeScreen} />
            <Stack.Screen name='Top' component={MyTops} />
		</Stack.Navigator>
	);
}


const Tab = createMaterialTopTabNavigator();
function MyTops() {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Autos' component={AutosScreen} />
            <Tab.Screen name='Información' component={InformacioScreen} />
            <Tab.Screen name='Api' component={ApiScreen} />
        </Tab.Navigator>
    );
}

export default function MainNavigator(){
    return(
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    );
}