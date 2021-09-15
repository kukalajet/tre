import { createStackNavigator } from "@react-navigation/stack";
import { UseStore } from "zustand";

type RootStackParams = {
  Root?: {};
  Listing: { id: number };
  List: { useStore: UseStore<ListCommonType> };
};

const RootStack = createStackNavigator<RootStackParams>();

export default RootStack;
