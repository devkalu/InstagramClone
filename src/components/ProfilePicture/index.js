import React from "react";
import { Image, View } from "react-native";

import styles from "./styles";

const ProfilePicture = ({ uri, size = 80 }) => (
  <View
    style={{
      ...styles.container,
      height: size + 6,
      width: size + 6,
      borderRadius: (size + 6) / 2,
    }}
  >
    <Image
      source={{
        uri,
      }}
      style={{
        ...styles.image,
        height: size,
        width: size,
        borderRadius: size / 2,
      }}
    />
  </View>
);

export default ProfilePicture;
