import React, { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import { IconComponent } from './IconComponent';
import { RatingStars } from './RatingStars';

export const PropertyItem = ({ property }) => {

  const [propData, setPropData] = useState(property);

  return (
    <View style={styles.container}>

      <View style={styles.imageContainer}>
        {/* <View style={{}}> */}
          <ImageBackground 
            source={{ uri: propData.image }}
            style={styles.backgroundImage}
          >
            <View style={styles.ratingStarsContainer}>
              {/* <IconComponent 
                name="star"
                size={25} 
                color="yellow" 
                text={propData.qualification} 
                textColor='black' 
              /> */}
              <RatingStars data={propData} />
            </View>
          </ImageBackground>
        {/* </View> */}
      </View>
      
      <View style={styles.contentContainer}>
        <View>
          <Text style={styles.text}>{propData.name}</Text>
        </View>

        <View style={styles.locationSection}>
          <IconComponent
            style={[styles.algo]}
            name="location-outline"
            size={20} 
            color="black" 
            text={propData.address} 
            extraStyles={{color: 'black', fontSize: 12}}
          />
        </View>

        <View style={styles.iconsContainer}>
          <IconComponent 
            name="bed"
            size={25} 
            color="gray" 
            text={propData.numOfRooms} 
            extraStyles={{color: 'black', fontWeight: 'bold', fontSize: 14}}
          />
          <IconComponent 
            name="bathtub"
            size={25} 
            color="gray" 
            text={propData.numOfBaths} 
            extraStyles={{color: 'black', fontWeight: 'bold', fontSize: 14}} 
          />
          <IconComponent 
            name="vector-square"
            size={25} 
            color="gray" 
            text={propData.surface} 
            extraStyles={{color: 'black', fontWeight: 'bold', fontSize: 14}} 
          />
        </View>

        <View>
          <Text style={styles.text}>{`$${propData.rentalCost}/día`}</Text>
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
    height: 130,
    backgroundColor: '#F0F8FF',
    // backgroundColor: '#052F59',
    borderRadius: 10,
  },
  locationSection: {
    justifyContent: 'flex-start'
  },
  imageContainer: {
    flex: 1,
    // flexDirection: 'column',
    // alignContent: 'space-between',
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: 'red',
    padding: 10
  },
  backgroundImage: {
    // resizeMode: 'cover',
    // width: 150,
    // height: 150,
    // borderRadius: 50,

    flex: 1,
    // width: 120,
    width: '100%',
    height: '100%',
  },
  contentContainer: {
    // display: 'flex',
    // flexDirection: 'column',
    // justifyContent: 'space-around',
    // backgroundColor: 'blue'

    flex: 2,
    flexDirection: 'column',
    justifyContent: 'space-around',
    height: '100%',
    marginLeft: 10, // separar texto de imagen
    fontWeight: 'bold'

    // alignContent: 'space-between',
    // backgroundColor: 'green',
  },
  iconsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black'
  },
  ratingStarsContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 8,
    // alignContent: 'center',
    // backgroundColor: 'red'
  }
});