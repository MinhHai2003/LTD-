import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native'; // Import Image từ react-native
import axios from 'axios';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [search, setSearch] = useState('');

  // Fetch data from API
  useEffect(() => {
    axios.get('https://6454c230f803f3457630747c.mockapi.io/api/sach')
      .then(response => {
        setTodos(response.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  // Render mỗi item trong danh sách
  const renderTodoItem = ({ item }) => (
    <View style={styles.todoItem}>
      <View style={styles.checkboxContainer}>
        <Text style={styles.tick}>✓</Text>  {/* Dấu tick nằm trong ô vuông */}
      </View>
      <Text style={styles.todoText}>{item.todo}</Text> 
      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.editText}>✏️</Text>
      </TouchableOpacity>
    </View> 
  );

  return (
    <View style={styles.container}>
      {/* Phần tiêu đề với avatar */}
      <View style={styles.headerContainer}>
        <TouchableOpacity>
          <Text>{'<--'}</Text> {/* Thay thế bằng icon hoặc nút quay lại */}
        </TouchableOpacity>
        <Image
          source={{ uri: 'https://i.pravatar.cc/100' }} // Đây là cách sử dụng đúng của Image
          style={styles.avatar}
        />
        <View>
          <Text style={styles.header}>Hi Twinkle</Text>
          <Text style={styles.subHeader}>Have a great day ahead</Text>
        </View>
      </View>

      {/* Thanh tìm kiếm */}
      <TextInput
        style={styles.searchBar}
        placeholder="Search"
        value={search}
        onChangeText={text => setSearch(text)}
      />

      <FlatList
        data={todos.filter(item => item.todo && item.todo.toLowerCase().includes(search.toLowerCase()))}
        renderItem={renderTodoItem}
        keyExtractor={item => item.id}
      />

      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

// Styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginLeft: 10,
    marginRight: 15,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subHeader: {
    fontSize: 16,
    color: '#888',
  },
  searchBar: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
  },
  todoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
  },
  checkboxContainer: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: '#000', // Viền của ô vuông
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  tick: {
    fontSize: 16,
    color: '#00aaff', // Màu của dấu tick
  },
  todoText: {
    flex: 1,
    fontSize: 16,
  },
  editButton: {
    padding: 5,
  },
  editText: {
    fontSize: 18,
    color: '#f39c12',
  },
  addButton: {
    position: 'absolute',
    bottom: 30,
    left: '50%',
    marginLeft: -30, // Đảm bảo nút được căn giữa theo chiều ngang
    backgroundColor: '#00aaff',
    borderRadius: 50,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addText: {
    fontSize: 32,
    color: '#fff',
  },
});

export default TodoApp;
