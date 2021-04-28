import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native';
import PeopleCard from './peopleCard';

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

const PeoplesList = () => {
    const peoplesList = useSelector(state => state.peoples);
    const dispatch = useDispatch();
    
    return <View style={styles.container} >
        <TouchableOpacity style ={styles.button} onPress={() => {
            dispatch({
                type: 'LOAD_PEOPLES'
            });
        }} >
            <Text style={styles.buttonText} >Carregar personagens</Text>
        </TouchableOpacity>
        <FlatList 
            data={peoplesList.data['results']}
            keyExtractor={people => people['name']}
            renderItem={(item) => (
                <PeopleCard name={item.item['name']} altura={item.item['height']} sexo={item.item['gender']} />
            )}
        />
    </View>
};

export default PeoplesList;