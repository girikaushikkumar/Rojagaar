import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useContext} from 'react';
import {PostContext} from '../../context/PostContext';
import HeaderText from '../../components/HeaderText/HeaderText';
import style from './style';
import NamingAvatar from '../../components/NamingAvatar/NamingAvatar';
import SubmitBtn from '../../components/Forms/SubmitBtn';
import globalStyle from '../../assets/style/globalStyle';
import FooterMenu from '../../components/Menu/FooterMenu/FooterMenu';
const JobDetails = ({route}) => {
  const {job} = route.params;
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <HeaderText text="Job Details" />

      <View style={style.posteContainer}>
        {job.jobPosterPhoto ? ( // Check if imageUri is not null
          <Image
            source={{
              uri:
                'data:image/jpeg;base64,' +
                job.jobPosterPhoto.image.data.toString('base64'),
            }}
            style={style.avatarImage}
          />
        ) : (
          <NamingAvatar
            name={job.jobPosterName}
            avatarSize={43}
            textSize={16}
            padding={5}
          />
        )}
        <Text style={style.nameText}>{job.jobPosterName}</Text>
      </View>

      <ScrollView>
        <View style={style.jobDetailsContainer}>
          <View>
            <Text style={style.title}>{job.jobDto.title}</Text>
            <Image
              source={require('../../assets/images/job.jpg')}
              style={style.jobImage}
            />
            <Text style={style.description}>{job.jobDto.description}</Text>
          </View>

          <View style={style.OtherContainer}>
            <Text style={style.key}>Location : </Text>
            <Text style={style.value}>{job.jobDto.location}</Text>
          </View>
          <View style={style.OtherContainer}>
            <Text style={style.key}>Team : </Text>
            <Text style={style.value}>{job.jobDto.team ? 'Yes' : 'No'}</Text>
          </View>
          <View style={style.OtherContainer}>
            <Text style={style.key}>Require Employee : </Text>
            <Text style={style.value}>{job.jobDto.noOfPeople}</Text>
          </View>
          <View style={style.OtherContainer}>
            <Text style={style.key}>Working Date : </Text>
            <Text style={style.value}>
              {' '}
              {new Date(job.jobDto.workingDate).toLocaleDateString()}
            </Text>
          </View>
          <View style={style.OtherContainer}>
            <Text style={style.key}>Working Time : </Text>
            <Text style={style.value}>{job.jobDto.workingTime}</Text>
          </View>
          <View style={style.OtherContainer}>
            <Text style={style.key}>Money : </Text>
            <Text style={style.value}>{job.jobDto.wage}</Text>
          </View>
          <Text></Text>
          <View style={style.button}>
            <SubmitBtn title={'Apply'} width={324} height={60} />
          </View>
        </View>
      </ScrollView>
      <FooterMenu/>
    </SafeAreaView>
  );
};

export default JobDetails;
