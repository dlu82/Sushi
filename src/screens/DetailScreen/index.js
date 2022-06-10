import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, FlatList, Image, ScrollView, Pressable} from 'react-native';
import styles from './styles';
import AppHeader from '../../components/AppHeader';
import CircleList from '../../components/CircleList';
import constants from '../../constants/constants';
import Images from '../../constants/Images';
import Longcircle from '../../components/LongCircle';

const selectItem = ({item}) => {
  return (
    <View style={styles.rowList}>
      <CircleList
        imageUrl={item.imageUrl}
        isDishname
        dishName={item.title}
        noBackground={true}
      />
    </View>
  );
};

const starIcon = ({item}) => {
  return (
    <View>
      <Image
        style={{height: 10, width: 10, margin: 5, marginTop: 20}}
        source={item.imgUrl}
      />
    </View>
  );
};

const units = ({item}) => {
  return (
    <Longcircle
      units={item.units}
      styleCondition={styles.unitCircle(item.selected)}
      textCondition={styles.CircleText(item.selected)}
    />
  );
};

const index = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <AppHeader  isHeart />
      <ScrollView>
        
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
              marginTop: 30,
          }}>
          <Text style={styles.mainHead}>Sushi Rolls</Text>
          <Text style={styles.subHead}>Salmon Category</Text>

          <FlatList
            horizontal
            data={constants.starIcon}
            renderItem={starIcon}
          />
        </View>
        <FlatList
          style={{alignSelf: 'center'}}
          horizontal
          data={constants.selectItem}
          renderItem={selectItem}
        />

        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Image
            style={{width: 270, height: 200, marginTop: 20}}
            source={Images.sushiSalmon}
          />
          <Text style={styles.quantityText}>Choose the quantity</Text>
        </View>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <FlatList horizontal data={constants.units} renderItem={units} />
        </View>

        <View style={styles.orderPlacing}>
          <View>
            <View style={{flexDirection: 'row', marginTop: 10}}>
              <Text style={{lineHeight: 30}}>$</Text>
              <Text style={styles.unitPrice}>24</Text>
              <Text style={{lineHeight: 25}}>.00</Text>
            </View>
              <Text>Total Price</Text>
          </View>
          <Pressable 
          onPress={ () =>{
            alert('redirecting...')
          }}>
          <View style={styles.oderbuttn}>
            <Text style={styles.orderText}>Place Order</Text>
          </View>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

export default index;
