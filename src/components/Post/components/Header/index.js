import React from "react";
import { Text, View, Image } from "react-native";
import styles from "./styles";

import { Feather } from "@expo/vector-icons";

import ProfilePicture from "../../../ProfilePicture";

const Header = ({ imageUri, name }) => {
  return (
    <View style={styles.container}>
      <View style={styles.postAuthor}>
        <ProfilePicture size={50} uri={imageUri} />
        <Text style={styles.textStyle}>{name}</Text>
      </View>
      <Feather name="more-vertical" size={25} color="black" />
    </View>
  );
};

export default Header;
