import React from 'react';
import { View, Text, StyleSheet, } from 'react-native';

const styles = StyleSheet.create({
    nameText: {
        color: '#000000',
        fontSize: 22,
        fontWeight: 'bold'
    },
    card: {
        backgroundColor: '#DCDCDC',
        height: 100,
        margin: 10,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center'
    },
    dataView: {
        flexDirection: 'row',
        marginTop: 5 
    },
    dataText: {
        fontSize: 20,
        padding: 8,
        color: '#000000'
    }
});

const StarshipCard = (props) => {
    return <View style={styles.card} >
        <Text style={styles.nameText} >{props.name}</Text>
        <View style={styles.dataView} >
            <Text style={styles.dataText} >{`Passageiros: ${props.passageiros}`}</Text>
            <Text style={styles.dataText} >{`Tamanho: ${props.tamanho}`}</Text>
        </View>
    </View>
};

export default StarshipCard;