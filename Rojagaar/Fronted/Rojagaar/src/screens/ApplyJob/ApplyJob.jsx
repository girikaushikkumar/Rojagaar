import {SafeAreaView, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import globalStyle from '../../assets/style/globalStyle';
import HeaderText from '../../components/HeaderText/HeaderText';
import style from './style';
import NamingAvatar from '../../components/NamingAvatar/NamingAvatar';
import JobDetails from '../../components/JobDetails/JobDetails';
import SubmitBtn from '../../components/Forms/SubmitBtn';
import FooterMenu from '../../components/Menu/FooterMenu/FooterMenu';

const ApplyJob = ({route}) => {
  const {job, jobPosterName, jobPosterPhoto} = route.params;

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <HeaderText text="Job Details" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.posteContainer}>
          {
            jobPosterPhoto ? (
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
        <JobDetails
          job={job}
          jobPosterName={jobPosterName}
          jobPosterPhoto={jobPosterPhoto}
        />
        <View style={style.button}>
          <SubmitBtn title={'Apply'} width={324} height={60} />
        </View>
      </ScrollView>
      <FooterMenu />
    </SafeAreaView>
  );
};

export default ApplyJob;
