import {
  Text,
  View,
  StyleSheet,
  Image,
  Pressable,
  TextInput,
} from 'react-native';
import { useState } from 'react';
import { Feather, MaterialIcons } from '@expo/vector-icons';

export default function AssetExample() {
  const discountPrice = 141800;
  const [quantity, setQuantity] = useState(1); // Khởi tạo 1 sách
  const [discountCode, setDiscountCode] = useState("");
  const [amount, setAmount] = useState(0);
  const [amountFinal, setAmountFinal] = useState(0);

  function formatCurrency(value) {
    return value.toLocaleString('vi-VN', {
      style: 'currency',
      currency: 'VND',
    });
  }

  function applyDiscount() {
    // Random mã giảm giá từ 3 mã khác nhau
    const codes = ["DISCOUNT10", "SALE20", "OFFER30", "MUASAM10"];
    const randomCode = codes[Math.floor(Math.random() * codes.length)];
    setDiscountCode(randomCode);
  }

  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          width: '90%',
          flexDirection: 'row',
        }}>
        <View
          style={{
            flex: 2,
          }}>
          <Image
            source={{
              uri: 'https://salt.tikicdn.com/cache/750x750/ts/product/b9/82/8a/467b81a449a9b28f252bb97865fd1bfc.jpg.webp',
            }}
            style={{
              height: '100%',
              resizeMode: 'contain',
            }}></Image>
        </View>
        <View
          style={{
            flex: 3,
          }}>
          <Text style={styles.title}>
            Nguyên hàm tích phân và ứng dụng
          </Text>
          <Text style={styles.supplier}>Cung cấp bởi Tiki Trading</Text>
          <Text style={styles.discountPrice}>141.800 VND</Text>

          <Text style={styles.price}>141.800 VND</Text>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginRight: 10,
              alignItems: 'center',
            }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Pressable
                style={styles.btnPrev}
                onPress={() => {
                  if (quantity > 1) setQuantity(quantity - 1); // Đảm bảo số lượng không < 1
                }}>
                <Feather name="minus" size={18} color="#0a5eb7" />
              </Pressable>
              <TextInput
                value={String(quantity)} // Chuyển đổi số lượng sang chuỗi để hiển thị
                style={{
                  width: 50,
                  borderWidth: 1,
                  borderColor: '#c4c4c4',
                  textAlign: 'center',
                }}
                editable={false } // Không cho phép người dùng chỉnh sửa trực tiếp
              />
              <Pressable
                style={styles.btnNext}
                onPress={() => {
                  setQuantity(quantity + 1);
                }}>
                <Feather name="plus" size={18} color="#0a5eb7" />
              </Pressable>
            </View>

            <View>
              <Pressable
                style={{
                  paddingHorizontal: 10,
                  paddingVertical: 2,
                }}
                onPress={() => {
                  setQuantity(quantity + 1);
                }}>
                <Text style={{ color: '#0a5eb7', fontWeight: 600 }}>
                  Mua sau
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          height: '15%',
          width: '90%',
        }}>
        <View
          style={{
            marginTop: '5%',
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
          }}>
          <View style={{ flex: 2 }}>
            <Text
              style={{
                fontSize: 10,
                fontWeight: 'bold ',
              }}>
              Mã giảm giá đã lưu
            </Text>
          </View>
          <View style={{ flex: 3 }}>
            <Text
              style={{
                fontSize: 10,
                fontWeight: 'bold',
                color: '#0a5eb7',
              }}>
              Xem tại đây
            </Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            width: '100%',
          }}>
          <View
            style={{
              flex: 3,
              flexDirection: 'row',
              alignItems: 'center',
              borderWidth: 1,
              borderColor: '#ccc',
            }}>
            <View
              style={{
                height: '30%',
                width: '20%',
                backgroundColor: '#f2dd1b',
                marginHorizontal: '5%',
              }}></View>
            <Text
              style={{
                fontSize: 15,
                fontWeight: 'bold',
              }}>
              Mã giảm giá
            </Text>
            
          </View>
          <View
            style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
            <Pressable
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#0a5eb7',
                height: '100%',
                width: '70%',
                borderRadius: 5,
              }}
              onPress={applyDiscount}
            >
              <Text
                style={{
                  fontWeight: 700,
                  color: '#fff',
                  fontSize: 15,
                }}>
                Áp dụng
              </Text>
            </Pressable>
          </View>
        </View>
        {discountCode ? (
          <Text style={{ marginTop: 10, fontSize: 16, fontWeight: 'bold' }}>
            Mã đã áp dụng: {discountCode}
          </Text>
        ) : null}
      </View>
      <View
        style={{
          width: '100%',
          borderColor: '#ccc',
          borderBottomWidth: 10,
          borderTopWidth: 10,
          marginTop: 20,
          paddingTop: '2%',
          paddingBottom: '4%',
          paddingHorizontal: '5%',
          display: 'flex',
          flexDirection: 'row',
        }}>
        <Text
          style={{
            fontSize: 10,
            fontWeight: 'bold',
          }}>
          Bạn có phiếu tặng quà Tiki/Got it/Urbox?
        </Text>
        <Pressable>
          <Text
            style={{
              fontSize: 10,
              fontWeight: 'bold',
              marginLeft: 4,
              color: '#0a5eb7',
            }}>
            Nhập tại đây?
          </Text>
        </Pressable>
      </View>
      <View
        style={{
          width: '100%',
          borderColor: '#ccc',
          borderBottomWidth: 100,
          paddingTop: '2%',
          paddingBottom: '4%',
          paddingHorizontal: '5%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
          }}>
          Tạm tính
        </Text>
        <Pressable>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              marginLeft: 4,
              color: '#e53935',
            }}>
            {formatCurrency(quantity * discountPrice)}
          </Text>
        </Pressable>
      </View>

      <View
        style={{
          flex: 1,
          width: '90%',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flex: 1,
          }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              marginLeft: 4,
              color: '#c4c4c4',
            }}>
            Thành tiền
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              marginLeft: 4,
              color: '#e53935',
            }}>
            {formatCurrency(quantity * discountPrice)}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            flex: 2,
            width: '100%',
          }}>
          <Pressable
            style={{
              backgroundColor: '#e53935',
              paddingHorizontal: 10,
              paddingVertical: 8,
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 4,
            }}>
            <Text style={{ fontSize: 20, color: 'white', fontWeight: 500 }}>
              TIẾN HÀNH ĐẶT HÀNG
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },

  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 50,
  },

  discountPrice: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 20,
  },

  price: {
    textDecorationLine: 'line-through',
  },
  supplier: {
    fontSize: 12,
    color: '#007BFF',
    marginBottom: 5,
  },
  btnPrev: {
    backgroundColor: '#c4c4c4',
    marginRight: 5,
    width: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnNext: {
    backgroundColor: '#c4c4c4',
    marginLeft: 5,
    width: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
