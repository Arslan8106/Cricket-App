import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import colors from "../assets/colors/colors";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

import HomeScreen from "../screens/home/HomeScreen";
import MatchesScreen from "../screens/matches/MatchesScreen";
import CreatePlayers from "../screens/teams/CreatePlayers";
import CreateTeam from "../screens/teams/CreateTeam";
import AntDesign from "@expo/vector-icons/AntDesign";

const Tab = createBottomTabNavigator();

const TabBar = ({ navigation, route }) => {
  const [checkActive, setCheckActive] = useState("");
  const getHeaderTitle = (route) => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? "HomeScreen";
    switch (routeName) {
      case "HomeScreen":
        setCheckActive("");
        return "HomeScreen";
     case "MatchesScreen":
       setCheckActive("");
       return "MatchesScreen";
      case "CreateTeam":
        setCheckActive("");
        return "CreateTeam";
      case "CreatePlayer":
        setCheckActive("CreatePlayer");
        return "CreatePlayer";
      // case "Balance":
      //   setCheckActive("Balance");
      //   return "Balance";
      default:
        return "HomeScreen";
    }
  };
  React.useLayoutEffect(() => {
    navigation.setOptions({ headerTitle: getHeaderTitle(route) });
  }, [navigation, route]);
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.grey,
        tabBarStyle: [
          {
            backgroundColor: colors.darkBlue,
            display: "flex",
            height: 70,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
          },
          null,
        ],
        tabBarItemStyle: {
          marginTop: 15,
        },
      }}
    >
      <Tab.Screen name="HomeScreen" component={HomeScreen} options={{
        tabBarLabel: "",
        headerShown: false,

        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={35} />
        ),
        unmountOnBlur: true,
      }}
      />
      <Tab.Screen name="MatchesScreen" component={MatchesScreen} options={{
        headerShown: false,
        tabBarLabel: "",
        tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cricket" color={color} size={35} />
        ),
        unmountOnBlur: true,
      }}
                  />
      <Tab.Screen name="CreateTeam" component={CreateTeam} options={{
        headerShown: false,
        tabBarLabel: "",
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="plus-circle" color={color} size={31} />),
        unmountOnBlur: true,
      }}
      />
      <Tab.Screen name="CreatePlayer" component={CreatePlayers} options={{
        headerShown: false,
        tabBarLabel: "",
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="adduser" color={color} size={31} />),
        unmountOnBlur: true,
      }}
      />
      {/*<Tab.Screen name="ProfileScreen" component={BarcodeScreenStack} options={{*/}
      {/*  headerShown: false,*/}
      {/*  tabBarLabel: "",*/}
      {/*  tabBarIcon: () => (*/}
      {/*    <ScanButton />),*/}
      {/*  unmountOnBlur: true,*/}
      {/*}} />*/}
      {/*<Tab.Screen name="UserReservation" component={UserReservationScreenStack} options={{*/}
      {/*  headerShown: false,*/}
      {/*  tabBarLabel: "",*/}
      {/*  tabBarIcon: ({ color, size }) => (*/}
      {/*    (checkActive === "UserReservation") ? <ReservationActive /> : <Reservation />),*/}
      {/*  unmountOnBlur: true,*/}
      {/*}}*/}
      {/*/>*/}
      {/*<Tab.Screen name="Balance" component={BalanceScreenStack} options={{*/}
      {/*  headerShown: false,*/}
      {/*  tabBarLabel: "",*/}
      {/*  tabBarIcon: ({ color, size }) => (*/}
      {/*    (checkActive === "Balance") ? <BalanceActive /> : <Balance />), unmountOnBlur: true,*/}
      {/*}}*/}
      {/*/>*/}
    </Tab.Navigator>
  );
};
export default TabBar;
