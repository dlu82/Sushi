import React from "react";

import{View, Text, Image, TextInput, StyleSheet} from 'react-native'
import icons from "../../constants/icons";
import styles from "./style";

const index = () => {
return(
    <View style={styles.search}>
          <Image
            style={styles.searchImg}
            source={icons.search}
          />
          <TextInput placeholder="Search your sushi" style={{flex: 1,fontSize: 16}} />
        </View>
)
};
export default index;