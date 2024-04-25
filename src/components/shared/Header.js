import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import header from '../assets/styles/header';
import {useNavigation, useRoute} from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import colors from "../assets/colors/colors";
import {logout} from "../../redux/action";
import {connect} from "react-redux";

const Header = ( props) => {
    const navigation = useNavigation();
    const route = useRoute();
    return (
        <View style={header.container}>
            <Text style={header.title}>{props.title}</Text>
            {route.name !== 'StartMatchScreen' && (
                <>
                    {/*{route.name === 'HomeScreen' ? (*/}
                    {/*    <TouchableOpacity style={header.notificationIcon}*/}
                    {/*                      onPress={() => navigation.navigate('HomeScreen')}>*/}
                    {/*        <MaterialCommunityIcons name="bell" size={25} color={colors.primary}*/}
                    {/*                                style={header.notificationIconStyle}/>*/}
                    {/*    </TouchableOpacity>*/}
                    {/*) : (*/}
                    {/*    <TouchableOpacity style={header.notificationIcon}*/}
                    {/*                      onPress={() => navigation.navigate('HomeScreen')}>*/}
                    {/*        <MaterialCommunityIcons name="bell" size={25} color={colors.black}*/}
                    {/*                                style={header.notificationIconStyle}/>*/}
                    {/*    </TouchableOpacity>*/}
                    {/*)}*/}

                    {route.name === 'MatchesScreen' ? (
                        <TouchableOpacity style={header.notificationIcon}
                                          onPress={() => navigation.navigate('MatchesScreenStack')}>
                            <MaterialCommunityIcons name="cricket" size={25} color={colors.primary}
                                                    style={header.notificationIconStyle}/>
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity style={header.notificationIcon}
                                          onPress={() => navigation.navigate('MatchesScreenStack')}>
                            <MaterialCommunityIcons name="cricket" size={25} color={colors.black}
                                                    style={header.notificationIconStyle}/>
                            {/*<MaterialCommunityIcons name="clipboard-check" size={25} style={header.reservationsIconStyle} />*/}
                        </TouchableOpacity>
                    )}
                    <TouchableOpacity onPress={() => props.logout()}>
                        <MaterialCommunityIcons name="logout" size={25} color={colors.black}
                                                style={header.notificationIconStyle}/>
                    </TouchableOpacity>
                </>
            )}

        </View>
    );
};
const mapStateToProps = state => {
    return {
        isAuthenticated: state.isAuthenticated,
        user: state.user,
    };
};

const mapDispatchToProps = {
    logout,
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
