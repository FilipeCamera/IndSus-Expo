import React from "react";
import { View, Image, Text } from "react-native";
import DataPicker from "react-native-datepicker";
import { Input, Button } from "react-native-elements";
import styles from "./styles";

export default function Formulario({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <View style={styles.boxImage}>
          <Image
            source={require("../../assets/agave.png")}
            style={styles.logo}
          />
        </View>
      </View>
      <View style={styles.boxWhite}>
        <View style={styles.boxLogo}>
          <Text style={styles.textBlue}>In</Text>
          <Text style={styles.textGreen}>dS</Text>
          <Text style={styles.textYellow}>us</Text>
        </View>
        <View style={styles.boxForm}>
          <Text style={styles.title}>Formulário</Text>
          <View style={styles.form}>
            <Input
              inputContainerStyle={{
                borderWidth: 1,
                borderRadius: 8,
                borderColor: "#C8C8C8",
                height: 50,
                paddingLeft: 10,
              }}
              inputStyle={{ fontSize: 16, color: "#5B5B5B" }}
              placeholder="Nome do Proprietário"
            />
            <Input
              inputContainerStyle={{
                borderWidth: 1,
                borderRadius: 8,
                borderColor: "#C8C8C8",
                height: 50,
                paddingLeft: 10,
              }}
              inputStyle={{ fontSize: 16, color: "#5B5B5B" }}
              placeholder="Localização"
            />
            <DataPicker
              mode="date"
              format="DD-MM-YYYY"
              customStyles={{
                dateInput: {
                  borderRadius: 4,
                  borderColor: '#C8C8C8',
                },
                dateText: {
                  color: '#5B5B5B'
                }
              }}
              style={{margin: 10}}
            />
          </View>
        </View>
        <Button
          title="Avançar"
          buttonStyle={{
            width: 250,
            height: 50,
            backgroundColor: "#006ACC",
            flexDirection: "column",
          }}
          titleStyle={{ fontFamily: "Quantico-Bold", fontSize: 16 }}
          raised={true}
          onPress={() => navigation.navigate("Areas")}
        />
      </View>
    </View>
  );
}
