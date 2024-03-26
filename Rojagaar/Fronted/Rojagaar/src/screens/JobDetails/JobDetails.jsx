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
  const { job, jobPosterName, jobPosterPhoto } = route.params;
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <HeaderText text="Job Details" />

      <View style={style.posteContainer}>
      {jobPosterPhoto ? (
          <Image
            source={{
              uri: `data:image/jpeg;base64,${jobPosterPhoto.image.data.toString(
                'base64',
              )}`,
            }}
            style={style.avatarImage}
          />
        ) : jobPosterName ? (
          <NamingAvatar
            name={jobPosterName}
            avatarSize={43}
            textSize={16}
            padding={5}
          />
        ) : null // Render nothing if both jobPosterName and jobPosterPhoto are not available
        }
        <Text style={style.nameText}>{jobPosterName}</Text>
      </View>

      <ScrollView>
        <View style={style.jobDetailsContainer}>
          <View>
            <Text style={style.title}>{job.title}</Text>
            <Image
              source={require('../../assets/images/job.jpg')}
              style={style.jobImage}
            />
            <Text style={style.description}>{job.description}</Text>
          </View>

          <View style={style.OtherContainer}>
            <Text style={style.key}>Location : </Text>
            <Text style={style.value}>{job.location}</Text>
          </View>
          <View style={style.OtherContainer}>
            <Text style={style.key}>Team : </Text>
            <Text style={style.value}>{job.team ? 'Yes' : 'No'}</Text>
          </View>
          <View style={style.OtherContainer}>
            <Text style={style.key}>Require Employee : </Text>
            <Text style={style.value}>{job.noOfPeople}</Text>
          </View>
          <View style={style.OtherContainer}>
            <Text style={style.key}>Working Date : </Text>
            <Text style={style.value}>
              {' '}
              {new Date(job.workingDate).toLocaleDateString()}
            </Text>
          </View>
          <View style={style.OtherContainer}>
            <Text style={style.key}>Working Time : </Text>
            <Text style={style.value}>{job.workingTime}</Text>
          </View>
          <View style={style.OtherContainer}>
            <Text style={style.key}>Money : </Text>
            <Text style={style.value}>{job.wage}</Text>
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
