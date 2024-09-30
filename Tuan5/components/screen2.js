import React, { useState } from 'react';
import { Text, SafeAreaView, StyleSheet, View, Image, TouchableOpacity, FlatList } from 'react-native';

export default function App({ navigation }) {  // Thêm navigation vào props
  const [selectedColor, setSelectedColor] = useState(null);

  // Danh sách màu
  const colors = [
    { id: 1, color: '#A7E0EB' }, // Light blue
    { id: 2, color: '#FF0000' }, // Red
    { id: 3, color: '#000000' }, // Black
    { id: 4, color: '#0045A7' }, // Blue
  ];

  // Xử lý chọn màu
  const selectColor = (color) => {
    setSelectedColor(color);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.productContainer}>
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO0cqz9Rhcz9pwZgvuRxpS0MQRiFdK7HuwJg&s',
          }}
          style={styles.productImage}
        />
        <Text style={styles.productTitle}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
      </View>

    
      <Text style={styles.chooseColorText}>Chọn một màu bên dưới:</Text>
      <FlatList
        data={colors}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.colorBox,
              { backgroundColor: item.color },
              selectedColor === item.color && styles.selectedColorBox,
            ]}
            onPress={() => selectColor(item.color)}
          />
        )}
        style={styles.colorList}
      />

      {/* Nút "XONG" */}
      <TouchableOpacity
        style={styles.doneButton}
        onPress={() => navigation.navigate('screen3')}  // Điều hướng sang Screen 3
      >
        <Text style={styles.doneButtonText}>XONG</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#BEBEBE',
  },
  productContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    width: '100%',
  },
  productImage: {
    width: 112,
    height: 132,
    resizeMode: 'contain',
    marginRight: 10,
  },
  productTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    flex: 1,
  },
  chooseColorText: {
    marginVertical: 10,
    fontSize: 16,
    fontWeight: 'bold',
    marginRight:130,
  },
  colorBox: {
    width: 80,
    height: 75,
    marginVertical: 5,
  },
  selectedColorBox: {
    borderWidth: 3,
    borderColor: '#0000FF',
  },
  doneButton: {
    backgroundColor: '#0045A7',
    paddingVertical: 10,
    paddingHorizontal: 120,
    borderRadius: 4,
    alignItems: 'center',
    marginBottom:50,
    marginVertical: 8,
  },
  doneButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
