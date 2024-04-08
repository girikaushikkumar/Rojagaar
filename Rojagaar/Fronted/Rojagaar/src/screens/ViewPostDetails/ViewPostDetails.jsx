import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import React from 'react';
import HeaderText from '../../components/HeaderText/HeaderText';
import JobDetails from '../../components/JobDetails/JobDetails';
import NamingAvatar from '../../components/NamingAvatar/NamingAvatar';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/style/scaling';
import {getFontFamily} from '../../assets/fonts/helper';
import globalStyle from '../../assets/style/globalStyle';

const ViewPostDetails = ({route}) => {
  const {job, jobPosterName, jobPosterPhoto} = route.params;
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      {/* <HeaderText text="Job Details" /> */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.posteContainer}>
          {
            jobPosterPhoto ? (
              <Image
                source={{
                  uri: `data:image/jpeg;base64,${jobPosterPhoto.image.data.toString(
                    'base64',
                  )}`,
                }}
                style={styles.avatarImage}
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
          <Text style={styles.nameText}>{jobPosterName}</Text>
        </View>
        <JobDetails
          job={job}
          jobPosterName={jobPosterName}
          jobPosterPhoto={jobPosterPhoto}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ViewPostDetails;

const styles = StyleSheet.create({
  posteContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: verticalScale(13),
  },
  avatarImage: {
    height: horizontalScale(40),
    width: horizontalScale(40),
    borderRadius: horizontalScale(50),
    marginLeft: horizontalScale(15),
    marginTop: verticalScale(9),
  },
  nameText: {
    fontFamily: getFontFamily('Inter', '500'),
    fontSize: scaleFontSize(25),
    color: '#000000',
    marginLeft: horizontalScale(13),
    textAlign: 'center',
  },
});
