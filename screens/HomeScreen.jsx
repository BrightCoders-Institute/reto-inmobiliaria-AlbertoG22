import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ListItems } from '../components/ListItems';

export const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <ListItems />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        marginBottom: 20,
        marginLeft: 15,
        marginRight: 15
    }
});