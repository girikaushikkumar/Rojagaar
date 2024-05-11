import {Alert, FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import {horizontalScale, scaleFontSize, verticalScale} from '../../assets/style/scaling';
import {getFontFamily} from '../../assets/fonts/helper';
import Rating from '../../components/Rating/Rating';
import { Routes } from '../../navigation/Routes';

const TeamHire = ({navigation}) => {
  const route = useRoute();
  const {village, skill} = route.params;
//   console.log(village);
  const teamDetails = [
    {
      teamName: 'Mystic Ganges Team',
      skill: 'Electrician',
      noOfPeople: 12,
      noOfRating: 3,
    },
    {
      teamName: 'Jasmine Valley Collective',
      skill: 'Plumber',
      noOfPeople: 7,
      noOfRating: 3,
    },
    {
      teamName: 'Spice Route Crew',
      skill: 'Cooking',
      noOfPeople: 34,
      noOfRating: 4,
    },
    {
      teamName: 'Taj Mahal Alliance',
      skill: 'Broom',
      noOfPeople: 3,
      noOfRating: 2,
    },
    {
      teamName: 'Lotus Pond Ensemble',
      skill: 'Agriculture',
      noOfPeople: 23,
      noOfRating: 4,
    },
    {
      teamName: 'Monsoon Melody Squad',
      skill: 'Labour',
      noOfPeople: 34,
      noOfRating: 5,
    },
    {
      teamName: 'Royal Bengal Group',
      skill: 'Barber',
      noOfPeople: 2,
      noOfRating: 3,
    },
    {
      teamName: 'Kerala Spice Unit',
      skill: 'Catering',
      noOfPeople: 3,
      noOfRating: 2,
    },
    {
      teamName: "Maharaja's Court Team",
      skill: 'Carpenter',
      noOfPeople: 11,
      noOfRating: 4,
    },
    {
      teamName: 'Rajputana Riders',
      skill: 'Painter',
      noOfPeople: 5,
      noOfRating: 2,
    },
    {
      teamName: 'Sapphire Summit Team',
      skill: 'Mechanic',
      noOfPeople: 9,
      noOfRating: 3,
    },
    {
      teamName: 'Ruby Ridge Alliance',
      skill: 'Tailor',
      noOfPeople: 23,
      noOfRating: 2.2,
    },
  ];

  const filteredTeams = teamDetails.filter(team => team.skill === skill);

  const handleSubmit = () => {
    Alert.alert('Done')
    navigation.navigate(Routes.Dashboard);
  }

  return (
    <View>
      <FlatList
        data={filteredTeams}
        renderItem={({item}) => (
          <View style={styles.container}>
            <View style={styles.subContainer}>
              <Text style={styles.nameText}>Team Name: </Text>
              <Text style={styles.nameText}>{item.teamName}</Text>
            </View>
            <View style={styles.subContainer}>
              <Text style={styles.nameText}>Skill: </Text>
              <Text style={styles.nameText}>{item.skill}</Text>
            </View>
            <View style={styles.subContainer}>
              <Text style={styles.nameText}>No of People: </Text>
              <Text style={styles.nameText}>{item.noOfPeople}</Text>
            </View>
            <View style={styles.subContainer}>
            <Text style={styles.nameText}>Rating</Text>
              <Rating
                rating={item.noOfRating}
                onRatingChange={newRating => console.log(newRating)}
                isModify={false}
                userName={item.username}
              />
            </View>
            <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
              <Text style={styles.btntext}>Hire</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default TeamHire;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#dff5f1',
    borderRadius: 15,
    margin: horizontalScale(8),
    padding: horizontalScale(10),
    borderWidth: 2,
    borderColor: '#ffffff',
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
  },
  nameText: {
    fontFamily: getFontFamily('Inter', '500'),
    fontSize: scaleFontSize(16),
    color: '#000000',
    marginLeft: horizontalScale(10),
  },
  btn: {
    backgroundColor: '#0B6EFE',
    borderRadius: verticalScale(5),
    alignItems: 'center',
    justifyContent: 'center',
    width:horizontalScale(90),
    height:verticalScale(40)
  },
  btntext: {
    fontFamily: getFontFamily('Inter', 600),
    fontSize: scaleFontSize(24),
    color: '#FFFFFF'
  },
});
