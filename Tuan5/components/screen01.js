import React from 'react';
import { Text, SafeAreaView, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

export default function App({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flex: 1,
          width: '90%',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO0cqz9Rhcz9pwZgvuRxpS0MQRiFdK7HuwJg&s',
          }}
          style={{
            height: 301,
            width: 361,
            resizeMode: 'contain',
            marginTop: 5,
          }}
        />
        <Text style={styles.title}> Điện thoại VSMart Joy3 - Hàng chính hãng  </Text>
        <View style={styles.stars}>
          <Text style={styles.star}>★★★★★</Text>
          <Text style={styles.rating}>(Xem 828 đánh giá)</Text>
        </View>
        <View style={styles.price}>
          <Text style={{fontSize:18,color: 'black',marginRight: 80,fontWeight:'bold'}}>1.790.000 đ </Text>
          <Text style={{fontSize:18,color: 'gray',marginRight: 10,fontWeight:'bold',textDecorationLine:'line-through'}}>1.790.000 đ </Text>
        </View>
        <View style={styles.priceGuaranteeContainer}>
          <Text style={styles.priceGuaranteeText}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
          <Icon name="question-circle" size={20} color="#000" style={{ marginLeft: 5 }} />
        </View>
        <TouchableOpacity 
          style={styles.optionButton} 
          onPress={() => navigation.navigate('screen2')} // Điều hướng sang Screen 2
        >
          <Text style={styles.optionButtonText}>4 MÀU - CHỌN MÀU</Text>
          <Icon name="chevron-right" size={14} color="#000" style={{ marginLeft: 5 }} />
        </TouchableOpacity>
        {/* Nút Chọn Mua */}
        <TouchableOpacity style={styles.buyButton}>
          <Text style={styles.buyButtonText}>CHỌN MUA</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 8,
  },
  title: {
    margin: 24,
    fontSize: 18,
    textAlign: 'center',
  },
  stars: {
    flexDirection: 'row',
    justifyContent: 'center', 
    alignItems: 'center', 
    marginTop: 10,
  },
  star: {
    fontSize: 30,
    color: 'gold',
    marginRight: 10, 
  },
  rating: {
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 10, 
  },
  price:{
    flexDirection: 'row',
    justifyContent: 'center', 
    alignItems: 'center', 
    marginTop: 10,
  },
  priceGuaranteeContainer: {
    paddingVertical: 5, 
    paddingHorizontal: 10,
    marginVertical: 10, 
    alignItems: 'center', 
    flexDirection: 'row',
    marginRight:120, 
  },
  priceGuaranteeText: {
    color: 'red',
    fontWeight: 'bold', 
    fontSize: 12, 
  },
  optionButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 80,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 4,
    marginVertical: 8,
  },
  optionButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  buyButton: {
    backgroundColor: '#FF3D00',
    paddingVertical: 10,
    paddingHorizontal: 100,
    borderRadius: 4,
    alignItems: 'center',
    marginTop:20,
    marginVertical: 8,
  },
  buyButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
