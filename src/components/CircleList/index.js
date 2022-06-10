import React from 'react';
import {View, Image, Text} from 'react-native';
import icons from '../../constants/icons';
import styles from './styles';

const index = ({imageUrl, dishName, isDishname, iconStyle, noBackground}) => {
  return (
    <View style={styles.container}>
      
      <View style={styles.IconBackground}>
        <Image source={imageUrl} style={{...styles.menuIcon, ...iconStyle}}/>
      </View>
      {isDishname && <Text>{dishName}</Text>}
    </View>
  );
};
export default index;
