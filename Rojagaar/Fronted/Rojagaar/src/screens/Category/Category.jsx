import React, { useContext, useState } from 'react';
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import globalStyle from '../../assets/style/globalStyle';
import style from './style';
import SearchQuery from '../../components/SearchQuery/SearchQuery';
import CategoryCard from '../../components/CategoryCard/CategoryCard';
import { LocationContext } from '../../context/LocationContext';
import SubmitBtn from '../../components/Forms/SubmitBtn';

const Category = () => {
  const [location] = useContext(LocationContext);
  const [searchQuery, setSearchQuery] = useState('');

  const categoryData = [
    { imageSource: require('../../assets/images/category/electrician.png'), text: 'Electrician' },
    { imageSource: require('../../assets/images/category/plumber.png'), text: 'Plumber' },
    { imageSource: require('../../assets/images/category/cooking.png'), text: 'Cooking' },
    { imageSource: require('../../assets/images/category/broom.png'), text: 'Broom' },
    { imageSource: require('../../assets/images/category/tea.png'), text: 'Agriculture' },
    { imageSource: require('../../assets/images/category/workers.png'), text: 'Labour' },
    { imageSource: require('../../assets/images/category/barber.png'), text: 'Barber' },
    { imageSource: require('../../assets/images/category/catering.png'), text: 'Catering' },
    { imageSource: require('../../assets/images/category/carpenter.png'), text: 'Carpenter' },
    { imageSource: require('../../assets/images/category/painter.png'), text: 'Painter' },
    { imageSource: require('../../assets/images/category/mechanic.png'), text: 'Mechanic' },
    { imageSource: require('../../assets/images/category/tailor.png'), text: 'Tailor' },
  ];

  const filteredCategoryData = categoryData.filter(item =>
    item.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const chunkArray = (arr, size) => {
    return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => {
      return arr.slice(i * size, i * size + size);
    });
  };

  const groupedCategoryData = chunkArray(filteredCategoryData, 3);

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <TouchableOpacity style={style.locationContainer}>
        <Text style={style.city}>{location.county}</Text>
        <Text>
          {location.village}, {location.state_district}, {location.state},{location.country},{location.postcode}
        </Text>
      </TouchableOpacity>
      <SearchQuery setSearchQuery={setSearchQuery} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.categoryContainer}>
          {groupedCategoryData.map((group, index) => (
            <View key={index} style={style.container}>
              {group.map((item, idx) => (
                <CategoryCard
                  key={idx}
                  imageSource={item.imageSource}
                  skill={item.text}
                  village={location.village}
                />
              ))}
            </View>
          ))}
        </View>
        <View style={style.btn}>
          <SubmitBtn title={'More...'} height={60} width={350} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Category;
