import {Image, SafeAreaView, ScrollView, Text, View} from 'react-native';
import React, {useContext} from 'react';
import style from './style';

const JobDetails = ({job}) => {
  return (
    <SafeAreaView>
      <View style={style.jobDetailsContainer}>
        <View>
          <Text style={style.title}>{job.category}</Text>
          {/* <Image
            source={require('../../assets/images/job.jpg')}
            style={style.jobImage}
          /> */}
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
      </View>
    </SafeAreaView>
  );
};

export default JobDetails;
