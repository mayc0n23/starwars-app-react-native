import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import PeoplesList from './components/peoplesList';
import PlanetsList from './components/planetsList';
import StarshipsList from './components/starshipsList';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <Provider store={store} >
            <NavigationContainer>
                <Tab.Navigator tabBarOptions={
                    {
                        activeTintColor: '#DAA520',
		                inactiveTintColor: '#777',
                        labelPosition: "beside-icon",
                    }
                } >
                    <Tab.Screen name="Personagens" component={PeoplesList} />
                    <Tab.Screen name="Planetas" component={PlanetsList} />
                    <Tab.Screen name="Naves" component={StarshipsList} />
                </Tab.Navigator>
            </NavigationContainer>
        </Provider>
    );
}
