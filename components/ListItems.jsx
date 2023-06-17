import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import data from '../data/properties_data.json';
import { PropertyItem } from './PropertyItem';


export const ListItems = () => {

  const [propertiesData, setPropertiesData] = useState(data);

  return (
    <ScrollView testID='listItems'>

      { propertiesData.map((item) => (
        <PropertyItem key={item.id} property={item} />
      )) }

    </ScrollView>
  );
};