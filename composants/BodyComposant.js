import React from "react-native";
import { View, StyleSheet, Image, Text } from "react-native";
export default function BodyCompo() {
  return (
    <View style={vuePrincipale.container}>
      <View style={vueSecondaire.container}>
        <Image
          source={require("../assets/iconeMail.png")}
          style={vueImage.container}
        />
      </View>
      <View style={vueSecondaire.container}>
        <Image
          source={require("../assets/iconePassword.png")}
          style={vueImage.container}
        />
      </View>
      <View style={vueBouton.container}>
        <Text style={vueTexte.container}>Se Connecter</Text>
      </View>
      <View>
        <Text style={vueTexteDeux.container}>Mot de passe oublié ?</Text>
      </View>
      <View style={vueFooter.container}>
        <Image
          source={require("../assets/iconeGoogle.png")}
          style={vueImage.container}
        />
        <Text>ou</Text>
        <Image
          source={require("../assets/iconeFacebook.png")}
          style={vueImage.container}
        />
      </View>
      <Text style={vueTexteDeux.container}>Inscription</Text>
    </View>
  );
}
const vuePrincipale = StyleSheet.create({
  container: {
    marginTop: 25,
  },
});
const vueSecondaire = StyleSheet.create({
  container: {
    height: 70,
    width: 340,
    justifyContent: "center",
    backgroundColor: "#e5e7e6",
    borderRadius: 22,
    marginTop: 25,
    marginHorizontal: 10,
  },
});
const vueImage = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
});
const vueBouton = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginTop: 25,
    borderRadius: 222,
    backgroundColor: "green",
  },
});
const vueTexte = StyleSheet.create({
  container: {
    color: "white",
    textAlign: "center",
    padding: 20,
    fontSize: 20,
  },
});
const vueTexteDeux = StyleSheet.create({
  container: {
    color: "black",
    textAlign: "center",
    padding: 12,
    fontSize: 15,
  },
});
const vueFooter = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
});
