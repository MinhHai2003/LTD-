import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Hoặc bạn có thể cài thư viện react-native-vector-icons

const ReviewComponent = () => {
  const [rating, setRating] = useState(5); // Mặc định 5 sao

  const handleStarPress = (starValue) => {
    setRating(starValue);
  };

  return (
    <View style={styles.container}>
      
      <View style={styles.productContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: 'https://bizweb.dktcdn.net/thumb/large/100/171/563/products/473219-05b32ea7-4b1e-4ac7-a2aa-431bf2e936ba.jpg?v=1487497188350',
            }}
            style={styles.productImage}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>
            USB Bluetooth Music Receiver HJX-001 - Biến loa thường thành loa bluetooth
          </Text>
        </View>
      </View>

      
      <View style={styles.centeredTextContainer}>
        <Text style={styles.rate}>Cực kỳ hài lòng</Text>
      </View>

      
      <View style={styles.starContainer}>
        {[1, 2, 3, 4, 5].map((starValue) => (
          <TouchableOpacity key={starValue} onPress={() => handleStarPress(starValue)}>
            <FontAwesome
              name={starValue <= rating ? 'star' : 'star-o'}
              size={50}
              color={starValue <= rating ? '#FFD700' : '#C0C0C0'}
              style={styles.star}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  productContainer: {
    flexDirection: 'row',
    marginTop: 70,
    paddingHorizontal: 20,
  },
  imageContainer: {
    flex: 1,
  },
  productImage: {
    height: 100,
    width: 100,
    resizeMode: 'contain',
  },
  textContainer: {
    flex: 3,
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  centeredTextContainer: {
    alignItems: 'center',
    marginTop: 80,
  },
  rate: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  starContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
 star: {
    marginHorizontal: 5, 
  },
});

export default ReviewComponent;
