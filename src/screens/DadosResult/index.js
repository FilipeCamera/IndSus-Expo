import React, { useState } from "react";

import { View, Text, ScrollView } from "react-native";
import { data } from "../../components/Dados";
import { Feather } from "@expo/vector-icons";
import { Button } from "react-native-elements";
import styles from "./styles";

export default function DadosResult({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.boxWhite}>
        <View style={styles.boxLogo}>
          <Text style={styles.textBlue}>In</Text>
          <Text style={styles.textGreen}>dS</Text>
          <Text style={styles.textYellow}>us</Text>
        </View>
        <View style={styles.boxGrid}>
          <Text style={styles.title}>Dados</Text>
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
          <View style={styles.boxResultado}>
            <Text style={styles.resultText}>Resultado</Text>
            {data.map((item) => (
              <View key={item[0]} style={styles.boxDadosResult}>
                <Text style={styles.textDadosResult}>{item.title}</Text>
                <View style={styles.boxNota}>
                  <Text style={styles.textNota}>{item.nota}</Text>
                </View>
              </View>
            ))}
          </View>
          <Button
            title="Gerar Gráfico"
            titleStyle={{ fontFamily: "Quantico-Bold" }}
            buttonStyle={{
              width: 200,
              height: 48,
              backgroundColor: "#57AD55",
            }}
            raised
            onPress={() => navigation.navigate("Grafico")}
          />
          </ScrollView>
        </View>
      </View>
    </View>
  );
}
