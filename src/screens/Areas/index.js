import React from "react";
import { View, Image, Text } from "react-native";
import { Button } from "react-native-elements";
import styles from "./styles";

export default function Areas({ navigation }) {
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
        <View style={styles.boxGrid}>
          <Text style={styles.title}>Áreas</Text>
          <View style={styles.gridButton}>
            <Button icon={
              <Image
                source={require("../../assets/agave.png")}
                style={styles.icon}
              />
          } title='Área 1' titleStyle={{fontFamily: 'Quantico-Regular', color: '#5B5B5B', marginTop: 10}} buttonStyle={{
                width: 120,
                height: 120,
                backgroundColor: '#E9E9E9',
                flexDirection: 'column',
                justifyContent: 'center'
            }} raised={true} onPress={() => navigation.navigate('AreaUm')}/>
            <Button icon={
              <Image
                source={require("../../assets/agave.png")}
                style={styles.icon}
              />
          } title='Área 2' titleStyle={{fontFamily: 'Quantico-Regular', color: '#5B5B5B', marginTop: 10}} buttonStyle={{
                width: 120,
                height: 120,
                backgroundColor: '#E9E9E9',
                flexDirection: 'column',
                justifyContent: 'center'
            }} raised={true} onPress={() => navigation.navigate('AreaDois')}/>
          </View>
          <View style={styles.gridButton}>
            <Button icon={
                <Image
                  source={require("../../assets/agave.png")}
                  style={styles.icon}
                />
            } title='Área 3' titleStyle={{fontFamily: 'Quantico-Regular', color: '#5B5B5B', marginTop: 10}} buttonStyle={{
                width: 120,
                height: 120,
                backgroundColor: '#E9E9E9',
                flexDirection: 'column',
                justifyContent: 'center'
            }} raised={true} onPress={() => navigation.navigate('AreaTres')}/>
            <Button icon={
              <Image
                source={require("../../assets/agave.png")}
                style={styles.icon}
              />
          } title='Área 4' titleStyle={{fontFamily: 'Quantico-Regular', color: '#5B5B5B', marginTop: 10}} buttonStyle={{
                width: 120,
                height: 120,
                backgroundColor: '#E9E9E9',
                flexDirection: 'column',
                justifyContent: 'center'
            }} raised={true} onPress={() => navigation.navigate('AreaQuatro')}/>
          </View>
        </View>
      </View>
    </View>
  );
}