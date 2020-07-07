import React from "react";
import { View, Text, ScrollView } from "react-native";
import { Button } from "react-native-elements";
import { data } from "../../components/Dados";

import styles from "./styles";

export default function Grafico() {
  let data2 = [
    {
      'speed': 74,
      'balance': 29,
      'explosives': 40,
      'energy': 40,
      'flexibility': 30,
      'agility': 25,
      'endurance': 44,
    },
  ];
  let options = {
    width: 290,
    height: 290,
    margin: {
      top: 20,
      left: 20,
      right: 30,
      bottom: 20,
    },
    r: 150,
    max: 100,
    fill: "#2980B9",
    stroke: "#2980B9",
    animate: {
      type: "oneByOne",
      duration: 200,
    },
    label: {
      fontFamily: "Arial",
      fontSize: 14,
      fontWeight: true,
      fill: "#34495E",
    },
  };
  return (
    <View style={styles.container}>
      <View style={styles.boxWhite}>
        <View style={styles.boxLogo}>
          <Text style={styles.textBlue}>In</Text>
          <Text style={styles.textGreen}>dS</Text>
          <Text style={styles.textYellow}>us</Text>
        </View>
        <View style={styles.boxGrid}>
          <Text style={styles.title}>Gráfico</Text>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            flexGrow: 1,
            alignItems: "center",
            borderRadius: 8,
            marginTop: 10,
            marginBottom: 10,
            paddingBottom: 140,
            elevation: -5,
          }}
        >
          <Button
            title="Voltar"
            titleStyle={{ fontFamily: "Quantico-Bold" }}
            buttonStyle={{
              width: 200,
              height: 48,
              backgroundColor: "#57AD55",
            }}
            raised
            onPress={() => {
              data.map((item) => {
                item.nota = 0;
                item.checked1 = false;
                item.checked2 = false;
                item.checked3 = false;
                item.checked4 = false;
                item.checked5 = false;
              });
            }}
          />
        </ScrollView>
      </View>
    </View>
  );
}
