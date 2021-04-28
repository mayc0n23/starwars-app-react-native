import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native';
import StarshipCard from './starshipCard';

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

const StarshipsList = () => {
    const starshipsList = useSelector(state => state.starships);
    const dispatch = useDispatch();
    
    return <View style={styles.container} >
        <TouchableOpacity style ={styles.button} onPress={() => {
            dispatch({
                type: 'LOAD_STARSHIPS'
            });
        }} >
            <Text style={styles.buttonText} >Carregar naves</Text>
        </TouchableOpacity>
        <FlatList 
            data={starshipsList.data['results']}
            keyExtractor={starship => starship['name']}
            renderItem={(item) => (
                <StarshipCard name={item.item['name']} passageiros={item.item['passengers']} tamanho={item.item['length']} />
            )}
        />
    </View>
};

export default StarshipsList;