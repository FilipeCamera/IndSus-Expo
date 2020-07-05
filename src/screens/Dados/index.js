import React, { useRef, useState } from "react";

import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import Carousel from "react-native-snap-carousel";
import { CheckBox } from "react-native-elements";
import {Feather} from '@expo/vector-icons';
import { data } from "../../components/Dados";
import styles from "./styles";

export default function AreaUm({ navigation }) {
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
            <CheckBox title="1" textStyle={{fontFamily: 'Quantico-Regular', color: '#5B5B5B'}}/>
            <CheckBox title="2" textStyle={{fontFamily: 'Quantico-Regular', color: '#5B5B5B'}}/>
            <CheckBox title="3" textStyle={{fontFamily: 'Quantico-Regular', color: '#5B5B5B'}}/>
            <CheckBox title="4" textStyle={{fontFamily: 'Quantico-Regular', color: '#5B5B5B'}}/>
            <CheckBox title="5" textStyle={{fontFamily: 'Quantico-Regular', color: '#5B5B5B'}}/>
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
            sliderWidth={Dimensions.get("screen").width}
            itemWidth={Dimensions.get("screen").width - 60}
            contentContainerStyle={{padding: 10}}
          />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Finalizar</Text>
            <Feather name='arrow-right' color='#288BFF' size={15}/>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
