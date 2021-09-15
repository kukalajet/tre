import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

type RootBottomTabParams = {
  Home?: {};
  Search?: {};
  Profile?: {};
};

const RootBottomTab = createBottomTabNavigator<RootBottomTabParams>();

export default RootBottomTab;
