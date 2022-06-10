import React from "react";
import {View, Image, StyleSheet, Text} from 'react-native'
import styles from './style'
import Images from '../../constants/Images'


const index = ({units, styleCondition, textCondition}) => {
    return(
        // <View style={styles.container}>
      
      <View style={{...styles.IconBackground,...styleCondition}}>
        <Text style= {{...styles.unitText,...textCondition}}>{units}</Text>
      </View>
    // </View>
    )
}
export default index;