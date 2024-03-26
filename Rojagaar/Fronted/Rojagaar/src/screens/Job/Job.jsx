import {SafeAreaView, FlatList, Button, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import globalStyle from '../../assets/style/globalStyle';
import FooterMenu from '../../components/Menu/FooterMenu/FooterMenu';
import {style} from './style';
import JobCard from '../../components/JobCard/JobCard';
import SearchQuery from '../../components/SearchQuery/SearchQuery';
import {PostContext} from '../../context/PostContext';
const Job = ({navigation}) => {
  const [job] = useContext(PostContext);

  return (
    <SafeAreaView
      style={[globalStyle.backgroundWhite, globalStyle.flex, style.container]}>
      <SearchQuery />

      <FlatList
        data={job}
        renderItem={({item}) => (
          <JobCard
            job={item.jobDto}
            jobPosterName={item.jobPosterName}
            jobPosterPhoto={item.jobPosterPhoto}
          />
        )}
        showsVerticalScrollIndicator={false}
      />

      <FooterMenu />
    </SafeAreaView>
  );
};

export default Job;
