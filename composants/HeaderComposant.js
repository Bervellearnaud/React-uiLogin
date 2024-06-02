import React from "react-native";
import { StyleSheet, View, Text, Image } from "react-native";
export default function HeaderCompo() {
  return (
    <View>
      <View style={stylesP.container}>
        <Text style={stylesSecondary.texte}>Formation en React Native</Text>
        <Image
          style={stylesSecondary.image}
          source={require("../assets/iconeUser.png")}
        />
      </View>
    </View>
  );
}
const stylesP = StyleSheet.create({
  container: {
    backgroundColor: "green",
    height: 310,
    width: 370,
    borderBottomEndRadius: 350,
    borderBottomRightRadius: 150,
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 10,
    paddingTop: 50,
  },
});
const stylesSecondary = StyleSheet.create({
  texte: {
    color: "white",
    width: 215,
    height: 158,
    fontSize: 40,
    marginLeft: 20,
    alignItems: "center",
  },
  image: {
    marginRight: 35,
    width: 50,
    height: 58,
  },
});
