import React from 'react';
import {View, Image, Text, Pressable} from 'react-native';
import icons from '../../constants/icons';
import styles from './styles';
import CircleList from '../CircleList';
import { useNavigation } from '@react-navigation/native';


const index = ({isBack, isHeart}) => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      {isBack ? (
        <CircleList
          imageUrl={icons.menu}
          dishName={'Salmon'}
          iconStyle={{transform: [{rotate: '180deg'}]}}
        />
      ) : ( 
        <Pressable onPress={() => {
          navigation.goBack();
        }}>
          <CircleList
        imageUrl={icons.back}
        dishName={'Salmon'}
        
      />
        </Pressable>
      )}
      {isHeart && (
          <CircleList
          imageUrl={icons.heart}
          dishName={'Salmon'}
          
        />
      )}
       
      </View>
    </View>
  );
};
export default index;
