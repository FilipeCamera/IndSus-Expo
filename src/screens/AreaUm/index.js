import React from "react";

import { View, ScrollView, Text } from "react-native";
import { Button } from "react-native-elements";
import { pontos } from "../../components/Pontos";
import styles from "./styles";

export default function AreaUm({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.boxWhite}>
        <View style={styles.boxLogo}>
          <Text style={styles.textBlue}>In</Text>
          <Text style={styles.textGreen}>dS</Text>
          <Text style={styles.textYellow}>us</Text>
        </View>
        <View>
          <View style={styles.boxGrid}>
            <Text style={styles.title}>Área 1</Text>
          </View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              flexGrow: 1,
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
              paddingBottom: 150,
            }}
          >
            <View style={styles.gridButton}>
              {pontos.map((item) => (
                <View style={{margin: 10}}>
                  <Button
                    buttonStyle={{
                      width: 130,
                      height: 130,
                      backgroundColor: "#E9E9E9",
                      alignItems: "center",
                    }}
                    icon={
                      <View
                        style={{
                          position: "absolute",
                          top: 8,
                          right: 8,
                          width: 30,
                          height: 30,
                          borderRadius: 15,
                          borderWidth: 1,
                          borderColor: "#C4C4C4",
                          backgroundColor: "#FFF",
                        }}
                      />
                    }
                    title={item.title}
                    titleStyle={{
                      fontFamily: "Quantico-Regular",
                      color: "#5B5B5B",
                      marginTop: 10,
                    }}
                    raised={true}
                    onPress={() => navigation.navigate('Dados')}
                  />
                </View>
              ))}
            </View>
            <Button
              title="Finalizar"
              titleStyle={{ fontFamily: "Quantico-Bold" }}
              buttonStyle={{
                backgroundColor: "#006ACC",
                width: 250,
                height: 50,
              }}
            />
          </ScrollView>
        </View>
      </View>
    </View>
  );
}
