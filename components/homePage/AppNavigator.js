import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack"; 
import Setting from './Setting'
import LichThi from '../inSettingPage/LichThi'
import GioiThieu from "../inSettingPage/GioiThieu";
import DKTC from '../inSettingPage/DKTC'
import IndexHocPhi from '../inSettingPage/IndexHocPhi'
import KetQua from "../inSettingPage/KetQua";
const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (
  <Navigator headerMode="none">

    <Screen name="Setting" component={Setting} />
    <Screen name="LichThi" component={LichThi} />
    <Screen name="GioiThieu" component={GioiThieu} />
    <Screen name="DKTC" component={DKTC} />
    <Screen name="HocPhi" component={IndexHocPhi}/>
    <Screen name="KetQua" component={KetQua}/>
  </Navigator>
);

const AppNavigator = () => (

  <HomeNavigator />

);
export default AppNavigator;