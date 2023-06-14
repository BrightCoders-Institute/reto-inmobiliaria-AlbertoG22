import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LocIcon from 'react-native-vector-icons/Ionicons';
import SurfaceIcon from 'react-native-vector-icons/FontAwesome5';


export const IconComponent = ({ text, name, color, size, extraStyles }) => {

  const chooseIcon = (name) => {
      
    if(name === 'location-outline') return <LocIcon name={name} size={size} color={color} />;
    if(name === 'vector-square') return <SurfaceIcon name={name} size={size} color={color} />;

    return <Icon name={name} size={size} color={color} />
  };

  return (
    <View style={styles.container}>
      { chooseIcon(name) }
      <Text style={[{paddingLeft: 8}, extraStyles]}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  }
});