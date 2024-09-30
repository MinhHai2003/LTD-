import React, { useState } from 'react';
import { Text, SafeAreaView, StyleSheet, View, Image, TouchableOpacity, FlatList } from 'react-native';

export default function App() {
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
      {/* Thông tin sản phẩm */}
      <View style={styles.productContainer}>
        <Image
         source={require('../assets/red.png')}
          style={styles.productImage}
        />
        <View style={styles.productInfo}>
          <Text style={styles.productTitle}>Điện Thoại Vsmart Joy 3</Text>
          <Text style={styles.productSubtitle}>Hàng chính hãng</Text>
          <Text style={styles.productDetail}>Màu: <Text style={{fontWeight:'bold', color:'black'}}>đỏ</Text></Text>
          <Text style={styles.productDetail}>Cung cấp bởi  <Text style={{fontWeight:'bold', color:'black'}}>Tiki Tradding</Text></Text>
          <Text style={styles.productPrice}>1.790.000 đ</Text>
        </View>
      </View>

      {/* Chọn màu */}
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
        numColumns={1}  // Hiển thị mỗi dòng chỉ có một màu
        style={styles.colorList}
      />

      {/* Nút "XONG" */}
      <TouchableOpacity style={styles.doneButton}>
      
        <Text style={styles.doneButtonText}>XONG</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#BEBEBE',
  },
  productContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 16,
    width: '100%',
  },
  productImage: {
    width: 114 ,
    height: 128,
    resizeMode: 'contain',
    marginRight: 10,
  },
  productInfo: {
    flex: 1,
    flexDirection: 'column',
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productSubtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  productDetail: {
    fontSize: 12,
    color: '#666',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 10,
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
