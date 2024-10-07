import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Import icon từ thư viện Expo

const ManageScreen = () => {
  return (
    <View style={styles.container}>
      {/* Phần hình ảnh */}
      <Image 
        source={{ uri: 'https://picsum.photos/200/300' }} 
        style={styles.image} 
      />

      {/* Phần tiêu đề */}
      <Text style={styles.title}>MANAGE YOUR TASK</Text>

      {/* Phần nhập tên với icon */}
      <View style={styles.inputContainer}>
        <MaterialIcons name="person" size={24} color="#999" style={styles.icon} /> {/* Icon trước TextInput */}
        <TextInput 
          style={styles.input} 
          placeholder="Enter your name"
          placeholderTextColor="#999"
        />
      </View>

      {/* Nút bắt đầu */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>GET STARTED →</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  image: {
    width: 150, 
    height: 150, 
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6A0DAD', // Màu tím
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    width: '80%',
    height: 40,
    marginBottom: 20,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: '100%',
  },
  button: {
    width: '80%',
    backgroundColor: '#00ADEF', // Màu xanh của nút
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ManageTaskScreen;
