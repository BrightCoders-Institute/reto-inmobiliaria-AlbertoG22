import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { IconComponent } from './IconComponent';

export const RatingStars = ({ data }) => {
  return (
    <View style={styles.container}>
        <IconComponent 
            name="star"
            size={12} 
            color="#FFB730" 
            text={data.qualification} 
            extraStyles={{color: '#876019', fontWeight: 'bold', fontSize: 12}}
        />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 15,
        backgroundColor: '#FFCFAC',
        width: '50%',
        height: '25%',
        alignItems: 'center',
        justifyContent: 'center',
    }
});