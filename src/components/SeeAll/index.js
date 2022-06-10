import React from 'react';
import {View, Text} from 'react-native';
import styles from './style';

const index = ({SeeallTxt, topSushiMargin}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.Category}>{SeeallTxt}</Text>
      <Text style={{...styles.SeeAll,...topSushiMargin}}>See all</Text>
    </View>
  );
};
export default index;
