import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import data from '../data/properties_data.json';
import { PropertyItem } from './PropertyItem';


export const ListItems = () => {

  const [propertiesData, setPropertiesData] = useState(data);
  // console.log(data);

  return (
    <ScrollView style={styles.container}>
      { propertiesData.map((item) => (
        <PropertyItem property={item} />
      )) }
    </ScrollView>
    // <Text>hola</Text>
  );
};

const styles = StyleSheet.create({
  container: {
    // display: 'flex',
    // flexDirection: 'row',

    // backgroundColor: 'green',
    // marginTop: 20,
    // marginLeft: 30,
    // marginRight: 30
  }
});