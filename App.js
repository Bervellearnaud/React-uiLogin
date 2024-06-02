import React from "react-native";
import { View } from "react-native";
import HeaderCompo from "./composants/HeaderComposant";
import BodyCompo from "./composants/BodyComposant";

export default function App() {
  return (
    <View>
      <HeaderCompo />
      <BodyCompo />
    </View>
  );
}
