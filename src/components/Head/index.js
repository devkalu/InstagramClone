import React from "react";
import { View, Image } from "react-native";

import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import styles from "./styles";

const Head = () => {
  return (
    <View style={styles.container}>
      <Ionicons name="camera-outline" size={35} color="black" />
      <Image
        source={require("../../assets/images/instagram.png")}
        style={styles.imageStyle}
      />
      <Ionicons name="paper-plane-outline" size={35} color="black" />
    </View>
  );
};

export default Head;
