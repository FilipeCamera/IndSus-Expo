import React, { useRef, useState } from "react";

import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import Carousel from "react-native-snap-carousel";
import { CheckBox } from "react-native-elements";
import { Feather } from "@expo/vector-icons";
import { data } from "../../components/Dados";
import styles from "./styles";

const {width, height} = Dimensions.get('screen')

export default function Dados({ navigation }) {
  const carousel = useRef();
  function renderDadosMenu({ item, index }) {
    return (
      <View style={styles.boxDados} key={index}>
        <View style={styles.headerDados}>
          <Text style={styles.headerText}>{item.title}</Text>
        </View>
        <View style={styles.body}>
          <Text style={styles.bodyText}>Nota:</Text>
          <View>
            <CheckBox
              title="1"
              checked={item.checked1}
              onPress={() => {
                data[index].checked1 = true
                data[index].checked2 = false
                data[index].checked3 = false
                data[index].checked4 = false
                data[index].checked5 = false
                data[index].nota = 1
              }}
              textStyle={{ fontFamily: "Quantico-Regular", color: "#5B5B5B" }}
            />
            <CheckBox
              title="2"
              checked={item.checked2}
              onPress={() => {
                data[index].checked2 = true
                data[index].checked1 = false
                data[index].checked3 = false
                data[index].checked4 = false
                data[index].checked5 = false
                data[index].nota = 2
              }}
              textStyle={{ fontFamily: "Quantico-Regular", color: "#5B5B5B" }}
            />
            <CheckBox
              title="3"
              checked={item.checked3}
              onPress={() => {
                data[index].checked1 = false
                data[index].checked2 = false
                data[index].checked3 = true
                data[index].checked4 = false
                data[index].checked5 = false
                data[index].nota = 3
              }}
              textStyle={{ fontFamily: "Quantico-Regular", color: "#5B5B5B" }}
            />
            <CheckBox
              title="4"
              checked={item.checked4}
              onPress={() => {
                data[index].checked1 = false
                data[index].checked2 = false
                data[index].checked3 = false
                data[index].checked4 = true
                data[index].checked5 = false
                data[index].nota = 4
              }}
              textStyle={{ fontFamily: "Quantico-Regular", color: "#5B5B5B" }}
            />
            <CheckBox
              title="5"
              checked={item.checked5}
              onPress={() => {
                data[index].checked1 = false
                data[index].checked2 = false
                data[index].checked3 = false
                data[index].checked4 = false
                data[index].checked5 = true
                data[index].nota = 5
              }}
              textStyle={{ fontFamily: "Quantico-Regular", color: "#5B5B5B" }}
            />
          </View>
        </View>
      </View>
    );
  }
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
          <Carousel
            ref={carousel}
            data={data}
            layout="default"
            inactiveSlideOpacity={0.3}
            renderItem={renderDadosMenu}
            sliderWidth={width}
            itemWidth={height > 760 ? width - 95 : width - 60}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("DadosResult")}
          >
            <Text style={styles.buttonText}>Finalizar</Text>
            <Feather name="arrow-right" color="#288BFF" size={15} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
