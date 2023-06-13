import React, { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import { IconComponent } from './IconComponent';

export const PropertyItem = ({ property }) => {

  const [propData, setPropData] = useState(property);

  return (
    <View style={styles.container}>

      <View style={styles.imageContainer}>
        <ImageBackground 
          source={{ uri: propData.image }}
          style={styles.backgroundImage}
        >
          <View>
            <IconComponent 
              name="star"
              size={25} 
              color="yellow" 
              text={propData.qualification} 
              textColor='black' 
            />
          </View>
        </ImageBackground>
      </View>
      
      <View style={styles.contentContainer}>
        <View>
          <Text>{propData.name}</Text>
        </View>

        <View>
          <IconComponent 
            name="location"
            size={25} 
            color="black" 
            text={propData.address} 
            textColor='black' 
          />
        </View>

        <View style={styles.iconsContainer}>
          <IconComponent 
            name="bed"
            size={25} 
            color="gray" 
            text={propData.numOfRooms} 
            textColor='gray'
          />
          <IconComponent 
            name="bathtub"
            size={25} 
            color="gray" 
            text={propData.numOfBaths} 
            textColor='gray' 
          />
          <IconComponent 
            name="vector-square"
            size={25} 
            color="gray" 
            text={propData.surface} 
            textColor='gray' 
          />
        </View>

        <View>
          <Text>{`$${propData.rentalCost}/día`}</Text>
        </View>
      
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // display: 'flex',
    // flexDirection: 'row',

    // marginBottom: 25,
    // // padding: 20,
    // // alignItems: '',
    // borderRadius: 8,
    
    // justifyContent: 'space-evenly',
    // backgroundColor: 'red'

    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
    
    backgroundColor: 'red'
  },
  imageContainer: {
    flex: 1,
  },
  backgroundImage: {
    // resizeMode: 'cover',
    // width: 150,
    // height: 150,
    // borderRadius: 50,

    flex: 1,
    width: '100%',
    height: '100%',
  },
  contentContainer: {
    // display: 'flex',
    // flexDirection: 'column',
    // justifyContent: 'space-around',
    // backgroundColor: 'blue'

    flex: 2,
    marginLeft: 20, // separar texto de imagen
  },
  iconsContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
});