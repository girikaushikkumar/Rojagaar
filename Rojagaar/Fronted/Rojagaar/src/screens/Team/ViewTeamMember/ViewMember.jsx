import { FlatList, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import style from './style';
import globalStyle from '../../../assets/style/globalStyle';
import NamingAvatar from '../../../components/NamingAvatar/NamingAvatar';
const ViewMember = ({route}) => {
    const {member} = route.params;
    console.log(member)
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite,globalStyle.flex]}>
         <FlatList
        data={member}
        renderItem={({item}) => (
          <View style={style.container}>
            <View style={style.posteContainer}>
              {item.photo ? (
                <Image
                  source={{
                    uri: `data:image/jpeg;base64,${item.photo.image.data.toString(
                      'base64',
                    )}`,
                  }}
                  style={style.avatarImage}
                />
              ) : item.name ? (
                <NamingAvatar
                  name={item.name}
                  avatarSize={43}
                  textSize={16}
                  padding={5}
                />
              ) : null}
              <Text style={style.nameText}>{item.name}</Text>
            </View>
            <View style={style.subContainer}>
              <Text style={style.text}>Age</Text>
              <Text style={style.value}>{item.age}</Text>
            </View>

            <View style={style.subContainer}>
              <Text style={style.text}>Address</Text>
              <Text style={style.value}>
                {item.address.village}
                {', '}
                {item.address.village}
              </Text>
            </View>
           
          </View>
        )}
      />
    </SafeAreaView>
  )
};

export default ViewMember;

