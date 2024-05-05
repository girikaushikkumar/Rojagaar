import {
  SafeAreaView,
  TouchableOpacity,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import React, {useContext, useEffect, useRef, useState} from 'react';
import style from './style';
import globalStyle from '../../assets/style/globalStyle';
import {Routes} from '../../navigation/Routes';
import FooterMenu from '../../components/Menu/FooterMenu/FooterMenu';
import {AuthContext} from '../../context/authContext';
import {verticalScale} from '../../assets/style/scaling';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faLocation,
  faLocationArrow,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';

const Dashboard = ({navigation}) => {
  const [userState] = useContext(AuthContext);
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
        {/* <ScrollView
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
        </ScrollView> */}
        <View style={style.pcontainer}>
          <View style={style.profileContainer}>
            <View style={style.profileImageContainer}>
              {userState.user.photo ? (
                <Image
                  source={{
                    uri:
                      'data:image/jpeg;base64,' +
                      userState.user.photo.image.data.toString('base64'),
                  }}
                  style={style.photo}
                />
              ) : (
                <NamingAvatar
                  name={userState.user.name}
                  avatarSize={100}
                  textSize={45}
                  padding={5}
                />
              )}
              <View style={style.textContainer}>
                <Text style={style.name}>{userState.user.name}</Text>
                <Text style={style.phone}>{userState.user.phoneNo}</Text>
              </View>
            </View>

            <View
              style={{
                borderWidth: 1,
                borderColor: '#ffffff',
                marginTop: verticalScale(30),
              }}></View>

            <View style={style.locationContainer}>
              <FontAwesomeIcon
                icon={faLocationDot}
                size={25}
                color="red"
                style={style.licon}
              />
              <Text style={style.ltext}>
                {userState.user.address.village}
                {', '}
                {userState.user.address.district}
              </Text>
            </View>
          </View>
          <TouchableOpacity style={style.editBtn} onPress={()=> navigation.navigate(Routes.Profile)}>
            <Text style={style.btnText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>

        <View style={style.container}>
          <TouchableOpacity
            style={style.workOrder}
            onPress={() => navigation.navigate(Routes.JobInvites)}>
            <Image
              source={require('../../assets/images/dashboard/checklist.png')}
              style={style.checklist}
            />
            <Text style={style.workOrderText}>My Work Orders</Text>
          </TouchableOpacity>

          <View style={style.hireContainer}>
            <Text style={style.title}>Hire</Text>
            <View style={style.categoryContainer}>
              <TouchableOpacity
                style={style.card}
                onPress={() => navigation.navigate(Routes.Category)}>
                <Image
                  source={require('../../assets/images/dashboard/new-hire.png')}
                  style={style.img}
                />
                <Text style={style.text}>Hire</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={style.card}
                onPress={() => navigation.navigate(Routes.HiringStatus)}>
                <Image
                  source={require('../../assets/images/dashboard/status.png')}
                  style={style.img}
                />
                <Text style={style.text}>Hire Status</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={style.jobContainer}>
            <Text style={style.title}>Job</Text>
            <View style={style.categoryContainer}>
              <TouchableOpacity
                style={style.card}
                onPress={() => navigation.navigate(Routes.Job)}>
                <Image
                  source={require('../../assets/images/dashboard/job-search.png')}
                  style={style.img}
                />
                <Text style={style.text}>Job</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={style.card}
                onPress={() => navigation.navigate(Routes.ApplicationStatus)}>
                <Image
                  source={require('../../assets/images/dashboard/status.png')}
                  style={style.img}
                />
                <Text style={style.text}>Application Status</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={style.card}
                onPress={() => navigation.navigate(Routes.SavedJob)}>
                <Image
                  source={require('../../assets/images/dashboard/save.png')}
                  style={style.img}
                />
                <Text style={style.text}>Saved Job</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={style.jobPostContainer}>
            <Text style={style.title}>Job Post</Text>
            <View style={style.categoryContainer}>
              <TouchableOpacity
                style={style.card}
                onPress={() => navigation.navigate(Routes.PostJob)}>
                <Image
                  source={require('../../assets/images/dashboard/posting.png')}
                  style={style.img}
                />
                <Text style={style.text}>Post Job</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={style.card}
                onPress={() => navigation.navigate(Routes.ViewJobPost)}>
                <Image
                  source={require('../../assets/images/dashboard/check-list.png')}
                  style={style.img}
                />
                <Text style={style.text}>View</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={style.teamtContainer}>
            <Text style={style.title}>Team</Text>
            <View style={style.categoryContainer}>
              <TouchableOpacity
                style={style.card}
                onPress={() => navigation.navigate(Routes.CreateTeam)}>
                <Image
                  source={require('../../assets/images/dashboard/diversity.png')}
                  style={style.img}
                />
                <Text style={style.text}>Create Team</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={style.card}
                onPress={() => navigation.navigate(Routes.JoinTeam)}>
                <Image
                  source={require('../../assets/images/dashboard/add.png')}
                  style={style.img}
                />
                <Text style={style.text}>Join Team</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Dashboard;
