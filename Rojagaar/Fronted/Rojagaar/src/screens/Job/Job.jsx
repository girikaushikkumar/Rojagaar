import {SafeAreaView, FlatList, Button, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import globalStyle from '../../assets/style/globalStyle';
import FooterMenu from '../../components/Menu/FooterMenu/FooterMenu';
import {style} from './style';
import JobCard from '../../components/JobCard/JobCard';
import SearchQuery from '../../components/SearchQuery/SearchQuery';
import {PostContext} from '../../context/PostContext';
import {AuthContext} from '../../context/authContext';
import {Routes} from '../../navigation/Routes';
const Job = ({navigation}) => {
  const [job] = useContext(PostContext);
  const [userState] = useContext(AuthContext);

  return (
    <SafeAreaView
      style={[globalStyle.backgroundWhite, globalStyle.flex, style.container]}>
      <SearchQuery />

      <FlatList
        data={job}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(Routes.ApplyJob, {
                job: item.jobDto,
                jobPosterName: item.jobPosterName,
                jobPosterPhoto: item.jobPosterPhoto,
              })
            }>
            <JobCard
              job={item.jobDto}
              jobPosterName={item.jobPosterName}
              jobPosterPhoto={item.jobPosterPhoto}
              bookmark = {true}
            />
          </TouchableOpacity>
        )}
        showsVerticalScrollIndicator={false}
      />

      <FooterMenu />
    </SafeAreaView>
  );
};

export default Job;
