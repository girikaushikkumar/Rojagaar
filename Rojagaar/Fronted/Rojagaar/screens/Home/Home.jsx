import { View, Text } from 'react-native';
import React, { useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import { SafeAreaView } from 'react-native-safe-area-context';
import globalStyle from '../../assets/style/globalStyle';
import FooterMenu from '../../components/Menu/FooterMenu/FooterMenu';
import {style} from './style';
const Home = () => {
  const [userState] = useContext(AuthContext);
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite,globalStyle.flex]}>
      <Text style={{color:'black'}}>{JSON.stringify(userState,null,5)}</Text>

      <View style={style.footer}>
        <FooterMenu/>
      </View>

    </SafeAreaView>
  )
};

export default Home;