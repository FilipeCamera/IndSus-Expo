import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { Button } from "react-native-elements";
import { Feather } from "@expo/vector-icons";
import styles from "./styles";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <View style={styles.boxImage}>
          <Image
            source={require("../../assets/agave.png")}
            style={styles.logo}
          />
        </View>
        <View style={styles.boxImageLinear}>
          <Image source={require("../../assets/ondaLinear.png")} />
        </View>
      </View>
      <View style={styles.boxWhite}>
        <View style={styles.boxLogo}>
          <Text style={styles.textBlue}>In</Text>
          <Text style={styles.textGreen}>dS</Text>
          <Text style={styles.textYellow}>us</Text>
        </View>
        <View style={styles.boxButton}>
          <Button
            icon={<Feather name="plus" size={80} color="#5B5B5B" />}
            buttonStyle={{
              width: 150,
              height: 150,
              backgroundColor: "#E9E9E9",
              flexDirection: "column",
            }}
            title="Nova Pesquisa"
            titleStyle={{ fontFamily: "Quantico-Regular", color: "#5B5B5B" }}
            raised={true}
            onPress={() => navigation.navigate("Formulario")}
          />
          <Button
            icon={<Feather name="book-open" size={80} color="#5B5B5B" />}
            buttonStyle={{
              width: 150,
              height: 150,
              backgroundColor: "#E9E9E9",
              flexDirection: "column",
            }}
            title="Abrir Pesquisa"
            titleStyle={{ fontFamily: "Quantico-Regular", color: "#5B5B5B" }}
            raised={true}
            disabled
          />
        </View>
      </View>
    </View>
  );
}
