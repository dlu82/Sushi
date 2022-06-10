import React from 'react';
import {View, Text, FlatList, ScrollView, Image} from 'react-native';
import styles from './styles';
import constants from '../../constants/constants';
import AppHeader from '../../components/AppHeader';
import Search from '../../components/Search';
import Catagory from '../../components/SeeAll';
import CircleList from '../../components/CircleList';
import DishList from '../../components/DishList';

const index = () => {
  const renderItems = ({item}) => {
    return (
      <View style={styles.Flavours}>
        <CircleList imageUrl={item.imageUrl} isDishname dishName={item.title} />
      </View>
    );
  };

  const dishList = ({item, index}) => {
    return (
      <View>
        <DishList
          cardColor={{backgroundColor: index % 2 === 0 ? '#1e283c' : 'white'}}
          sushiName={{color: index % 2 === 0 ? 'white' : '#1e283c'}}
          sushiDesc={{color: index % 2 === 0 ? '#c2c2c2' : '#1e283c'}}
          moneyStyle={{color: index % 2 === 0 ? 'white' : '#1e283c'}}
          Dllr={{color: index % 2 === 0 ? 'white' : '#1e283c'}}
          sushiImage={item.imageUrl}
          menu={item.title}
          description={item.description}
          price={item.money}
        />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      
      <ScrollView showsVerticalScrollIndicator={false}>
      <AppHeader  isBack={true}/>
        <View style={{paddingHorizontal: 16}}>
          <Text style={styles.greetings}>👋Hi, Angel!</Text>
          <Text style={styles.mainHead}>
            What is your {'\n'}favourite sushi?
          </Text>

          <Search />
          <Catagory SeeallTxt={'Category'} />
        </View>
        <View style={{paddingLeft: 16}}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={constants.dishNameList}
            renderItem={renderItems}
          />
        </View>
        <View style={{paddingHorizontal: 16}}>
          <Catagory SeeallTxt={'Top Sushi'} topSushiMargin={{marginTop: 10}} />
        </View>
        <FlatList
            style={{paddingLeft: 16}}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={constants.itemArray}
          renderItem={dishList}
        />
      </ScrollView>
    </View>
  );
};

export default index;
