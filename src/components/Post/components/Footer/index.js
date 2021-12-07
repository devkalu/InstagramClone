import React from "react";
import { Text, View, FlatList } from "react-native";

import styles from "./styles";

import { FontAwesome } from "@expo/vector-icons";

const Footer = ({ size = 28, likes, comments }) => {
  return (
    <>
      <Text style={styles.textStyle}>{likes}</Text>
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <FontAwesome name="heart-o" size={size} color="black" />
          <FontAwesome name="comment-o" size={size} color="black" />
          <FontAwesome name="paper-plane-o" size={size} color="black" />
        </View>
        <FontAwesome name="bookmark-o" size={size} color="black" />
      </View>
      <View style={styles.comment}>
        <FlatList
          data={comments}
          renderItem={({ item }) => (
            <View style={styles.CommentsStyle}>
              <Text style={styles.commentAuthor}>{item.name}</Text>
              <Text>{item.comment}</Text>
            </View>
          )}
          keyExtractor={(item) => item.name}
        />
      </View>
    </>
  );
};

export default Footer;
