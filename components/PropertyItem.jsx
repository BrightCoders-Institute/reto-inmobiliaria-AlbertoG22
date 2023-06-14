import React, { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, Pressable } from 'react-native';
import { IconComponent } from './IconComponent';
import { RatingStars } from './RatingStars';
import HeartIcon from 'react-native-vector-icons/FontAwesome';

export const PropertyItem = ({ property }) => {

  const [propData, setPropData] = useState(property);
  const [isLiked, setIsLiked] = useState(false);

  return (
    <View style={styles.container}>

      <View style={styles.imageContainer}>
        <ImageBackground 
          source={{ uri: propData.image }}
          style={styles.backgroundImage}
          borderRadius={10}
        >
          <View style={styles.ratingStarsContainer}>
            <RatingStars data={propData} />
          </View>
        </ImageBackground>
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
            size={20} 
            color="#4A4A4A" 
            text={propData.numOfRooms} 
            extraStyles={{color: 'black', fontWeight: 'bold', fontSize: 14}}
          />
          <IconComponent 
            name="bathtub"
            size={20} 
            color="#4A4A4A" 
            text={propData.numOfBaths} 
            extraStyles={{color: 'black', fontWeight: 'bold', fontSize: 14}} 
          />
          <IconComponent 
            name="vector-square"
            size={20} 
            color="#4A4A4A" 
            text={propData.surface} 
            extraStyles={{color: 'black', fontWeight: 'bold', fontSize: 14}} 
          />
        </View>

        <View style={styles.priceHeartContainer}>
          <Text style={styles.text}>{`$${propData.rentalCost}/día`}</Text>
          <Pressable
            style={styles.likeButton}  
            onPress={() => setIsLiked(!isLiked)}
          >
            <View style={styles.circleHeart}>
              <HeartIcon 
                name="heart"
                size={18}
                color={isLiked ? "red" : "white"}
              />
            </View>
          </Pressable>
        </View>
      
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
    height: 130,
    backgroundColor: '#F0F8FF',
    borderRadius: 10,
  },
  locationSection: {
    justifyContent: 'flex-start'
  },
  imageContainer: {
    flex: 1,
    padding: 10
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },
  contentContainer: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'space-around',
    height: '100%',
    marginLeft: 10, // separar texto de imagen
    fontWeight: 'bold'
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
  },
  priceHeartContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  circleHeart: {
    borderRadius: 50,
    backgroundColor: '#20961E',
    padding: 6,
  }
});