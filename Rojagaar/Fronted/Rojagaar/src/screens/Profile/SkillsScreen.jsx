import React, { useContext, useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { getCategory } from '../../api/CategoryAndSubCategory';
import { updateSkills } from '../../api/User';
import { AuthContext } from '../../context/authContext';

const SkillsScreen = () => {
  // Define your category and subcategory data
  const [userState,setUserState] = useContext(AuthContext);
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSubcategories, setSelectedSubcategories] = useState([]);
  const [selectedData, setSelectedData] = useState([]);

  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getCategory();
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchData();
  }, []);

  // Function to handle category change
  // Function to handle category change
  const handleCategoryChange = (category) => {
    if (!selectedCategories.includes(category)) {
      setSelectedCategories([...selectedCategories, category]);
      // Add an empty array for subcategories by default
      setSelectedSubcategories((prevSubcategories) => [...prevSubcategories, []]);
    }
  };


  // Function to handle subcategory change
 // Function to handle subcategory change
const handleSubcategoryChange = (subcategory) => {
  setSelectedSubcategories((prevSubcategories) => {
    if (!prevSubcategories.includes(subcategory)) {
      return [...prevSubcategories, subcategory];
    }
    return prevSubcategories;
  });
};


  // Function to save selected categories and subcategories
  // Function to save selected categories and subcategories
const handleSave = async() => {
  try {
    const response = await updateSkills(selectedData,userState.user.userName);
    console.log(response.data);
    if(response.status === 200) {
      console.log(updated);
    }
  } catch (error) {
    console.log(error);
  }

  console.log('Selected Data:',selectedData)

};


const handleSelectedData = () => {
  const formattedData = selectedCategories.map((category) => {
    return {
      skill: category.categoryName,
      subSkills: selectedSubcategories
        .filter((subcategory) => category.subCategory.includes(subcategory)),
    };
  });

  // Convert subSkills arrays to arrays of strings
  const formattedDataStrings = formattedData.map((item) => ({
    skill: item.skill,
    subSkills: item.subSkills.map((subSkill) => subSkill),
  }));

  setSelectedData(formattedDataStrings);
};





  return (
    <View>
      <Text>Select Categories:</Text>
      <Picker
        selectedValue={null}
        onValueChange={(itemValue) => handleCategoryChange(itemValue)}
      >
        <Picker.Item label="Select Category" value={null} />
        {categories.map((category) => (
          <Picker.Item key={category.id} label={category.categoryName} value={category} />
        ))}
      </Picker>

      <Text>Selected Categories:</Text>
      {selectedCategories.map((category) => (
        <Text key={category.id}>{category.categoryName}</Text>
      ))}

      <Text>Select Subcategories:</Text>
      <Picker
        selectedValue={null}
        onValueChange={(itemValue) => handleSubcategoryChange(itemValue)}
      >
        <Picker.Item label="Select Subcategory" value={null} />
        {selectedCategories.length > 0 &&
          selectedCategories[selectedCategories.length - 1].subCategory.map((subcategory, index) => (
            <Picker.Item key={index} label={subcategory} value={subcategory} />
          ))}
      </Picker>

      <Text>Selected Subcategories:</Text>
      {selectedSubcategories.map((subcategory, index) => (
        <Text key={index}>{subcategory}</Text>
      ))}

      <Button title="Add" onPress={handleSelectedData} />

      <Button title="Save" onPress={handleSave} />
    </View>
  );
};

export default SkillsScreen;
