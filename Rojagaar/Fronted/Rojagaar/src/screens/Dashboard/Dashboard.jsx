import {
  SafeAreaView,
  TouchableOpacity,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import style from './style';
import globalStyle from '../../assets/style/globalStyle';
import HeaderText from '../../components/HeaderText/HeaderText';
import { Routes } from '../../navigation/Routes';
import FooterMenu from '../../components/Menu/FooterMenu/FooterMenu';

const Dashboard = ({navigation}) => {
  const scrollViewRef = useRef(null);
  const screenWidth = Dimensions.get('window').width;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    require('../../assets/images/dhana.jpg'),
    require('../../assets/images/lowskill1.jpg'),
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1,
      );
    }, 3000); // Change the interval as per your requirement (in milliseconds)

    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        x: screenWidth * currentImageIndex,
        animated: true,
      });
    }
  }, [currentImageIndex]);

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      {/* <HeaderText text={'Dashboard'} /> */}
      <ScrollView>
        <ScrollView
          horizontal
          ref={scrollViewRef}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          style={style.scrl1}>
          {images.map((image, index) => (
            <View key={index} style={{width: screenWidth}}>
              <Image source={image} style={style.navImg} />
            </View>
          ))}
        </ScrollView>

        <View style={style.container}>
          <View style={style.subContainer1}>
            <TouchableOpacity style={style.card} onPress={()=> navigation.navigate(Routes.Job)}>
              <Image
                source={require('../../assets/images/dashboard/job-search.png')}
                style={style.img}
              />
              <Text style={style.text}>Job</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.card} onPress={()=> navigation.navigate(Routes.Category)}>
              <Image
                source={require('../../assets/images/dashboard/new-hire.png')}
                style={style.img}
              />
              <Text style={style.text}>Hire</Text>
            </TouchableOpacity>
          </View>
          <View style={style.subContainer2}>
            <TouchableOpacity style={style.card} onPress={()=> navigation.navigate(Routes.PostJob)}>
              <Image
                source={require('../../assets/images/dashboard/posting.png')}
                style={style.img}
              />
              <Text style={style.text}>Post Job</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.card} onPress={()=> navigation.navigate(Routes.Profile)}>
              <Image
                source={require('../../assets/images/dashboard/profile.png')}
                style={style.img}
              />

              <Text style={style.text}>Profile</Text>
            </TouchableOpacity>
          </View>
          <View style={style.subContainer2}>
            <TouchableOpacity style={style.card}>
              <Image
                source={require('../../assets/images/dashboard/diversity.png')}
                style={style.img}
              />
              <Text style={style.text}>Team</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.card}>
              <Image
                source={require('../../assets/images/dashboard/logout.png')}
                style={style.img}
              />
              <Text style={style.text}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <FooterMenu/>
    </SafeAreaView>
  );
};

export default Dashboard;
