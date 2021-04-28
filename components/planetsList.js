import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native';
import PlanetCard from './planetCard';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFAFA',
        flex: 1
    },
    button: {
        backgroundColor: '#C0C0C0',
        margin: 20,
        height: 45,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 16
    }
});

const PlanetsList = () => {
    const planetsList = useSelector(state => state.planets);
    const dispatch = useDispatch();
    
    return <View style={styles.container} >
        <TouchableOpacity style ={styles.button} onPress={() => {
            dispatch({
                type: 'LOAD_PLANETS'
            });
        }} >
            <Text style={styles.buttonText} >Carregar planetas</Text>
        </TouchableOpacity>
        <FlatList 
            data={planetsList.data['results']}
            keyExtractor={planet => planet['name']}
            renderItem={(item) => (
                <PlanetCard name={item.item['name']} populacao={item.item['population']} diametro={item.item['diameter']} />
            )}
        />
    </View>
};

export default PlanetsList;