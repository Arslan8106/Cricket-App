import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import header from '../assets/styles/header';
import { useNavigation, useRoute } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import colors from "../assets/colors/colors";
import ProfileBlack from "../assets/images/signup-logo.png";
import ProfileYellow from "../assets/images/cricket-logo.png";
const Header = ({title}) => {
    const navigation = useNavigation();
  const route = useRoute();
  return (
        <View style={header.container}>
            <Text style={header.title}>{title}</Text>
          {route.name === 'HomeScreen' ? (
            <TouchableOpacity style={header.notificationIcon} onPress={() => navigation.navigate('HomeScreen')}>
              <MaterialCommunityIcons name="bell" size={25} color={colors.primary} style={header.notificationIconStyle} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={header.notificationIcon} onPress={() => navigation.navigate('HomeScreen')}>
              <MaterialCommunityIcons name="bell" size={25} color={colors.black} style={header.notificationIconStyle} />
            </TouchableOpacity>
          )}

          {route.name === 'MatchesScreen' ? (
            <TouchableOpacity style={header.notificationIcon} onPress={() => navigation.navigate('MatchesScreen')}>
                <MaterialCommunityIcons name="cricket" size={25} color={colors.primary} style={header.notificationIconStyle} />
          </TouchableOpacity>
          ) : (
            <TouchableOpacity style={header.notificationIcon} onPress={() => navigation.navigate('MatchesScreen')}>
                <MaterialCommunityIcons name="cricket" size={25} color={colors.black} style={header.notificationIconStyle} />
              {/*<MaterialCommunityIcons name="clipboard-check" size={25} style={header.reservationsIconStyle} />*/}
            </TouchableOpacity>
            )}

        </View>
    );
};
export default Header;
