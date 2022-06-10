import React from 'react';
import {View, Image, Text, Pressable} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const index = ({
  menu,
  sushiImage,
  description,
  cardColor,
  sushiName,
  sushiDesc,
  moneyStyle,
  price,
  Dllr
}) => {
  const navigation = useNavigation();
  return (
    <View style={{...styles.Sushi, ...cardColor}}>
      <Image source={sushiImage} />
      <View style={styles.descStyle}>
      <Text style={{...styles.name, ...sushiName}}>{menu}</Text>

      <Text style={{...styles.des, ...sushiDesc}}>{description}</Text>

      <View style={{flexDirection: 'row', marginTop: 20}}>
        <Text style={{...{lineHeight: 25},...Dllr}}>$</Text>
        <Text
          style={{
            ...{fontSize: 20, color: 'white', fontWeight: 'bold', lineHeight: 30},
            ...moneyStyle,
          }}>
          {price}
        </Text>
        <Text style={{...{lineHeight: 25},...Dllr}}>.50</Text>
        <Pressable
          style={styles.Button}
          onPress={() => {
            navigation.navigate('DetailScreen');
          }}>
          <Text style={styles.text}>Order</Text>
        </Pressable>
      </View>
    </View>
    </View>
  );
};
export default index;
