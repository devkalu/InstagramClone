import React from "react";
import { Image, View } from "react-native";
import styles from "./styles";

const Body = ({ image }) => (
  <View style={styles.container}>
    <Image source={{ uri: image }} style={styles.imageStyle} />
  </View>
);

export default Body;
