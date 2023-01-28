import React, { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {
  Dimensions,
  SafeAreaView,
  View,
  Image,
  TextInput,
  Text,
  TouchableOpacity,
  FlatList,
  Alert,
  ScrollView,
  StyleSheet,
  Button,
} from 'react-native';

import COLORS from '../const/COLORS';
import hotel from '../Component/hotel';
import ItemCarDontainer from '../Component/ItemCarDontainer';
import ImageExample from '../styles/ImageExample';
import CreatePost from '../screens/CreatePost';
import { IncrementFun } from '../screens/CreatePost';
import { count } from '../screens/CreatePost';
const number1 = 2000;
const setcount = 0;
import { Badge1, Badge2, Badge3 } from '../styles/ImageExample'
export default function BalanceScreenMain() {


let maxpoints =10000
  const [number, setnumber] = useState(10000);



  //const cardGap = 16;
  //const i=0;
  //const cardWidth = (Dimensions.get('window').width - cardGap * 3) / 2;

  const onPress = (val) => {
    if (number - val > 0) {

      setnumber(number - val)
      Alert.alert(`Points redeemed ${val}`)
    } else {
      Alert.alert('Value cannot be redeemed ')
    }

  }

  const setBadge = () => {
    if (number > 0 && number < 3000) {
      return <Badge1 />
    } else if (number < 10000 && number > 2999) {
      return <Badge2 />
    } else {
      return <Badge3 />
    }
  }
  const ProgressBar = () => {
return <View style={style.progressOuter}>
<View style={[style.progressInner60,{width:`${number/maxpoints*100}%`}]} />
</View>


  }

  const Top = ({ ItemCarDontainer, hotel, navigation, CreatePost }) => {


    return (
      <TouchableOpacity activeOpacity={0.8}>
        <View style={style.cardTop}>
          <View style={{ width: '30%' }}>

            {setBadge()}
          </View>
          <View style={{ width: '70%', paddingTop: '20%' }}>
            <Text
              style={{ fontWeight: 'bold', color: "black", fontSize: 30 }}>
              {number}
            </Text>

            <View style={{ marginTop: '20%', marginRight: '10%' }}>

              {ProgressBar()}
              <Text style={{marginTop:5}}>Your are {100-(number/maxpoints*100)}% away to earn the next badge </Text>
            </View>
          </View>

        </View>

      </TouchableOpacity>
    );
  };
  const Card = ({ hotel, Top, navigation }) => {
    return (

      <TouchableOpacity
        activeOpacity={0.8}>

        <View style={style.cardContainer}>
          {/* Render the card image */}
          <View style={style.cardImageContainer}>
            <Image
              source={hotel.image}
              style={{
                width: '100%',
                height: '100%',
                resizeMode: 'contain',
              }}
            />
          </View>
          <View style={style.cardDetailsContainer}>
            {/* Name and gender icon */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text
                style={{ fontWeight: 'bold', color: "grey", fontSize: 13 }}>
                {hotel?.name}
              </Text>
            </View>
            <Text style={{ fontSize: 12, marginTop: 5, color: COLORS.dark }}>
              {hotel?.type}
            </Text>
            <Text style={{ fontSize: 10, marginTop: 5, color: COLORS.black }}>
              {hotel?.points}
            </Text>

            <TouchableOpacity style={style.button} onPress={() => onPress(hotel.value)}>
              <Text style={style.textstyle}> Redeem </Text>
              <View style={{ marginLeft: 0 }}>

                <Ionicons name={"gift-outline"} size={13} color={"white"} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  };


  const BalanceScreen = ({ navigation }) => {

    return (


      <SafeAreaView>
        <ScrollView>
          <View>
            <Text>    </Text>
            <Text style={{ fontWeight: 'bold', color: "purple", fontSize: 30 }}> Greetings Sara!</Text>
            <View style={{ marginTop: 30 }}>
              <FlatList
                showsVerticalScrollIndicator={false}
                data={ItemCarDontainer}
                renderItem={({ item }) => (
                  <View>
                    <Top ItemCarDontainer={item} navigation={navigation} />

                  </View>
                )}
              />


            </View>
            {/* Render the cards with flatlist */}
            <View style={{ marginTop: 20 }}>
              <FlatList
                showsVerticalScrollIndicator={false}
                data={hotel}
                renderItem={({ item }) => (
                  <Card hotel={item} navigation={navigation} />
                )}
              />
            </View>

          </View>
        </ScrollView>
      </SafeAreaView>
    );
  };



  return (
    <BalanceScreen />
  )
}




const style = StyleSheet.create({
  progressOuter: { width: '100%', height: 8, borderRadius: 12, backgroundColor: "#eee" },
  progressInner30: { width: "30%", backgroundColor: "blue", height: 8, zIndex: 100, borderRadius: 12 },
  progressInner60: { width: "60%", backgroundColor: "blue", height: 8, zIndex: 100, borderRadius: 12 },
  progressInner100: { width: "100%", backgroundColor: "blue", height: 8, zIndex: 100, borderRadius: 12 },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    //flexWrap: 'wrap',



  },
  cardDetailsContainer: {
    height: 120,
    backgroundColor: COLORS.white,
    flex: 1,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    padding: 20,
    justifyContent: 'center',
  },
  cardTop: {
    height: 250,
    backgroundColor: "white",
    flex: 1,
    borderTopRightRadius: 1,
    borderBottomRightRadius: 1,
    paddingLeft: 20,
    flexDirection: 'row',
    marginBottom: 20,
    width: '100%'
  },
  cardImageContainer: {
    height: 150,
    width: 180,
    backgroundColor: 'white',
    borderRadius: 20,

    //marginTop: cardGap,
    //width: cardWidth,
    //marginLeft: i % 2 !== 0 ? cardGap:0,
    //height: 180,
    //backgroundColor: 'white',
    //borderRadius: 16,
    //shadowOpacity: 0.2,
    //justifyContent: 'center',
    //alignItems:'center',
  },
  button: {
    height: 25,
    width: 80,
    backgroundColor: '#5e2590',
    borderRadius: 10,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignself: 'center',
    flexDirection: 'row'
  },
  textstyle: {
    color: 'white',
    fontWeight: 'bold',
    alignContent: 'center',
    fontSize: 8,

  },
});